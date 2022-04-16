import React from "react";
import "./styles.css";
import BoldSampleText from "../boldSampleText";
import FormField from "../formField";
const Header = () => {
  return (
    <header>
      <BoldSampleText>--Inserir Logo Aqui--</BoldSampleText>
      <BoldSampleText>Lançamentos|Destaques </BoldSampleText>
      <FormField label="Pesquisar" />
    </header>
  );
};

export default Header;
