import '../../../../src/styles/services.css';
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faBroom } from '@fortawesome/free-solid-svg-icons'
import { faHandSparkles } from '@fortawesome/free-solid-svg-icons'
import Service from './Service';

export default function Services() {

    const services = [
        {
            title: "Diamantstädning",
            faIcon: faGem
        },
        {
            title: "Toppstädning",
            faIcon: faStar
        },
        {
            title: "Basic städning",
            faIcon: faBroom
        },
        {
            title: "Fönstertvätt",
            faIcon: faHandSparkles
        }
    ]

    return (
        <>
            <section className="services-section">
                <h2>Städtjänster vi erbjuder</h2>
                <div className="services-grid">
                    {
                        services.map(service => {
                            return <Service title={service.title} faIcon={service.faIcon}></Service>
                        })
                    }
                </div>
            </section>
        </>
    )
}
