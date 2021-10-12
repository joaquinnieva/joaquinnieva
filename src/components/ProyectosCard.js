import "./styles/Proyectos.css";
import Modal from "./Modal";
import { useState } from "react";

const ProyectosCard = ({ info }) => {
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
        <div className="card-link" target="_blank">
          <div className="card-info" onClick={handleOpen}>
            <p className="card-info-title">{info.name}</p>
          </div>
        </div>
        {modal && (
          <Modal handleClose={handleClose}>
            <div className="modal-top">
              <img className="modal-img" src={info.img} alt="sitio web" />
            </div>
            <div className="modal-header">
              <p className="modal-title">{info.name}</p>
              <a className="modal-link" href={info.link} target="_blank" rel="noreferrer">
                Visitar
              </a>
            </div>

            <div className="modal-body">
              <p className="modal-text">{info.description}</p>
              <div className="modal-tecnologies">
                {info.tecnologies.map((tecnology, index) => (
                  <p key={index} className="modal-tecnologies-item">
                    {tecnology}
                  </p>
                ))}
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};
export default ProyectosCard;
