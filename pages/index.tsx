import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to View-Tech</h1>
      <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/insights">Insights</Link>
      <<Link href="/insights">Insights</Link>
>
    </main>
  );
}
export default function Services() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Our Services</h1>

      <section>
        <h2>🔒 Security & Safety</h2>
        <p>Proactive live monitoring + AI to prevent incidents, not just review them.</p>
      </section>

      <section>
        <h2>✅ Quality Assurance</h2>
        <p>Real-time oversight that keeps every shift aligned to your standards.</p>
      </section>

      <section>
        <h2>🛎 Remote Lobby Services</h2>
        <p>Visitor, delivery, and access management from a centralized control room.</p>
      </section>

      <section>
        <h2>⚙️ Process Control</h2>
        <p>Continuous oversight that enforces SOPs and prevents risky deviations.</p>
      </section>

      <section>
        <h2>🏠 SafeAway</h2>
        <p>Absence monitoring for home or business — peace of mind while you’re away.</p>
      </section>
    </main>
  );
}
export default function About() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>About View-Tech</h1>
      <p>
        View-Tech is a proactive monitoring and observation platform that combines
        human expertise with AI-driven insights. Our mission is to move from
        reaction to initiative — creating safer, smarter, and more reliable
        environments for businesses and communities.
      </p>
    </main>
  );
}
export default function Insights() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Insights</h1>
      <p>
        Explore our latest thinking on proactive observation, monitoring, and AI-powered
        security solutions. Here, we share lessons learned, best practices, and innovations
        shaping the next generation of monitoring centers.
      </p>
    </main>
  );
}
