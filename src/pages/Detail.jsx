import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import getFlowers from "../services/getFlowers";
import classes from "./Detail.module.scss";

const Detail = () => {
  const id = useParams().id.split("-")[0];
  const [flower, setFlower] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getFlowers(id);
      setFlower(data);
    })();
  }, [id]);
  // Por alguna razón muchos de la requests a APi/product/id fallan, si bien un workaround podria haber sido pedir el array completo y filtrar,o pasar el que tenemos en state, y usarlo aqui he decidido dejarlo asi, en un entorno de desarrollo real, seria un momento para hablar con el equipo y encontrar el problema con la API.
  const {
    name,
    imgUrl,
    binomialName,
    price,
    wateringsPerWeek,
    fertilizerType,
    heightInCm,
  } = flower;
  return (
    <>
      {flower && name && price ? (
        <div className={classes.item}>
          <img
            src={imgUrl ? imgUrl : "https://via.placeholder.com/400"}
            alt={name}
          />

          <ul className={classes.item__info}>
            <li>{name}</li>
            <li>{binomialName && <i>{binomialName}</i>}</li>
            <li>{<b>{price} €</b>}</li>
            <li>
              {wateringsPerWeek &&
                (wateringsPerWeek === 1 ? (
                  <span>{wateringsPerWeek} riego por semana</span>
                ) : (
                  <span>{wateringsPerWeek} riegos por semana</span>
                ))}
            </li>
            <li>
              {fertilizerType && (
                <span>
                  Fertilizante{" "}
                  {fertilizerType
                    .replace("phosphorus", "fosforado")
                    .replace("nitrogen", "nitrogenado")}
                </span>
              )}
            </li>

            <li>{heightInCm && <span>{heightInCm} cm</span>}</li>
          </ul>
        </div>
      ) : (
        // Debido a la estructura de las rutas.. el 404 general va aqui.. esto es muy poco realista ya que nunnca pasariamos un slug diractamente desde home, pero esto es solo POC para una entrevista..
        <div className={classes.notFound}>
          <h1> 404</h1>
          <h2>Oops, la pagina que buscabas no está disponible</h2>
        </div>
      )}
    </>
  );
};

export default Detail;
