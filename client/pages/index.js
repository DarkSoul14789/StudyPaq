import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

export default function Home() {

  const [data, setdata] = useState([])
  const [video, setVideo] = useState([])
  const [text, setText] = useState(30)


  
  useEffect(() => {
    fetch(`http://127.0.0.1:5000?limit=${text}`)
    .then(res => res.json())
    .then((data) => {
      console.log(data)
      setdata(data.img)
      setVideo(data.videos)
    })
  }, [text])
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setText(parseInt(event.target.value))
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label htmlFor="inp">Set the api limit</label>
        <input name='inp' type="text" className={styles.input} defaultValue={text} onKeyDown={handleKeyDown}/>
      </div>
      <div className={styles.gallery}>
        {
          data.map((i,key)=>(
            <img className={styles.img} src={i} key={key}/>
          ))
        }
        
          {
            video.map((i,key)=>(
              <video controls autoPlay key={key}>
              <source src={i}  type="video/mp4"/>
              </video>
            ))
          }

      </div>
      
    </div>
  )
}

