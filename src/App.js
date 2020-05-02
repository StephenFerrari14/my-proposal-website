import React, {useState} from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Results from "./components/Results";
import SearchBar from './components/SearchBar';
import Articles from './components/Articles';
import MenuAppBar from './components/MenuAppBar';
import banner from './assets/banner.png';

// Try out netlify

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [submitSearch, setSubmitSearch] = useState(false);

  return (
    <div className="App">
      <MenuAppBar></MenuAppBar>
      {/* <Header></Header> */}
      {/* <HeaderSearch></HeaderSearch> */}
      <Container>
        <img src={banner} alt="banner" style={{width: '100%'}}></img>
        {/* Commented out to hide for now but it works */}
        <SearchBar
          onChange={setSearchValue}
          onRequestSearch={() => setSubmitSearch(true)}
          value={searchValue}
          style={{
            margin: '0 auto',
            maxWidth: 800
          }}
        />
        <Results searched={submitSearch}></Results>
        <div style={{height: '100px'}}></div>
        <Articles></Articles>
      </Container>
    </div>
  );
}

export default App;
