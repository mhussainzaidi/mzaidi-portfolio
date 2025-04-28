import Layout from '../components/Layout'

export default function LiveEvents(){
  const events = [
    {date:'2025-05-10',title:'LinkedIn Live: Operator‑Led Roundtable'},
    {date:'2025-06-02',title:'Webinar: Building Evergreen Event Engines'}
  ]
  const past = [
    {date:'2025-03-12',title:'AMA: Distribution vs. Brand'},
    {date:'2025-04-15',title:'Panel: GTM Metrics That Matter'}
  ]
  return (
    <Layout title="Live Events – M. Hussain Zaidi">
      <section className="py-20">
        <h1 className="text-4xl font-heading text-center mb-8">Live Events</h1>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-heading mb-4">Upcoming</h2>
          <ul className="mb-10 space-y-4">
            {events.map(e=>(
              <li key={e.title} className="bg-gray-800 p-4 rounded-xl flex justify-between">
                <span>{e.title}</span><span className="text-teal">{e.date}</span>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-heading mb-4">Past</h2>
          <ul className="space-y-4">
            {past.map(e=>(
              <li key={e.title} className="bg-gray-800 p-4 rounded-xl flex justify-between">
                <span>{e.title}</span><span className="text-gray-400">{e.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}
