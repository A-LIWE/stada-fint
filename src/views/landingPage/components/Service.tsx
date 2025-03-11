import { IServices } from '../../../interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Service({ title, faIcon }: IServices) {
    return (
        <article className="services-card">
            <h3>{title}</h3>
            <FontAwesomeIcon className="services-icons" icon={faIcon} />
            <div className="services-features">
                <ul>
                    <li className="cleaning-yes">Tvätt- och putsning av fönster</li>
                    <li className="cleaning-yes">Rengöring av fönsterkarmar</li>
                    <li className="cleaning-yes">Dammsugning i alla rum</li>
                    <li className="cleaning-yes">Dammtorkning i alla utrymmen </li>
                    <li className="cleaning-yes">Tömning av papperskorgar</li>
                    <li className="cleaning-yes">Putsning av speglar</li>
                    <li className="cleaning-yes">Rengöring av dusch och toalett</li>
                    <li className="cleaning-yes">Rengöring av fläkt och filter</li>
                    <li className="cleaning-yes">Svabbning av golv</li>
                    <li className="cleaning-yes">Rengöring av alla vitvaror</li>
                </ul>
            </div>
        </article>
    )
}
