import Layout from '../components/Layout'
import Hero from '../components/Hero'
import CaseStudyCard from '../components/CaseStudyCard'
import { useState } from 'react'

export default function Home() {
  const [caseStudies] = useState([
    {title:'Top of Funnel LinkedIn Campaign', kpi:'+37% CTR', image:'https://images.unsplash.com/photo-1581091870627-3b78c0233a4b?auto=format&fit=crop&w=400&q=60'},
    {title:'Content Hub Redesign', kpi:'750K pageviews', image:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=60'},
    {title:'Weekly Webinar Series', kpi:'1,200 sign‑ups', image:'https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?auto=format&fit=crop&w=400&q=60'},
  ])
  return (
    <Layout>
      <Hero/>
      <section className="py-20">
        <h2 className="text-3xl font-heading text-center mb-8">Wins Snapshot</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {caseStudies.map(cs=>(
            <CaseStudyCard key={cs.title} cs={cs}/>
          ))}
        </div>
      </section>
      <section className="py-20 bg-gray-900">
        <h2 className="text-3xl font-heading text-center mb-8">Quick Bio</h2>
        <p className="max-w-xl mx-auto text-center">Bachelor’s in Marketing, 1 year marketing experience, 7 months in consulting/market research. I thrive at the intersection of data-driven content strategy and community‑centric growth.</p>
      </section>
    </Layout>
  )
}
