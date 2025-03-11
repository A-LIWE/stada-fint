import { ItestimonialUsers } from "../../../interfaces"

export default function Testimonial({ name, picture, description }: ItestimonialUsers) {
    return (
        <article className="testimonial-card">
            <span className="testimonial-img">
                <div>
                    <img src={picture} alt="" />
                </div>
            </span>
            <h3>{name}</h3>
            <p>{description}</p>
            <div>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
            </div>
        </article>
    )
}
