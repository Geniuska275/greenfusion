import React from 'react'
import { useParams } from 'react-router-dom'
import main20 from "./main20.jpg";
import main1 from "./main1.jpg";
import main2 from "./main2.jpg";
import main3 from "./main3a.jpg";
import main3a from "./main3a1.jpg";
import lithium1 from "./lithium3.jpg";
import lithium1a from "./lithium3a.jpg";


import main10a from "./main10a.jpg";
import main10b from "./main10b.jpg";
import main10c from "./main10c.jpg";
import main10d from "./main10d.jpg";

import main4 from "./main4.jpg";
import main5 from "./main5.jpg";
import main60 from "./main60.jpg";

import main5a from "./main5a.jpg";
import main5a1 from "./main5a1.jpg";
import main5a2 from "./main5a2.jpg";
import main5a3 from "./main5a3.jpg";


import a10 from "./10a.jpg";
import b10 from "./10b.jpg";
import c10 from "./10c.jpg";
import a60 from "./60a.jpg";
import b60 from "./60b.jpg";
import c60 from "./60c.jpg";

import main20a from "./main20a.jpg";
import main20b from "./main20b.jpg";
import main20c from "./main20c.jpg";
import main20d from "./main20d.jpg";
import main20e from "./main20e.jpg";
import main20f from "./main20f.jpg";

import a5 from "./5a.jpg";
import b5 from "./5b.jpg";
import c5 from "./5c.jpg";

import d5 from "./5d.jpg";
import e5 from "./5e.jpg";
import f5 from "./5f.jpg";
import main10 from "./main10.jpg";
import g5 from "./5g.jpg";
import h5 from "./5h.jpg";
import main20k from "./main20k.jpg";
import main20ka from "./main20ka.jpg";
import main20kb from "./main20kb.jpg";
import main20kc from "./main20kc.jpg";
import main20ke from "./main20ke.jpg";
import main20kf from "./main20kf.jpg";
import main20kg from "./main20kg.jpg";
import main20kd from "./main20kd.jpg";
import { useState } from 'react';
function Installation() {
    const {id}=useParams();
    const [installations,setInstallations]=useState([
      // { id:2,
      //   images:[main10,main1,main2,main3,main4,main5],
      //   desc: "1kva / 12volts Inverter Solar system",
      //   powers: " 6 LED Lights,2 Fans,1 TV ,1 Decoder and Home Theater."
      // },
      // { id:3,
      //   images:[main20,main1,main2,main3,main4,main5],
      //   desc: "2.5kva/12volts Inverter Solar system",
      //   powers: " 8 LED Lights,2 Fans,1 TV ,1 Decoder and 1 laptop"
      // },
      // { id:4,
      //   images:[main20,main1,main2,main3,main4,main5],
      //   desc: "2.5kva/24Volts Inverter Solar system",
      //   powers: "10 LED Lights,3 Fans,2 TVs ,1 Home Theatre,1 Decoder, 1 fridge,Washing Machine and 1 laptop."
      // },
      { id:5,
        images:[main3,main3a],
        desc: "3.5kva/ 24Volts Inverter Solar system",
        powers: ""
      },
      { id:6,
        images:[lithium1,lithium1a],
        desc: "3.5kva/ 24Volts  Lithium Inverter Solar system",
        powers: ""
      },
      { id:9,
        images:[main5a,main5a1,main5a2,main5a3],
        desc: "5kva/48V Inverter Solar system",
        powers: ""
      },
      { id:7,
        images:[main10a,main10b,main10c,main10d],
        desc: "10kva/48V Inverter Solar system",
        powers: ""
      },
      { id:1,
        images:[main20k,main20ka,main20kb,main20kc,main20kd,main20ke,main20kf,main20kg],
        desc: "20kva Solar system Installation",
        powers: ""
      },
      { id:8,
        images:[main60,a60,b60,c60],
        desc: "60kva/120V Inverter Solar system",
        powers: ""
      },
    ])
    
    console.log(id)
    const installation=installations.find(i=>i.id===parseInt(id))
     console.log(installation)
  return (
    <div className='p-[80px]'>
            <h1 className='font-bold text-xl mb-4 text-center'>{installation.desc}</h1>
            
        <div className='install'>

        {installation.images.slice(0,4).map(image=>(
            <img src={image} className='h-[350px] w-[400px] mb-2'/>
        ))}
        </div>
         <div className='install'>

{installation.images.slice(4,8).map(image=>(
    <img src={image} className='h-[300px] w-[300px] mb-2'/>
  ))}
</div>
    </div>
  )
}

export default Installation