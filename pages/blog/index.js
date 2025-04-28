import Layout from '../../components/Layout'
import Link from 'next/link'

const posts = [
  {
    slug:'gtmnow-podcast-teardown',
    title:'Teardown of a GTMnow podcast episode distribution loop',
    excerpt:'Reverse‑engineering how GTMnow squeezes multi‑channel reach from a single show.',
    date:'2025-04-25'
  },
  {
    slug:'scale-gtmnow-linkedin-reach',
    title:'Idea for scaling GTMnow’s LinkedIn reach in 90 days',
    excerpt:'A sprint blueprint to 2× follower growth with zero ad spend.',
    date:'2025-04-26'
  }
]

export default function Blog(){
  return (
    <Layout title="Build-With-Me Blog – M. Hussain Zaidi">
      <section className="py-20">
        <h1 className="text-4xl font-heading text-center mb-8">Build‑With‑Me</h1>
        <div className="max-w-3xl mx-auto space-y-10">
          {posts.map(p=>(
            <article key={p.slug}>
              <h2 className="text-2xl font-heading mb-2"><Link href={\`/blog/\${p.slug}\`} className="cta-hover">{p.title}</Link></h2>
              <p className="text-sm text-gray-400 mb-1">{p.date}</p>
              <p>{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
