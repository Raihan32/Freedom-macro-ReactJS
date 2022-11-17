import React from 'react'
import './jurnal.css'
import jurnal1 from './img/jurnal1.png'

const Jurnal = () => {
  return (
    <div className='jurnal'>
        <div className='juduljurnal '>
            <p className='judul'>Jurnal</p>
            <button style={{height:"60px", width:"229px"}} className='btn btn-danger'>Selengkapnya</button>
        </div>
      <div className='kolom'>
        
        <div className='contentjurnal'>
            <img src={jurnal1} style={{width:"246px" , height:"307px"}} />
            <div className='text'>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
                <h4>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h4>
                <h4>Kompas.com</h4>
                <p>2 days ago . 3 min read</p>

            </div>
        </div>
        <div className='contentjurnal'>
            <img src={jurnal1} style={{width:"246px" , height:"307px"}} />
            <div className='text'>
                <h3 >Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
                <h4>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h4>
                <h4>Kompas.com</h4>
                <p>2 days ago . 3 min read</p>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Jurnal;
