import Layout from '../components/Layout'
import { useState } from 'react'
import CaseStudyCard from '../components/CaseStudyCard'

export default function CaseStudies(){
  const [filter, setFilter] = useState('All')
  const categories = ['All','Content','Social Growth','Events']
  const data = [
    {title:'Content Audit & Refresh',cat:'Content',kpi:'+58% organic traffic',image:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=60'},
    {title:'LinkedIn Influencer Pods',cat:'Social Growth',kpi:'+4,300 followers',image:'https://images.unsplash.com/photo-1573497019667-6fbf7226a203?auto=format&fit=crop&w=400&q=60'},
    {title:'Flagship Virtual Summit',cat:'Events',kpi:'3,200 registrants',image:'https://images.unsplash.com/photo-1551836022-3a645cb1605e?auto=format&fit=crop&w=400&q=60'},
  ]
  const filtered = filter==='All'?data:data.filter(d=>d.cat===filter)
  return (
    <Layout title="Case Studies – M. Hussain Zaidi">
      <section className="py-20">
        <h1 className="text-4xl font-heading text-center mb-8">Case Studies</h1>
        <div className="flex justify-center gap-4 mb-10">
          {categories.map(c=>(
            <button key={c} onClick={()=>setFilter(c)} className={\`cta-hover px-4 py-2 rounded-full \${filter===c?'bg-teal text-navy':'bg-gray-700'}\`}>{c}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filtered.map(cs=>(
            <CaseStudyCard key={cs.title} cs={cs}/>
          ))}
        </div>
      </section>
    </Layout>
  )
}
