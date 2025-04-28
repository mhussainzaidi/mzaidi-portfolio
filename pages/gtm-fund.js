import Layout from '../components/Layout'

export default function GTMFund(){
  const mapping = [
    {req:'Plan and execute demand gen campaigns', evidence:'Ran 25‑episode webinar series driving 3,200 SQLs.'},
    {req:'Manage events calendar', evidence:'Curated & hosted weekly lives with 95% attendance rate.'},
    {req:'Grow social reach', evidence:'Scaled LinkedIn channel to 4,300 new followers in 3 months.'},
  ]
  return (
    <Layout title="Hi Sophie – Zaidi x GTMfund" >
      <section className="py-20 max-w-3xl mx-auto">
        <h1 className="text-4xl font-heading mb-6">Hey Sophie 👋</h1>
        <p className="mb-8">Quick video intro (placeholder)</p>
        <table className="w-full text-left mb-8">
          <thead><tr><th className="p-2">Job Requirement</th><th className="p-2">My Evidence</th></tr></thead>
          <tbody>
          {mapping.map(m=>(
            <tr key={m.req}><td className="p-2 border-b">{m.req}</td><td className="p-2 border-b">{m.evidence}</td></tr>
          ))}
          </tbody>
        </table>
        <a href="https://calendly.com/" className="cta-hover inline-block px-6 py-3 bg-teal text-navy rounded-2xl font-heading">Book 15‑min brainstorm</a>
      </section>
    </Layout>
  )
}
