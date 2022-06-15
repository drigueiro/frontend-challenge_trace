import type { NextPage } from "next";
import { useState, useMemo } from "react";
import Select from "react-select";
import Head from "next/head";
import { countryOptions } from "./data/countries";
import { Button } from "../styles/components/button";
import { Body } from "../styles/containers/body";
import { Container } from "../styles/containers/container";
import { FormDiv } from "../styles/containers/containerForm";

const Home: NextPage = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    lastName: "",
    email: "",
    dateOfBirthday: "",
    password: "",
    country: "",
    bio: "",
    receiveNotifications: "",
  });
  const onChangeInput = (e) =>
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const sendRegistration = async (e) => {
    e.preventDefault();
    console.log(dataForm.name);
    {
      try {
        const res = await fetch(
          "https://629f52338b939d3dc29519e3.mockapi.io/api/challenge/user",
          {
            method: "POST",
            body: JSON.stringify(dataForm),
          }
        );

        const responseEnv = await res.json();
        if (responseEnv.erroRetornado) {
          setResponse({
            type: "error",
            message: responseEnv.mensagemDoErro,
          });
        } else {
          setResponse({
            type: "success",
            message: responseEnv.mensagemSucesso,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="robots" content="index/follow" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossorigin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container>
        <div>
          <FormDiv>
            <h1>Cadastre-se</h1>
            <p>Para começar, insira os dados abaixo:</p>
            {response.type === "error" ? <p>{response.message}</p> : ""}
            {response.type === "success" ? <p>{response.message}</p> : ""}
            <form onSubmit={sendRegistration}>
              <input
                type="text"
                name="name"
                placeholder="Nome"
                onChange={onChangeInput}
                value={dataForm.name}
              ></input>
              <br />
              <input
                type="text"
                name="lastName"
                placeholder="Sobrenome"
                onChange={onChangeInput}
                value={dataForm.lastName}
              ></input>
              <br />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={onChangeInput}
                value={dataForm.email}
              ></input>
              <br />
              <input
                type="date"
                name="dateOfBirthday"
                placeholder="Data de nascimento"
                onChange={onChangeInput}
                value={dataForm.dateOfBirthday}
              ></input>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Senha"
                onChange={onChangeInput}
                value={dataForm.password}
              ></input>
              <br />
              <Select
                name="country"
                placeholder="Selecione seu país"
                options={countryOptions}
              />
              <br />
              <input
                type="text"
                name="bio"
                placeholder="Bio"
                onChange={onChangeInput}
                value={dataForm.bio}
              ></input>
              <br />
              <Button type="submit">Cadastrar</Button>
              <br />
              <input
                type="checkbox"
                name="receiveNotifications"
                onChange={onChangeInput}
                value={dataForm.receiveNotifications}
              ></input>{" "}
              <span>Desejo receber notificações</span>
              <br />
            </form>
          </FormDiv>
          <FormDiv form="info">
            <h1>Teste técnico</h1>
            <p>
              Controle suas contas nacionais e internacionais em um único lugar!
            </p>
          </FormDiv>
        </div>
      </Container>
    </div>
  );
};

export default Home;
