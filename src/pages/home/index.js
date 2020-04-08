import React, { useState, useEffect } from 'react';
import './style.css';
import Modal from "../../components/Modal";
import pin from "../../pin.png";
import useModal from '../../components/useModal';
import api from '../../services/api';
import { key } from '../../services/apiKey';

export default function Home() {

    const { isShowing, toggle } = useModal();
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState([]);

    useEffect(() => {
        async function loadProjects() {
            const response = await api.get(`/projectservice/featured/projects?api_key=${key}`);
            setProjects(response.data.projects.project);
        }
        loadProjects();
    }, []);

    function handleModal(project) {
        setProject([project]);
        toggle();
    }
    return (
        <>
            <Modal
                id={project}
                isShowing={isShowing}
                hide={toggle}
            />
            <main>
                <ul>
                    {projects.map(project => (
                        <li className="card">
                            <header>
                                <img src={project.image.imagelink[5].url} className='image' />
                            </header>
                            <div className="project-info">
                                <strong translate="no">{project.title}</strong>
                                <img src={pin} />
                                <span>{project.country}</span>
                                <span>{project.theme}</span>
                            </div>
                            <footer>
                                <button onClick={() => handleModal(project)}>Read more</button>
                            </footer>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}