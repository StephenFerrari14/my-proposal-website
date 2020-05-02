import {useState} from 'react';
import PropTypes from 'prop-types';

const Stepper = ({children, config}) => {
  const [stepIndex, setStepIndex] = useState(0)

  if (!children) {
    return null
  }

  let configTimeout = 1
  if (config[stepIndex] && config[stepIndex].timeout) {
    configTimeout = config[stepIndex].timeout;
  }
  // Should add a check for if the children are transitions and have end listneer then use that else use a timeout
  setTimeout(() => {
    if (stepIndex <= children.length - 1) {
      setStepIndex(stepIndex + 1)
    }
  }, configTimeout);
  return children.reduce((acc, child, index) => {
    if (index <= stepIndex) {
      acc = [...acc, child]
    }
    return acc;
  },[]);
}

Stepper.propTypes = {
  children: PropTypes.children, 
  config: PropTypes.shape({
    timeout: PropTypes.number
  })
}

export default Stepper;