import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default(props) => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        getProjects()
    },[]) 

    const getProjects = () => {
        axios.get('http://localhost:5000/api/projects')
        .then(res => {
            console.log(res)
            setProjects(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const openDetails = (id) => {
        console.log('route to id: ', id)
        props.history.push(`/projects/${id}`);
    }

    return(
      <div>
        <h3>Projects List</h3>
        {projects.map((project, index) => (
            <div onClick={() => openDetails(project.id)} key={index} style={{background:'grey', margin: '10px'}}>
                <h3>{project.id}: {project.name}</h3>
                <p>{project.description}</p>
            </div>
        ))}
      </div>
    )
  }