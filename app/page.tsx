'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, ChevronDown, Clock3, Heart, Camera, MapPin, Menu as MenuIcon, MessageCircle, Phone, Play, Star, Users, X } from 'lucide-react'

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G2KUWzk6MJpseF8QXQcJIVIJxAkYXN.png'
const menuImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EBwh87xBLNUnA0wAaFcYlpM07pBuGF.png'
const photos = [
  'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=85',
]
const dishes = [
  ['Paneer Tikka', '₹239', 'Charred cottage cheese, smoked paprika & kasundi', photos[1]],
  ['Paneer Malai Tikka', '₹269', 'Silken cream, cardamom and a kiss of charcoal', photos[2]],
  ['Bhrawa Aloo', '₹249', 'Baby potatoes filled with royal nut & spice', photos[3]],
  ['Veg Seekh Kabab', '₹229', 'Garden vegetables, cumin & live tandoor smoke', photos[0]],
  ['Malai Chaap', '₹239', 'Tender soya chaap, saffron cream & herbs', photos[4]],
  ['Chilli Paneer Dry', '₹309', 'Wok-tossed paneer, peppers & five-spice glaze', photos[5]],
  ['Dal Makhni', '₹219', 'Slow-simmered black lentils, finished with butter', photos[3]],
  ['Shahi Paneer', '₹299', 'Silky tomato gravy, cashew & royal spices', photos[1]],
  ['Veg Biryani', '₹229', 'Aromatic basmati, saffron and garden vegetables', photos[2]],
  ['Gulab Jamun', '₹100', 'Warm milk dumplings, rose syrup & pistachio', photos[4]],
]
const reviews = [
  ['Aarav Mehta', 'Amazing Paneer Tikka!', 'The charcoal, the service, the ambience — everything felt beautifully considered.'],
  ['Riya Kapoor', 'Best Dal Makhni in town.', 'A genuinely memorable vegetarian meal. The flavours are deep and comforting.'],
  ['Kabir Sethi', 'Beautiful ambience.', 'Authentic taste with a modern point of view. Five Star Grills is our new ritual.'],
]

