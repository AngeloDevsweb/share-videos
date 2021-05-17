import React, {useEffect, useState} from 'react'
import {db} from '../firebase'

import { toast } from 'react-toastify';

const ShareVideo = () => {

    const inicialVideos = {
        autor: '',
        titulo: '',
        url:''
    }

    const [author, setAuthor] = useState([])
    const [video, setVideo] = useState(inicialVideos)



    const onInputChange = (e)=>{
        const {name, value} = e.target
        setVideo({...video, [name]:value})
        
    }

    const handleubmit = (e)=>{
        e.preventDefault();
        console.log(video);
        console.log(video.titulo);
        console.log(video.url);
        addVideo(video)
        setVideo({...inicialVideos});
        toast.success('🦄 Video Compartido', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const addVideo = async(valor)=>{
        await db.collection('videos').doc().set(valor)
    }

    const getAuthor = ()=>{
        db.collection('usuarios').onSnapshot((querysnapshot)=>{
            const docs = []
            querysnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id: doc.id})
               
            })
            setAuthor(docs);
        })
    }

    useEffect(()=>{
        getAuthor()
    }, []);

    return (
        <div  className="container">
            <h2 className="text-center text-white mt-5 mb-3">Compartir videos</h2>
            <div className="form-group card card-body">
                
            
                <div className="form-group" >
                    <select name="autor" className="form-control" onChange={onInputChange} >
                    {author.map(authors => (
                        <option key={authors.id} value={authors.usuario} >
                            {authors.usuario}
                        </option>
                    ))}
                    </select>
                </div>
                
                    
                    <div className="form-group">
                        <input type="text" placeholder="ingresa el titulo del video" className="form-control" name="titulo"  onChange={onInputChange} value={video.titulo} required />
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder="ingresa el link del video" className="form-control" name="url"  onChange={onInputChange} value={video.url} required />
                    </div>
                <form className="card card-body" onSubmit={handleubmit} >    
                    <button className="btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ShareVideo
