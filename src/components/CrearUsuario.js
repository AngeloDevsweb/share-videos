import React, {useState, useEffect} from 'react'
import {db} from '../firebase'

import { toast } from 'react-toastify';

const CrearUsuario = () => {
    const nombreInicial ={
        usuario:''
    } 

    const [value, setValue] = useState(nombreInicial)
    const [user, setUser] = useState([])


    const handleChange = (e)=>{
        const {name, value} = e.target
        setValue({[name]:value})
        
    }

    const handleSubmit =  (e)=>{
        e.preventDefault();
        console.log(value);
        addUser(value)
        setValue({...nombreInicial});
        toast.success('🦄 Usuario agregado correctamente', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const addUser= async(valor)=>{
        await db.collection('usuarios').doc().set(valor);
    }

    const getUser = () =>{
        db.collection('usuarios').onSnapshot((querySnapshot)=>{
            const docs = []
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(),id: doc.id})
            })
            setUser(docs);
        })
    }

    const deleteUser = async (id)=>{
        await db.collection('usuarios').doc(id).delete();
        toast.error('🦄 El usuario eliminado correctamente', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    useEffect(()=>{
        getUser()
    }, []);


    return (
        <div className="container"> 
            <form className="card card-body mt-5" onSubmit={handleSubmit} >
                <h1 className="text-center">Crear Usuario</h1>
                <div className="form-group">
                    <input type="text" placeholder="ingresa nombre de usuario" className="form-control" onChange={handleChange} 
                    name="usuario" value={value.usuario} required />
                </div>
                
               <button className="btn btn-primary">
                   Registrar
               </button>
            </form>

            {/* lista de los usuarios  */}
            <div className="mt-5">
                <h2 className="text-center text-white mb-4">Lista de Usuarios</h2>
                {user.map(users => (
                    <div className="mb-1 flexbox" key={users.id}>

                        <li className="text-white" >{users.usuario}</li>
                        <button className="btn btn-danger" onClick={()=> deleteUser(users.id)}>Eliminar</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CrearUsuario
