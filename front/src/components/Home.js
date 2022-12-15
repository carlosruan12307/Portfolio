import { Link } from 'react-router-dom';
import '../App.css'
import {motion} from 'framer-motion'

function Home(){
    return(
      <motion.div className='d-flex position-relative justify-content-center flex-wrap align-content-center  text-light  home'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      style={{width: "100%",height: "90vh"}}
      >
        <div className='col-sm-9  col-xl-9 col-lg-9 col-md-9 col-xxl-9 textP '>
        <h1 >Ola!</h1>
        <p className='textP' >meu nome é carlos ruan, estou começando no mundo da programaçao e espero conseguir aprender bastante e me desenvolver ainda mais como profissional.</p>
        <button className='btn '>Saiba Mais Sobre Mim!</button>
        </div>
      


      </motion.div>
    )
}
export default Home;