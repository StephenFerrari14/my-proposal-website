import React from "react";
import styled, { keyframes } from "styled-components";

const yTranslates = [10, 30, 50, 70];
const stageDurations = [1, 4, 7, 10];

const stageOneKeyframe = keyframes`
0% {
  opacity: 0;
}
50% {
  opacity: 0;
}
100% {
  animation-timing-function: linear;
  transform: translateY(${yTranslates[0]}px);
  opacity: 1;
}
`;

const stageTwoKeyframe = keyframes`
0% {
  opacity: 0;
}
50% {
  opacity: 0;
}
100% {
  animation-timing-function: linear;
  transform: translateY(${yTranslates[1]}px);
  opacity: 1;
}
`;

const stageThreeKeyframe = keyframes`
0% {
  opacity: 0;
}
50% {
  opacity: 0;
}
100% {
  animation-timing-function: linear;
  transform: translateY(${yTranslates[2]}px);
  opacity: 1;
}
`;

const stageFourKeyframe = keyframes`
0% {
  opacity: 0;
}
50% {
  opacity: 0;
}
100% {
  animation-timing-function: linear;
  transform: translateY(${yTranslates[3]}px);
  opacity: 1;
}
`;

const Results = (props) => {
  const startSteps = props.searched;

  const StageOne = styled.div`
    animation: ${stageOneKeyframe} ${stageDurations[0]}s 1 normal forwards
      ${startSteps ? "running" : "paused"};
  `;
  const StageTwo = styled.div`
    animation: ${stageTwoKeyframe} ${stageDurations[1]}s 1 normal forwards
      ${startSteps ? "running" : "paused"};
  `;
  const StageThree = styled.div`
    animation: ${stageThreeKeyframe} ${stageDurations[2]}s 1 normal forwards
      ${startSteps ? "running" : "paused"};
  `;

  const StageFour = styled.div`
    animation: ${stageFourKeyframe} ${stageDurations[3]}s 1 normal forwards
      ${startSteps ? "running" : "paused"};
  `;
  return (
    <div>
      <StageOne>
        <div>Based on your search results...</div>
      </StageOne>
      <StageTwo>
        <div>Your perfect match is...</div>
      </StageTwo>
      <StageThree>
        <div>Stephen Ferrari</div>
      </StageThree>
      <StageFour>
        <div>Will you marry him?</div>
      </StageFour>
    </div>
  );
};

export default Results;
