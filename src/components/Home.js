import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import ReactPlayer from 'react-player'

const Home = () => {

    const [videos, setVideos] = useState([])

    const getVideos = () =>{
        db.collection('videos').onSnapshot((querysnapshot)=>{
            const docs = []
            querysnapshot.forEach(doc=>{
                docs.push({...doc.data(), id: doc.id})
            })
            setVideos(docs)
        })
    }

    const videoDelete = async (id)=>{
        await db.collection('videos').doc(id).delete()
    }
    
    useEffect(()=>{
        getVideos()
    },[])

    return (
        <div className="container mt-5">
            <h1 className="text-white text-center">Share Videos</h1>
            {videos.map(video => (
                <div className="card card-body mb-3" key={video.id}>
                    <div className="flexbox">
                        <p>usuario: {video.autor}</p>
                        <button className="btn btn-danger" onClick={()=>videoDelete(video.id)} >
                            X
                        </button>
                    </div>
                    
                    <h3>{video.titulo}</h3>
                    <div>
                        <ReactPlayer
                            url={video.url}
                            height="600px"
                            width="100%"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home
