import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import {motion} from 'framer-motion'
function SobreMim() {
  return (
    <motion.div className='d-flex justify-content-center   text-light  home'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    style={{width: "100%",height: "90vh"}}
    >
      <div className='col-sm-9  col-xl-9 col-lg-9 col-md-9 col-xxl-9 textP m-auto'>
      <h1 >Sobre Mim!</h1>
      <p className='textP ' >estou cursando ciencia da computacao na Unifor desde metade do ano de 2019, sempre amei mexer em computador, iniciei o curso sem muita direção como maioria das pessoas que saem do ensino medio :x.No incio nao gostava do curso, existiam algumas disciplinas que achava interessante, principalmente as disciplinas de lógica de programção, mas a algum tempo atrás tive duas disciplinas incríveis, Desenvolvimento Web e Banco De Dados, desde então, sempre estou a procura de aprender novas tecnologias e de aprender sempre mais nesse ramo que me identifiquei demais!</p>
      
      <a target="_blank" href='https://github.com/carlosruan12307?tab=repositories' className='btn'>Github</a>
      </div>
    


    </motion.div>
  )
}

export default SobreMim