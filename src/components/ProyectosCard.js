import { useState } from "react";
import Modal from "./Modal";
import "./styles/Proyectos.css";

const ProyectosCard = ({ info }) => {
  const keyEscape = (event) => {
    const tecla = event.keyCode;
    if (tecla === 27) {
      setModal(false);
    }
  };
  window.onkeydown = keyEscape;
  const [modal, setModal] = useState(false);
  const handleOpen = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <div className="proyectoscard">
        <img className="proyectoscard-img" src={info.img} alt="web" />
        <div className="card-link">
          <div className="card-info" onClick={handleOpen}>
            <p className="card-info-title">{info.name}</p>
          </div>
        </div>
        {modal && (
          <Modal handleClose={handleClose}>
            <div className="modal-top">
              <img className="modal-img" src={info.img} alt="sitio web" />
            </div>
            <header className="modal-header">
              <p className="modal-title">{info.name}</p>
              <div className="modal-links">
                {info.repo && (
                  <a className="modal-link-repo" href={info.repo} target="_blank" rel="noreferrer">
                    Repo &nbsp;
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      focusable="false"
                      height="12"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                )}
                {info.link && (
                  <a className="modal-link-demo" href={info.link} target="_blank" rel="noreferrer">
                    Demo &nbsp;
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                      focusable="false"
                      height="12"
                      width="12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                    </svg>
                  </a>
                )}
              </div>
            </header>

            <article className="modal-body">
              <section className="modal-text">{info.description}</section>
              <div className="modal-tecnologies">
                {info.tecnologies.map((tecnology, index) => (
                  <p key={index} className="modal-tecnologies-item">
                    {tecnology}
                  </p>
                ))}
              </div>
            </article>
          </Modal>
        )}
      </div>
    </>
  );
};
export default ProyectosCard;
