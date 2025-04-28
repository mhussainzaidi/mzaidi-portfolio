import Layout from '../../components/Layout'
    import Link from 'next/link'

    export async function getStaticPaths(){
      return {
        paths:[
          {params:{slug:'gtmnow-podcast-teardown'}},
          {params:{slug:'scale-gtmnow-linkedin-reach'}},
        ],
        fallback:false
      }
    }

    export async function getStaticProps({params}){
      // In real use, fetch MD files; here we mock.
      const content = params.slug==='gtmnow-podcast-teardown' ? `
## Teardown of a GTMnow podcast episode distribution loop

*Problem* — single‑channel content failing to hit sign‑up targets.

*Tactic* — built a repurposing pipeline (video → blog → carousel → email).

*Result* — +37% new newsletter subs and +22% demo requests in 30 days.

` : \`
## Idea for scaling GTMnow’s LinkedIn reach in 90 days

A 12‑week roadmap using creator collabs, anchor formats & community challenges.

Expected result: 2× followers, 5× content engagement.

\`
      return {props:{slug:params.slug, content}}
    }

    export default function Post({slug, content}){
      return (
        <Layout title={slug.replaceAll('-',' ')+ ' – Blog'}>
          <section className="py-20 max-w-3xl mx-auto prose prose-invert">
            <Link href="/blog" className="text-teal">&larr; Back</Link>
            <div dangerouslySetInnerHTML={{__html:content}}/>
          </section>
        </Layout>
      )
    }
