import React, { useContext, useState } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import axios from 'axios';

const initialFormValues = {
    name: "",
    age:0,
    height:"",
    id:0,
}

const Smurf = props =>{

    const {update, close} = useContext(SmurfContext)

    const [formValues, setFormValues] = useState(initialFormValues)

    const onInputChange = event =>{
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        })
    }

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