import Link from 'next/link'
export default function Home() {
  return (<div>
    <section style={{background:'radial-gradient(1200px 500px at 10% -10%, rgba(138,180,255,.2), transparent), radial-gradient(1000px 400px at 90% -20%, rgba(160,255,230,.2), transparent)',border:'1px solid rgba(255,255,255,.06)',borderRadius:16,padding:'28px 24px',marginBottom:20}}>
      <div className="kicker">View-Tech</div>
      <h1 style={{margin:'6px 0 10px'}}>Proactive Observation & AI-assisted Monitoring</h1>
      <p className="small">Human-led live monitoring, structured processes, and smart analytics — preventing incidents, improving quality, and keeping people and operations safe.</p>
      <div className="btn-row">
        <Link className="button" href="/services">Explore Services</Link>
        <Link className="button secondary" href="/insights">Read Insights</Link>
      </div>
    </section>
    <div className="grid">
      <div className="card"><h3>🔐 Security & Safety</h3><p className="small">Live monitoring + AI analytics.</p><Link href="/services">Open →</Link></div>
      <div className="card"><h3>✅ Quality Assurance</h3><p className="small">Oversight that keeps every shift aligned.</p><Link href="/services">Open →</Link></div>
      <div className="card"><h3>🛎️ Remote Lobby Services</h3><p className="small">Visitor, delivery & access management.</p><Link href="/services">Open →</Link></div>
      <div className="card"><h3>🧩 Process Control</h3><p className="small">Structured observation & smart alerts.</p><Link href="/services">Open →</Link></div>
      <div className="card"><h3>🧭 SafeAway</h3><p className="small">Short-term monitoring while you’re away.</p><Link href="/services">Open →</Link></div>
      <div className="card"><h3>📰 Latest Insights</h3><p className="small">Our perspectives on human monitoring & AI.</p><Link href="/insights">Open →</Link></div>
    </div>
  </div>)
}