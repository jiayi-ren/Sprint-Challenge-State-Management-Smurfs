import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import axios from 'axios';

const Smurf = () =>{

    const {formValues,onInputChange,get, close} = useContext(SmurfContext)

    const onSubmit = event =>{
        event.preventDefault()
        close()
        axios
            .post("http://localhost:3333/smurfs", {
                name: formValues.name,
                age: formValues.age,
                height: formValues.height,
            })
            .then(res =>{
                console.log(res)
                get()
            })
            .catch(err =>{
                console.log(err)
            })
    }
    
    console.log("Rendering Smurf")

    return(
        <div>
            <form>
                <label>Name: <input type="text" name="name" onChange={onInputChange}></input></label>
                <label>Age: <input type="number" name="age" onChange={onInputChange}></input></label>
                <label>Height: <input type="text" name="height" onChange={onInputChange}></input></label>
            </form>
            <button onClick={onSubmit}>Add</button>
        </div>
    )
}

export default Smurf;