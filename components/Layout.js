import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Layout({ children, title='M. Hussain Zaidi | B2B Media Builder'}) {
  const router = useRouter()
  const nav = [
    {href:'/', label:'Home'},
    {href:'/case-studies', label:'Case Studies'},
    {href:'/blog', label:'Build‑With‑Me'},
    {href:'/live-events', label:'Live Events'},
    {href:'/about', label:'About'},
  ]
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Portfolio of M. Hussain Zaidi – building B2B media that turns operators into passionate advocates."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <script defer data-domain="mzaidi.me" src="https://plausible.io/js/plausible.js"></script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Person",
          "name":"M. Hussain Zaidi",
          "jobTitle":"B2B Media Builder",
          "url":"https://mzaidi.me",
          "sameAs":["https://www.linkedin.com/in/m-hussain-zaidi"]
        })}}/>
      </Head>
      <div className="min-h-screen flex flex-col">
        <header className="p-4 flex justify-between items-center">
          <Link href="/" className="text-teal font-heading text-xl">MZ.</Link>
          <nav className="space-x-4">
            {nav.map(n=>(
              <Link key={n.href} href={n.href} className={\`cta-hover \${router.pathname===n.href?'text-teal':''}\`}>{n.label}</Link>
            ))}
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="p-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} M. Hussain Zaidi
        </footer>
      </div>
    </>
  )
}
