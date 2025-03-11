import { Button } from "@mui/material";
import '../../../../src/styles/hero.css';

export default function Hero() {

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1><span>Städafint</span> hjälper dig lösa vardagspusslet</h1>
          <p>Vi har under flera år hjälpt människor att förenkla sin vardag och få mer tid över
            till annat. Låt oss hjälpa dig också.</p>
          <Button variant="contained" sx={{ backgroundColor: '#0D3E5E', padding: '1rem 1.5rem', fontWeight: '700' }}>Boka städning</Button>
        </div>
      </section>
    </>
  )
}
