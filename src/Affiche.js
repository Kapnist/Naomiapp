import React, { Component } from 'react'
import Dressing from './Dressing.js';

const Affiche = () => {
   
    let imasrc = Dressing.map((imgsrc) =>{

    
        return (
            <div className='div-image'>
                
                <div className='choice'>
                    <h5>ou souhaitez vous vous rendre ?</h5>
                    <div><button>Au bureau</button></div> 
                    <div><button>Prendre un verre</button></div>
                    <div><button>Sortie restaux</button></div>
                    <div><button>Sortie entre copines</button></div>
                    <div><button>Rendez-vous pro</button></div>
                    <div><button>Rendez-vous coquin</button></div>
                </div>
                <div className="image"> <img className="image_block" src={imgsrc.img_src} alt={imgsrc.name}/> </div>
                
            </div>
        )
    })
    return (
        <div> 
            <div className='container'>
             {imasrc}
            </div>

        </div>
    )
}

export default Affiche;
