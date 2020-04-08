import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Modal = ({ isShowing, hide, id }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    {console.log(id[0].id)};
    <div className="modal-overlay" />
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      {id.map(project => (
        <div className="modal">
          <div className="project-info">
            <header>
              <img src={project.organization.logoUrl} alt="logo" />
              <br />
              <h3>{project.organization.name}</h3>
              <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">X</span>
              </button>
            </header>
            <div className='sumary'>
              <h4>Resumo</h4>
              <p>{project.summary}</p>
            </div>
            <div className="stats">
              <div className="stat">
              <div className="type">Goal</div>
                <div className="value">${project.goal}</div>               
              </div>
              <div className="stat">
              <div className="type">Founding</div>
                <div className="value">${project.funding}</div>
              </div>
              <div className="stat">
              <div className="type">Remaining</div>
                <div className="value">${project.remaining}</div>
              </div>
              <div className="stat">
              <div className="type">Donations</div>
                <div className="value">{project.numberOfDonations}</div>
              </div>
            </div>
      
            <div className='contact'>
              <h4>Location</h4>
              <spam>{project.contactCity}, {project.contactState}</spam>
              <h4>Organization Site</h4>
              <a href={project.contactUrl}>
                <button>Click here</button>
                </a>
              <h4>Project Link</h4>
              <a href={project.organization.url}>
              <button>Click here</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;