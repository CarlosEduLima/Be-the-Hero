import React, { useState, useEffect } from 'react';
import './style.css';
import pin from "../../pin.png";
import api from '../../services/api';
import { key } from '../../services/apiKey';
export default function Organization() {
    const [org, setOrg] = useState([]);
    useEffect(() => {
        async function loadOrgs() {
            const response = await api.get(`/orgservice/all/organizations?api_key=${key}`);
            console.log(response);
            setOrg(response.data.organizations.organization);
        }
        loadOrgs();
    }, []);

    async function handleBrasil(chamado) {
        const response = await api.get(`/chamado/${chamado}`);
    }
    /* function handleModal(project) {
         setProject([project]);
         toggle();
     }*/
    return (
        <>
        <main>
            <select>
                <option>Global</option>
                <option>Brazil</option>
            </select>
            <ul>
            {org.map(org => (
                <li className="dev-item">
                    <header>
                    <img src={org.logoUrl} alt="logo" />
                        <div className="user-info">
                            <strong>{org.name}</strong>
                            <img src={pin} className='pin'/>
                            <span>{org.country}</span>
                        </div>
                    </header>
                    <p>{org.mission}</p>
                    <a href={org.url}>Site</a>
                </li>
            ))}
            </ul>
        </main>
        </>
    );
}
