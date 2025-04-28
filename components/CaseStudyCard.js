import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CaseStudyCard({cs}) {
  return (
    <motion.div whileHover={{scale:1.03}} className="rounded-2xl bg-gray-800 p-4 shadow-lg">
      <Image src={cs.image} alt={cs.title} width={400} height={250} className="rounded-xl mb-4"/>
      <h3 className="font-heading text-lg mb-2">{cs.title}</h3>
      <p className="text-teal text-sm mb-2">{cs.kpi}</p>
      <button className="cta-hover text-sm underline">View details</button>
    </motion.div>
  )
}
