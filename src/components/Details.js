import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default(props) => {
    const [projectDetails, setProjectDetails] = useState({actions:[]})

    useEffect(() => {
        getProjectDetails()
    },[]) 

    const getProjectDetails = () => {
        const id = props.match.params.id;
        console.log('details of id: ', id);
        axios.get(`http://localhost:5000/api/projects/${id}`)
        .then(res => {
            console.log(res)
            setProjectDetails(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <>
        <h3>Project Details</h3>
        <button onClick={() => props.history.push('/projects')}>Back</button>
        <div className='detailsCard'>
            <h5>{projectDetails.id}: {projectDetails.name}</h5>
            <p>{projectDetails.description}</p>
            <h5>Actions</h5>
            {projectDetails.actions.map((action, index) => (
                <div key={index} className='actions'>
                    <h6>{index+1}: {action.description}</h6>
                    <p>{action.notes}</p>
                </div>
            ))}
        </div>
        </>
    )
  }