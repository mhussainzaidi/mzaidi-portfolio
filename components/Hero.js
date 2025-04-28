import MetricCounter from './MetricCounter'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  const metrics = [
    {value:750000, label:'Views Driven'},
    {value:25, label:'Live Sessions'},
    {value:3, label:'Case Studies'}
  ]
  return (
    <section className="text-center py-20 relative overflow-hidden">
      <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1,y:0}} transition={{duration:0.7}} className="text-4xl md:text-6xl font-heading mb-4">
        I build B2B media that turns operators into passionate advocates.
      </motion.h1>
      <p className="max-w-xl mx-auto mb-8 text-gray-300">I focus on useful, honest marketing that respects the audience.</p>
      <div className="flex justify-center mb-8">
        <Image src="https://images.unsplash.com/photo-1603415526960-f7e0328f1d19?auto=format&fit=crop&w=256&q=80" alt="M. Hussain Zaidi headshot placeholder" width={128} height={128} className="rounded-full"/>
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
        {metrics.map(m=>(
          <MetricCounter key={m.label} value={m.value} label={m.label}/>
        ))}
      </div>
      <a href="https://calendly.com/" target="_blank" rel="noopener" className="inline-block mt-10 px-6 py-3 bg-teal text-navy rounded-2xl font-heading cta-hover">Book 15‑min GTM brainstorm</a>
      <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none" initial={{opacity:0}} animate={{opacity:0.1}}>
        <div className="w-[200%] h-[200%] bg-gradient-to-br from-teal-500/30 via-transparent to-transparent animate-spin-slow"></div>
      </motion.div>
    </section>
  )
}
