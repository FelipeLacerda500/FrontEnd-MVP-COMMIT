import React from "react";
import BoldSampleText from "../boldSampleText";
import "./styles.css";
import moviePhoto from "../assets/moviePhoto.PNG";
const MovieField = () => {
  return (
    <div className="movie-field">
      <img src={moviePhoto} className="movie-place" />
      <span className="description">
        <h4>
          <BoldSampleText>Nome do filme</BoldSampleText>
        </h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <ul>
          <strong>
            <li>Nome original:"Name"</li>
            <li>Gêneros:"Name1"|"Name2"</li>
            <li>Estreia:"DD/MM/YYYY"</li>
            <li>Conteúdo adulto:"Sim/Não" Duração:</li>
            <br />
            <li>Avaliação:</li>
          </strong>
        </ul>
      </span>
    </div>
  );
};

export default MovieField;
