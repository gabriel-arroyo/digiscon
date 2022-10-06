import React from "react";
import SectionContainer from "../../../components/SectionContainer";
import ProcessItem from "./ProcessItem";

const Process = () => {
  return (
    <SectionContainer
      title="Our Process"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
      color="#6188c5"
    >
      <ProcessItem />
      <ProcessItem />
      <ProcessItem />
      <ProcessItem />
    </SectionContainer>
  );
};

export default Process;
