import React, { useState } from "react";
import ReactDOM from "react-dom";
import logo from "./assets/logo.png";
import principal from "./assets/raaa.png";
import Loader from "./components/Loader.jsx";
import ArrowBack from "./icons/ArrowBack.jsx";

function Principal() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ aggressor: "", victim: "" });
  const [messages, setMessages] = useState([]);

  const nextStep = () => setStep((step) => step + 1);

  const previousStep = () => setStep((step) => step - 1);

  const handleAnalyzeCase = () => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    setMessages([
      "Extrayendo información",
      "Analizando caso",
      "Generando reporte",
    ]);
    setLoading(true);
    setTimeout(() => {
      nextStep();
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 9000);
  };
  const InputContainer = ({ title = "", value = "" }) => {
    return (
      <>
        <label className='step-one-label' htmlFor=''>
          {title}
        </label>
        <input className='input' type='text' value={value} />
      </>
    );
  };
  const handleSearch = () => {
    window.scrollTo(0, 0);
    setMessages(["Buscando información", "Procesando información"]);
    setLoading(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
      setData({
        aggressor: {
          documentType: "Documento Nacional de Identidad",
          documentNumber: "45982387",
          name: "Gerardo Gonzales Cubas",
          address: "C. 15 lote 18, San Juan de Lurigancho 15457",
          type: "Agresión física",
        },
        victim: {
          documentType: "Documento Nacional de Identidad",
          documentNumber: "98458723",
          name: "Tatiana Lucy Guerrero Torres",
          address: "Lima 36 San Juan de Lurigancho, LIMA 36",
          date: "Sabado 15 de Octubre de 2020",
        },
        reason:
          "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente",
      });
    }, 6000);
  };
  const StepOne = () => {
    return (
      <>
        <div className='content-image'>
          <img src={principal} alt='' />
        </div>
        <div className='content-form-search'>
          <input
            className='input'
            placeholder='Ingrese el código de la denuncia'
            type='search'
            name=''
            id=''
          />
          <button className='button' onClick={handleSearch}>
            Buscar
          </button>
        </div>
        <div className='case-data-form'>
          <h3>Denuncia</h3>

          <form action=''>
            <div className='first-column-form'>
              <h4>Datos de la víctima</h4>
              <InputContainer
                title='Tipo de documento'
                value={data?.victim.documentType}
              />
              <InputContainer
                title='Número de documento'
                value={data?.victim.documentNumber}
              />
              <InputContainer
                title='Nombre completo'
                value={data?.victim.name}
              />
              <InputContainer title='Domicilio' value={data?.victim.address} />
              <InputContainer
                title='Fecha de la denuncia'
                value={data?.victim.date}
              />
            </div>
            <div className='second-column-form'>
              <h4>Datos del agresor</h4>
              <InputContainer
                title='Tipo de documento'
                value={data?.aggressor.documentType}
              />
              <InputContainer
                title='Número de documento'
                value={data?.aggressor.documentNumber}
              />
              <InputContainer
                title='Nombre completo'
                value={data?.aggressor.name}
              />
              <InputContainer
                title='Domicilio'
                value={data?.aggressor.address}
              />
              <InputContainer
                title='Tipo de violencia'
                value={data?.aggressor.type}
              />
            </div>
            <div className='bottom-form'>
              <label htmlFor=''>Motivo</label>
              <textarea cols='30' rows='10' value={data?.reason}></textarea>
              <button
                disabled={!data.aggressor.name}
                className='button'
                onClick={handleAnalyzeCase}
              >
                Analizar caso
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };
  const Item = ({ title, value = "Default value", style }) => {
    return (
      <div style={style}>
        <p>{title}</p>
        <span>{value}</span>
      </div>
    );
  };
  const StepTwo = () => {
    return (
      <div className='step-two-container'>
        <div className='hr' />
        <h2 style={{ margin: "1rem 0" }}>Resultados</h2>
        <div className='previous-button-container'>
          <button onClick={previousStep}>
            <ArrowBack />
          </button>
          <p>
            <strong>Código de denuncia:</strong> 20210052421
          </p>
        </div>
        <h3>Datos de la víctima</h3>
        <div className='step-two-content'>
          <Item
            title='Tipo de documento'
            value='Documento Nacional de Identidad'
          />
          <Item title='Número de documento' value='98458723' />
          <Item title='Nombre completo' value='Tatiana Lucy Guerrero Torres' />
          <Item
            title='Domicilio'
            value='Lima 36 San Juan de Lurigancho, LIMA 36'
          />
          <Item
            title='Fecha de denuncia'
            value='Sabado 15 de Octubre de 2020'
          />
        </div>
        <h3 style={{ marginTop: "4rem" }}>Datos del agresor</h3>
        <div className='step-two-content'>
          <Item
            title='Tipo de documento'
            value='Documento Nacional de Identidad'
          />
          <Item title='Número de documento' value='45982387' />
          <Item title='Nombre completo' value='Gerardo Gonzales Cubas' />
          <Item
            title='Domicilio'
            value='C. 15 lote 18, San Juan de Lurigancho 15457'
          />
          <Item title='Tipo de violencia' value='Agresión física' />
        </div>
        <h3 style={{ marginTop: "4rem" }}>Veredicto</h3>
        <div className='step-two-content reason'>
          <div>
            <p>96%</p>
          </div>
          <Item
            style={{ width: "70%" }}
            title=''
            value='Con una fiabilidad del 96% en relación a los datos recolectados. El señor Gerardo Gonzales Cubas identificado con DNI 45982387 ocasiono lesiones graves a la señora Tatiana Lucy Guerrero Torres identificada con DNI 98458723. Esta información es respaldada mediante la información recolectada de diversas entidades.'
          />
        </div>
        <h3 style={{ marginTop: "4rem" }}>
          Documentos de entidades involucradas
        </h3>
        <div className='step-two-content links-docs'>
          <br />
          <a href=''>
            Documentos - Ministerio de la Mujer y Poblaciones Vulnerables (MIMP)
          </a>
          <a href=''>Policía Nacional del Perú (PNP)</a>
          <a href=''>Registro Nacional de Identidad y Estado Civil (RENIEC)</a>
        </div>
      </div>
    );
  };

  const handleRenderStep = {
    1: <StepOne />,
    2: <StepTwo />,
  };

  return (
    <>
      {handleRenderStep[step]}
      {loading &&
        ReactDOM.createPortal(
          <Loader messages={messages} />,
          document.getElementById("portal")
        )}
    </>
  );
}

export default Principal;