function GoldRule({ label }: { label?: string }) { return <div className="gold-rule"><span />{label && <small>{label}</small>}<span /></div> }
function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) { return <div className="section-title"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p>{copy}</p>}<GoldRule /></div> }
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) { return <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .7, delay }}>{children}</motion.div> }

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [category, setCategory] = useState('Signature')
  const [selectedTable, setSelectedTable] = useState('Window 01')
  const [submitted, setSubmitted] = useState(false)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const categories = ['Signature', 'Tandoor', 'Chinese', 'Main Course', 'Desserts']
  return <main className="site-shell">
    <nav className="navbar">
      <a href="#top" className="nav-brand"><img src={logo} alt="Five Star Grills logo" /><span>FIVE STAR<br /><b>GRILLS</b></span></a>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}><a href="#story">Our Story</a><a href="#menu">Menu</a><a href="#experience">Experience</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a></div>
      <a href="#reserve" className="nav-cta">Book Table <ArrowRight /></a><button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <MenuIcon />}</button>
    </nav>

    <section className="hero" id="top">
      <div className="hero-bg" />
      <div className="steam steam-a" /><div className="steam steam-b" /><div className="steam steam-c" />
      <div className="hero-content"><motion.img src={logo} alt="Five Star Grills emblem" className="hero-logo" initial={{ scale: .82, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.1 }} /><p className="eyebrow">100% VEGETARIAN · NORTH INDIAN & CHINESE</p><h1>Flavours beyond<br /><em>expectations.</em></h1><p className="hero-sub">Premium vegetarian fine dining, where the tandoor tells stories<br className="desktop" /> and every table becomes a memory.</p><div className="hero-actions"><a className="gold-button" href="#reserve">Book a Table <ArrowRight /></a><a className="outline-button" href="#menu">Explore Menu <ChevronDown /></a></div><div className="hero-meta"><span><Star fill="currentColor" /> 4.9 rating</span><span><span className="leaf">✦</span> Pure vegetarian</span><span><span className="fire">♨</span> Fresh tandoor live</span></div></div>
      <a className="scroll-cue" href="#story"><span>Scroll to discover</span><div /></a>
    </section>

    <div className="floating-cards"><div><span>01</span><strong>Crafted with intention</strong><small>Every plate has a purpose.</small></div><div><span>02</span><strong>Ingredients first</strong><small>Fresh, local, honest.</small></div><div><span>03</span><strong>Made for moments</strong><small>Gather. Graze. Celebrate.</small></div></div>

    <section className="story section-pad" id="story"><Reveal><div className="story-grid"><div className="story-image"><img src={photos[4]} alt="Warmly lit Five Star Grills dining room" /><div className="image-caption"><span>THE HOUSE OF FLAVOUR</span><b>Est. 2020</b></div></div><div className="story-copy"><SectionTitle eyebrow="The Five Star way" title="A little more than a meal." copy="Five Star Grills is our ode to the theatre of the tandoor, the alchemy of the wok, and the joy of gathering around a generous table." /><p>From the first crackle of the live grill to the last spoonful of something sweet, our kitchen celebrates India’s vibrant vegetarian soul with a modern, global sensibility.</p><a className="text-link" href="#menu">Discover our story <ArrowRight /></a><div className="stats"><div><b>15<span>+</span></b><small>Signature dishes</small></div><div><b>100<span>%</span></b><small>Vegetarian</small></div><div><b>5k<span>+</span></b><small>Happy guests</small></div><div><b>24<span>/7</span></b><small>Fresh daily</small></div></div></div></div></Reveal></section>

    <section className="menu-section section-pad" id="menu"><Reveal><SectionTitle eyebrow="From our kitchen" title="The menu, reimagined." copy="A love letter to the classics, with a few delicious surprises along the way." /><div className="category-tabs">{categories.map(item => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="dish-grid">{dishes.map(([name, price, desc, image], i) => <motion.article className="dish-card" key={name} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .035 }}><div className="dish-image"><img src={image} alt={name} /><button aria-label={`Add ${name} to favourites`}><Heart /></button>{i < 3 && <span className="chef-badge">Chef’s choice</span>}</div><div className="dish-info"><div className="dish-top"><h3>{name}</h3><strong>{price}</strong></div><p>{desc}</p><div className="dish-bottom"><span className="veg-dot">● Vegetarian</span><button className="add-button">Add to table <ArrowRight /></button></div></div></motion.article>)}</div><div className="menu-foot"><img src={menuImage} alt="Five Star Grills printed menu artwork" /><div><p>See the full expression of our kitchen.</p><a className="outline-button" href="#reserve">View full menu <ArrowRight /></a></div></div></Reveal></section>

    <section className="experience section-pad" id="experience"><Reveal><SectionTitle eyebrow="Why five star" title="An experience beyond expectations." /><div className="feature-grid">{[['♨','Live Tandoor','The unmistakable theatre of smoke, flame and spice.'],['◌','Family Dining','Room to linger over stories, shared plates and second helpings.'],['✦','Fresh Ingredients','Thoughtfully sourced produce, prepared fresh every day.'],['↯','Quick Service','Unhurried hospitality, with a kitchen that moves with rhythm.']].map(([icon, title, copy]) => <motion.div className="feature-card" key={title} whileHover={{ y: -8, rotate: -.5 }}><span className="feature-icon">{icon}</span><h3>{title}</h3><p>{copy}</p><ArrowRight className="feature-arrow" /></motion.div>)}</div></Reveal></section>

    <section className="gallery-section section-pad" id="gallery"><Reveal><SectionTitle eyebrow="A seat at the table" title="Taste before you visit." copy="A glimpse into the glow, the garnish and the moments in between." /><div className="masonry">{photos.map((photo, i) => <button key={photo} className={`gallery-item gallery-${i}`} onClick={() => setLightbox(photo)}><img src={photo} alt="Five Star Grills dining and food" /><span><Camera /> {['248','312','189','425','276','201'][i]}</span></button>)}</div><a className="outline-button center-button" href="#contact"><Camera /> Follow on Instagram</a></Reveal></section>

    <section className="reserve section-pad" id="reserve"><Reveal><div className="reserve-grid"><div className="reserve-image"><img src={photos[0]} alt="Five Star Grills restaurant interior" /><div><span>Come hungry.</span><b>Leave glowing.</b></div></div><div className="reserve-form"><SectionTitle eyebrow="Your table awaits" title="Make it a moment." copy="Tell us how you would like to dine. We’ll take care of the rest." />{submitted ? <div className="success-state"><div className="success-mark">✓</div><h3>Your table has been reserved.</h3><p>We look forward to serving you.</p><button className="text-link" onClick={() => setSubmitted(false)}>Make another booking <ArrowRight /></button></div> : <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}><div className="form-row"><label>Name<input required placeholder="Your name" /></label><label>Phone number<input required type="tel" placeholder="+91 00000 00000" /></label></div><div className="form-row"><label>Date<input required type="date" /></label><label>Time<select defaultValue="7:30 PM"><option>12:00 PM</option><option>1:00 PM</option><option>7:00 PM</option><option>7:30 PM</option><option>8:00 PM</option><option>9:00 PM</option></select></label></div><div className="form-row"><label>Guests<select defaultValue="2 guests"><option>2 guests</option><option>4 guests</option><option>6 guests</option><option>8 guests</option><option>10+ guests</option></select></label><label>Occasion<select defaultValue="Just dining"><option>Just dining</option><option>Birthday</option><option>Anniversary</option><option>Family dinner</option><option>Business meeting</option><option>Party</option></select></label></div><label>Special request<textarea placeholder="Dietary notes, celebrations, or anything we should know..." rows={3} /></label><div className="table-picker"><div className="picker-heading"><span>Choose your preferred table</span><small>Tap a table to select</small></div><div className="table-map">{['Window 01','Window 02','Garden 01','Indoor 01','Indoor 02','Private'].map((table, i) => <button type="button" key={table} className={`${selectedTable === table ? 'selected' : ''} ${i === 1 ? 'reserved' : ''}`} disabled={i === 1} onClick={() => setSelectedTable(table)}><span>◼</span><small>{table}</small><em>{i === 5 ? '8 seats' : i > 1 ? '4 seats' : '2 seats'}</em></button>)}</div><div className="legend"><span><i className="available" /> Available</span><span><i className="chosen" /> Selected</span><span><i className="booked" /> Reserved</span></div></div><button className="gold-button submit-button" type="submit">Reserve my table <ArrowRight /></button></form>}</div></div></Reveal></section>

    <section className="party-banner section-pad"><Reveal><div className="party-inner"><div><p className="eyebrow">Make it a celebration</p><h2>Planning a birthday<br />or family party?</h2><p>Gather your favourite people. We’ll bring the golden glow.</p></div><div className="party-actions"><a className="gold-button" href="#reserve">Book a party <ArrowRight /></a><a className="outline-button" href="tel:+911234567890"><Phone /> Call now</a></div><span className="party-spark">✦</span></div></Reveal></section>

    <section className="reviews section-pad"><Reveal><SectionTitle eyebrow="Kind words" title="A table worth returning to." /><div className="review-grid">{reviews.map(([name, title, copy]) => <article className="review-card" key={name}><div className="stars">★★★★★</div><h3>“{title}”</h3><p>{copy}</p><span>— {name}</span></article>)}</div></Reveal></section>

    <section className="contact section-pad" id="contact"><Reveal><div className="contact-grid"><div><SectionTitle eyebrow="Find us" title="Come find your flavour." copy="For long lunches, late dinners, and everything worth celebrating." /><div className="contact-details"><p><MapPin /><span><b>Five Star Grills</b>Sector 17, Chandigarh<br />India 160017</span></p><p><Phone /><span><b>+91 12345 67890</b>Every day, 11 AM – 11 PM</span></p><p><MessageCircle /><span><b>hello@fivestargrills.in</b>We reply with warmth.</span></p></div><div className="contact-actions"><a className="gold-button" href="tel:+911234567890">Call restaurant <Phone /></a><a className="outline-button" href="https://maps.google.com" target="_blank">Get directions <MapPin /></a></div></div><div className="map-card"><div className="map-lines" /><div className="map-pin"><MapPin fill="currentColor" /><small>Five Star<br />Grills</small></div><span className="map-label label-a">SECTOR 17</span><span className="map-label label-b">THE CITY BEAUTIFUL</span></div></div></Reveal></section>

    <footer><div className="footer-top"><a className="footer-brand" href="#top"><img src={logo} alt="Five Star Grills" /><span>FIVE STAR GRILLS<small>DINE · GRILL · REPEAT</small></span></a><div className="footer-links"><a href="#story">Our story</a><a href="#menu">Menu</a><a href="#reserve">Reservations</a><a href="#contact">Contact</a></div><div className="footer-social"><a href="#contact"><Camera /></a><a href="#contact"><MessageCircle /></a><a href="#contact"><Play /></a></div></div><div className="footer-bottom"><span>© 2026 Five Star Grills. Crafted with taste.</span><span>100% vegetarian <i>✦</i> Always memorable.</span></div></footer><a className="fixed-book" href="#reserve"><CalendarDays /> Book table</a>
    {lightbox && <div className="lightbox" onClick={() => setLightbox(null)}><button aria-label="Close gallery"><X /></button><img src={lightbox} alt="Expanded Five Star Grills gallery image" /></div>}
  </main>
}

