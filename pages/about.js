import Layout from '../components/Layout'
import Link from 'next/link'

export default function About(){
  const skills = ['Project Management','Writing','Design Instinct','Social Growth']
  return (
    <Layout title="About – M. Hussain Zaidi">
      <section className="py-20 max-w-3xl mx-auto">
        <h1 className="text-4xl font-heading mb-6">About Me</h1>
        <p className="mb-6">I’m M. Hussain Zaidi—part marketer, part community‑builder, always a curious operator. After driving 750K views across multi‑channel campaigns for B2B SaaS, I now focus on crafting media brands that turn audiences into advocates.</p>
        <h2 className="text-2xl font-heading mb-4">Values</h2>
        <ul className="list-disc ml-5 mb-6 space-y-2">
          <li>Useful, honest marketing that respects the audience.</li>
          <li>Iteration beats perfection—ship, measure, refine.</li>
          <li>Community > commodity—relationships drive revenue.</li>
        </ul>
        <h2 className="text-2xl font-heading mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-3 mb-6">
          {skills.map(s=>(
            <li key={s} className="bg-gray-800 p-2 rounded-xl text-center">{s}</li>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
          <a href="mailto:hello@mzaidi.me" className="cta-hover underline">Email</a>
          <Link href="https://www.linkedin.com/" className="cta-hover underline" target="_blank">LinkedIn</Link>
          <a href="https://calendly.com/" className="cta-hover underline" target="_blank">Calendly</a>
        </div>
      </section>
    </Layout>
  )
}
