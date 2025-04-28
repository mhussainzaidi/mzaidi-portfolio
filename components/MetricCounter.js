import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function MetricCounter({value, label}) {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    let start = 0
    const end = parseInt(value)
    if (start === end) return
    const totalMilSecDur = 1500
    const incrementTime = (totalMilSecDur/end)*5
    const timer = setInterval(()=>{
      start +=5
      if(start >= end){
        start = end
        clearInterval(timer)
      }
      setCount(start)
    }, incrementTime)
  },[value])
  return (
    <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-center">
      <p className="text-3xl font-heading text-teal">{count.toLocaleString()}+</p>
      <p className="text-sm uppercase tracking-widest">{label}</p>
    </motion.div>
  )
}
