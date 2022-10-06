import React from "react";
import SectionContainer from "../../../components/SectionContainer";
import ValueItem from "./ValueItem";

const Values = () => {
  return (
    <SectionContainer
      title="Our Values"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
      color="#27337e"
    >
      <ValueItem />
      <ValueItem />
      <ValueItem />
    </SectionContainer>
  );
};

export default Values;
