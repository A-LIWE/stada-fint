import React from 'react'
import '../../../../src/styles/testimonials.css';
import Testimonial from './Testimonial';
import maleAvatar from '../../../img/maleAvatar.svg'
import femaleAvatar1 from '../../../img/femaleAvatar1.svg'
import femaleAvatar2 from '../../../img/femaleAvatar2.svg'

export default function Testimonials() {

    const testimonialUsers = [
        {
            name: "Lina",
            picture: `${femaleAvatar1}`,
            description: "Jag har anlitat Städafint sedan flera år tillbaka och alltid varit mycket nöjd med resultatet Pålitliga och mycket trevliga."
        },
        {
            name: "Benjamin",
            picture: `${maleAvatar}`,
            description: "Blev rekommenderad av en god vän att anlita Städafint för regelbundet underhåll av fönster - ångrar det inte en sekund!"
        },
        {
            name: "Bianca",
            picture: `${femaleAvatar2}`,
            description: "Har anlitat Städafint AB vi flera tillfällen, både vid flytt och övriga tillfällen. Mycket trevlig och noggrann personal."
        }
    ]

    return (
        <>
            <section className="testimonials-section">
                <h2>Vad säger andra om oss?</h2>
                <div className="testimonials-grid">
                    {
                        testimonialUsers.map(testimonial => {
                            return <Testimonial name={testimonial.name} picture={testimonial.picture} description={testimonial.description}></Testimonial>
                        })
                    }
                </div>
            </section>
        </>
    )
}
