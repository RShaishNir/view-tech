/* pages/services.tsx
   Drop-in replacement: long-form Services content (5 sections) with anchors.
*/
export default function Services(){
  return (
    <div>
      <div className='kicker'>Our Services</div>
      <h1>Services</h1>
      <p className='small'>Deep, long-form explanations for each service. Use the quick links to jump to a section.</p>

      <ul className='small' style={{display:'flex',flexWrap:'wrap',gap:'10px',padding:0,listStyle:'none',margin:'16px 0'}}>
        <li><a className='nav-link' href='#security'>🔐 Security & Safety</a></li>
        <li><a className='nav-link' href='#qa'>✅ Quality Assurance</a></li>
        <li><a className='nav-link' href='#lobby'>🛎️ Remote Lobby Services</a></li>
        <li><a className='nav-link' href='#process'>🧩 Process Control</a></li>
        <li><a className='nav-link' href='#safeaway'>🧭 SafeAway</a></li>
      </ul>

      <section id='security' className='section'>
        <h2>🔐 Security & Safety</h2>
        <h3>Challenges</h3>
        <p>Nationality crime, theft, vandalism, unauthorized access, safety risks and more.</p>

        <h3>Our Solution</h3>
        <p>
          Live &amp; proactive human-led monitoring combined with AI analytics to detect anomalies, enforce access rules,
          and prevent escalation. In addition, we use a methodology built on small, dedicated, and professional teams
          who provide individual attention and full operational flexibility.
        </p>

        <h3>Benefits</h3>
        <ul>
          <li>The possibility of reducing the physical security force and, as a result, reducing significant costs.</li>
          <li>Your eyes are on the ground at all times and provide immediate insight into unusual security events and more.</li>
          <li>Instead of relying on cameras only for incident investigation, we utilize them to actively prevent incidents in real time.</li>
          <li>The Observation Center integrates advanced AI capabilities into your system for customized alerts.</li>
        </ul>
      </section>

      <section id='qa' className='section'>
        <h2>✅ Quality Assurance</h2>
        <h3>Challenges</h3>
        <p>Operational inconsistencies, overlooked errors, lack of accountability, and gaps in compliance with safety and service standards.</p>
        <h3>Our Solution</h3>
        <p>
          Dedicated monitoring and review of day-to-day activities ensure that processes align with defined procedures.
          Observers document deviations, guide staff in real time, and provide management with structured insights.
          Through ongoing mentoring and performance analysis, we help organizations maintain high standards across every shift.
        </p>
        <h3>Benefits</h3>
        <ul>
          <li>Cost avoidance — early identification and correction of errors before they escalate.</li>
          <li>Strengthened compliance with internal and external standards.</li>
          <li>Continuous feedback loop that improves efficiency and accountability.</li>
          <li>Higher service quality and reduced rework or operational failures.</li>
        </ul>
      </section>

      <section id='lobby' className='section'>
        <h2>🛎️ Remote Lobby Services</h2>
        <h3>Challenges</h3>
        <p>Unmanned entrances, uncontrolled visitor access, delivery management, and unauthorized entry attempts.</p>
        <h3>Our Solution</h3>
        <p>
          Centralized remote operators verify identities, manage visitor flows, log deliveries,
          and guide guests via live video and intercom — delivering consistent access control without on‑site staffing.
        </p>
        <h3>Benefits</h3>
        <ul>
          <li>Lower staffing costs without compromising safety.</li>
          <li>Consistent, professional visitor experience.</li>
          <li>Enhanced security with verified entry and auditable logs.</li>
          <li>Scales across multiple properties from one observation hub.</li>
        </ul>
      </section>

      <section id='process' className='section'>
        <h2>🧩 Process Control</h2>
        <h3>Challenges</h3>
        <p>Critical processes breaking down due to lack of oversight, unsafe practices, or late detection of deviations.</p>
        <h3>Our Solution</h3>
        <p>
          Monitoring teams continuously observe operations to ensure compliance with SOPs.
          Smart alerts and structured reporting escalate issues in real time while coaching teams to maintain discipline.
        </p>
        <h3>Benefits</h3>
        <ul>
          <li>Immediate detection of unsafe or incorrect practices.</li>
          <li>Reduced operational risks and improved workplace safety.</li>
          <li>Increased accountability via real‑time reporting.</li>
          <li>Protection of project timelines and prevention of delays.</li>
        </ul>
      </section>

      <section id='safeaway' className='section'>
        <h2>🧭 SafeAway</h2>
        <h3>Challenges</h3>
        <p>If you are away (vacation, event, etc.), you are concerned about leaving the house or business unattended.</p>
        <h3>Our Solution</h3>
        <p>
          After a short registration process, we connect to your cameras and monitor your home or business according to your needs.
          If anything unusual occurs, we inform you immediately. The service can be provided by the hour or day and adjusted throughout
          the entire period of absence.
        </p>
        <h3>Benefits</h3>
        <ul>
          <li>Protecting your assets in a real and high‑quality manner.</li>
          <li>Peace of mind — not just analytics alerts, but human visual inspection and scanning.</li>
          <li>Immediate escalation in case of emergencies or suspicious activity.</li>
          <li>Flexible coverage — continue or stop anytime.</li>
        </ul>
      </section>
    </div>
  )
}
