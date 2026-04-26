import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const faqs = [
  {
    category: 'Getting Started',
    items: [
      {
        q: 'How do I rent a dumpster?',
        a: "It's simple — call us or fill out our online quote form. We'll confirm availability, give you a price on the spot, and schedule your delivery. Most rentals are set up in a single phone call.",
      },
      {
        q: 'How much does dumpster rental cost?',
        a: 'Pricing depends on the size, rental duration, and your location within our service area. We offer flat-rate, upfront pricing with no hidden fees. Call us or request a quote online and we will give you an exact number fast.',
      },
      {
        q: 'What areas do you serve?',
        a: 'We serve the entire Capital District including Albany, Troy, Schenectady, Saratoga Springs, Cohoes, Watervliet, Colonie, Guilderland, Latham, and surrounding towns. Not sure if we cover your area? Give us a call.',
      },
    ],
  },
  {
    category: 'Dumpster Sizes & Selection',
    items: [
      {
        q: 'What sizes do you offer?',
        a: 'We offer 15, 20, and 30 yard roll-off dumpsters. The 15 yard is great for small cleanouts and single-room renovations. The 20 yard handles most residential projects. The 30 yard is ideal for large construction, demolition, and commercial jobs.',
      },
      {
        q: 'How do I know what size I need?',
        a: "A 15 yard works for garage or basement cleanouts. A 20 yard handles full home cleanouts and mid-size renovations. A 30 yard is best for roofing jobs, large construction projects, or commercial cleanouts. When in doubt, go one size up — it's cheaper than a second trip.",
      },
      {
        q: 'Is there a weight limit?',
        a: 'Yes. Each dumpster has a weight allowance included in your rate. If you exceed it, there may be an overage fee. Heavy materials like concrete, dirt, and roofing shingles add up fast — let us know what you are hauling and we will make sure you have the right setup.',
      },
    ],
  },
  {
    category: 'Delivery & Scheduling',
    items: [
      {
        q: 'How quickly can you deliver?',
        a: 'In most cases we can deliver the same day or next day, depending on availability. Call us early in the day for the best chance of same-day service. We serve a busy area so slots fill up quickly on peak days.',
      },
      {
        q: 'Do you offer same-day delivery?',
        a: 'Yes — same-day delivery is available based on availability and your location. Call us as early as possible to lock in your spot. We do our best to accommodate urgent requests.',
      },
      {
        q: 'Where can the dumpster be placed?',
        a: 'Most customers place their dumpster in a driveway. If you need it on the street, some municipalities require a permit — we can advise you on that. Let us know the placement before delivery so we can drop it in the right spot.',
      },
      {
        q: 'Can I move the dumpster after it is delivered?',
        a: 'No — roll-off dumpsters should stay where they are placed. Moving them can damage pavement or void your rental agreement. If you need it repositioned, call us and we will handle it.',
      },
    ],
  },
  {
    category: 'What Goes In (and What Doesn\'t)',
    items: [
      {
        q: 'What materials can I put in the dumpster?',
        a: 'We accept most household and construction waste including furniture, appliances (non-freon), wood, drywall, concrete, roofing shingles, metal, flooring, yard waste, and general junk. Check our Accepted Materials page for the full list.',
      },
      {
        q: 'What is NOT allowed in the dumpster?',
        a: 'We cannot accept hazardous materials including paint, solvents, asbestos, batteries, propane tanks, chemicals, motor oil, tires, or electronics. If you are unsure about a specific item, just ask us — we are happy to help.',
      },
      {
        q: 'Can I put concrete or dirt in the dumpster?',
        a: 'Yes, but heavy materials like concrete, dirt, and gravel fill weight limits very quickly. Let us know upfront if you are hauling heavy debris — we may recommend a smaller dumpster that is better suited for the weight.',
      },
    ],
  },
  {
    category: 'Rental Duration & Business Accounts',
    items: [
      {
        q: 'How long can I keep the dumpster?',
        a: 'Standard rentals are 7 days, but we are flexible. If you need more time, just call us — we can extend your rental. We would rather work with you than surprise you with extra fees.',
      },
      {
        q: 'What if I fill the dumpster before my pickup date?',
        a: 'Call us and we will schedule a pickup and swap as soon as possible. We can drop a fresh dumpster the same day or next day in most cases.',
      },
      {
        q: 'Do you offer long-term contracts for businesses?',
        a: 'Yes. We work with contractors, property managers, industrial facilities, and large commercial operations that need ongoing or recurring dumpster service. We offer long-term rates and dedicated scheduling. Call us to discuss what works for your operation.',
      },
      {
        q: 'Do you service multiple locations or large-scale projects?',
        a: 'Absolutely. For multi-phase construction projects, large demolitions, or businesses with multiple sites, we can coordinate multiple dumpsters, swap schedules, and custom delivery windows. Call us to put together a plan.',
      },
    ],
  },
];

export const FAQPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [openKey, setOpenKey] = useState<string | null>('0-0');

  const toggle = (key: string) => setOpenKey(openKey === key ? null : key);

  return (
    <div style={{ backgroundColor: '#f9fafb' }}>
      <section style={{ background: 'white', borderTop: '6px solid #39c318', borderBottom: '1px solid #e5e7eb', padding: '80px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 48, fontWeight: 800, color: '#1f2937', marginBottom: 16 }}>Frequently Asked Questions</h1>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, color: '#4b5563' }}>Everything you need to know about renting a dumpster from Moize. Can't find your answer? Just call us.</p>
        </div>
      </section>

      <section style={{ padding: '80px 60px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          {faqs.map((group, gi) => (
            <div key={gi} style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 700, color: '#39c318', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 20 }}>{group.category}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {group.items.map((item, ii) => {
                  const key = `${gi}-${ii}`;
                  const isOpen = openKey === key;
                  return (
                    <div key={key} style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', border: isOpen ? '1px solid #39c318' : '1px solid #e5e7eb', overflow: 'hidden', transition: 'border-color 0.2s' }}>
                      <button
                        onClick={() => toggle(key)}
                        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}
                      >
                        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: '#1f2937' }}>{item.q}</span>
                        <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', background: isOpen ? '#39c318' : '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                            <path d="M2 4l4 4 4-4" stroke={isOpen ? 'white' : '#6b7280'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </button>
                      {isOpen && (
                        <div style={{ padding: '0 24px 20px', fontFamily: "'Poppins', sans-serif", fontSize: 15, color: '#4b5563', lineHeight: 1.8 }}>
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div style={{ background: '#3d1a8a', borderRadius: 16, padding: '60px 40px', textAlign: 'center', borderTop: '4px solid #39c318' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 32, fontWeight: 800, color: 'white', marginBottom: 12 }}>Still have questions?</h2>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32 }}>We are happy to help — call us or request a quote and we will walk you through everything.</p>
            <Link to="/request" style={{ display: 'inline-block', background: '#39c318', color: 'white', fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, padding: '16px 40px', borderRadius: 30, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){section{padding:40px 20px!important}h1{font-size:32px!important}}`}</style>
    </div>
  );
};
