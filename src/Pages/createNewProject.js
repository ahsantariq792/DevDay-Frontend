import React from 'react'
import { Button } from '@mui/material';

const CreateNewProject = () => {
  return (
    <>

      <div className='parentcreateNewProject shadow'>
        <div className='createNewProject'>
          <h2>CREATE NEW PROJECT</h2>
        </div>
        <div className='childcreateNewProject'>
          <p>ENTER PROJECT NAME</p>
          <input></input>
        </div>
        <div className='buttonContainer'>

          <Button id="btn" variant="contained" color="primary" type="submit">
            New Project
          </Button>

        </div>

      </div>
    </>
  )
}

export default CreateNewProject;