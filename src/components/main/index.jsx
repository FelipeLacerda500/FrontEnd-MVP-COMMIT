import React from "react";
import "./styles.css";
import UnderLineSampleText from "../underlineSampleText";
import MovieField from "../movieField";
const Main = () => {
  return (
    <main>
      <UnderLineSampleText className="principal-title">
        Lançamentos
      </UnderLineSampleText>
      <MovieField />
    </main>
  );
};

export default Main;
