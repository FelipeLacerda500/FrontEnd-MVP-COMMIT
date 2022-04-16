import React from "react";
import "./styles.css";
import BoldSampleText from "../boldSampleText";
import commitJr from "../assets/logoCommit.png";
const BaseBoard = () => {
  return (
    <footer>
      <img src={commitJr} className="photo-place" />
      <BoldSampleText>
        Produzido por Felipe Lacerda Fernandes de Assis
      </BoldSampleText>
      <BoldSampleText>--Inserir Logo Aqui-- </BoldSampleText>
    </footer>
  );
};

export default BaseBoard;
