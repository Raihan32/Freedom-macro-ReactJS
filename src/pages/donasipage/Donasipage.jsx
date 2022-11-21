import React from 'react'
import Footer from '../../component/footer/Footer';
import Navbar from '../../component/Navbar/Navbar';
import './donasipage.css'
import foto from './img/foto.png'
import foto2 from './img/foto2.png'
import foto3 from './img/foto3.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Nomor Rekening
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          MANDIRI 0231812784 an. DAFA HUDA
        </p>
        <p>BCA 7834723472 an. DAFA HUDA</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Tutup</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Donasipage ()  {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Navbar />
      <div className='headerdonasi'>
        <div className='donasitext'>
          <div className='juduldonasi'>
            <img src={foto} alt="" />
          <p style={{}}>Donasi</p>
          
          </div>
          <p className='paragraf'>Hallo orang baik, Kami meminta bantuan untuk mendukung mereka untuk menjalankan pejuangan anti Rasisme</p>
          <button className='btn btn-danger' onClick={() => setModalShow(true)}>Donasi Di Sini
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
       <div className='fotodonasi'> <img src={foto2} alt="" /></div>
      </div>
      <div className='isidonasi'>
        <div style={{width:"863px" ,height: "72px", marginBottom:"100px" }}>
        <p className='paragraf1'>Bantuan yang anda berikan didonasikan kepada kegiatan Perjuangan Rasis yang dilakukan oleh komunitas di Indonesia</p></div>
        <p className='paragraf1'>Kegiatan Yang akan Datang</p>
        <div className='cardrow'>
          
          <div className='carddonasi1'><img src={foto3} alt="" />
          <p style={{color:"white"}}>Pertemuan dengan anggota DPR terkait diskusi mengenai “ Hukum Pelaku Rasisme di Indonesia”</p>
          <p style={{color:"white"}}>Terjadwal : December 2022</p>
          </div>
          <div className='carddonasi1'><img src={foto3} alt="" />
          <p style={{color:"white"}}>Pertemuan dengan anggota DPR terkait diskusi mengenai “ Hukum Pelaku Rasisme di Indonesia”</p>
          <p style={{color:"white"}}>Terjadwal : December 2022</p>
          </div>
          <div className='carddonasi1'><img src={foto3} alt="" />
          <p style={{color:"white"}}>Pertemuan dengan anggota DPR terkait diskusi mengenai “ Hukum Pelaku Rasisme di Indonesia”</p>
          <p style={{color:"white"}}>Terjadwal : December 2022</p>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  )
}

export default Donasipage;
