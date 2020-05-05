import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  CardActionArea,
} from "@material-ui/core";
import Onions from "../assets/onions.png";
import Pasta from "../assets/pasta_lead.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "red",
  },
}));

const Articles = () => {
  const classes = useStyles();
  return (
    <div style={{ display: "flex", marginBottom: "4px" }}>
      <Card style={{ width: "50%" }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Onions}
            title="onion rings"
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h8" component="h2">
              Delicious homemade onion rings
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Trying making delicious onion ring breading with these two
              ingredients!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card style={{ width: "50%" }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Pasta}
            title="pasta dish"
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h8" component="h2">
              Top 10 kinds of pasta
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              From fettuccine to tagliatelle, find out about the different
              styles of pasta.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Articles;
