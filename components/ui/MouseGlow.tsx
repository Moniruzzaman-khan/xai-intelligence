"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseGlow(){

const[pos,setPos]=useState({x:0,y:0});

useEffect(()=>{

const move=(e:MouseEvent)=>{

setPos({

x:e.clientX,

y:e.clientY

})

}

window.addEventListener("mousemove",move);

return()=>window.removeEventListener("mousemove",move);

},[])

return(

<motion.div

animate={{

x:pos.x-150,

y:pos.y-150

}}

transition={{

type:"spring",

stiffness:80,

damping:20

}}

className="pointer-events-none fixed z-0 h-[300px] w-[300px]
rounded-full bg-blue-500/20 blur-[120px]"

/>

)

}