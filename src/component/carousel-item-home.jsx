import { Link } from "react-router-dom";

export default function HomeCarousel(props) {

    return (
        <>
            <div className={props.style}>
                <img src={"./img/" + props.img} className="carousel-item-img d-block w-100 shadow" alt="..." />
                <div className="carousel-text">
                    <h5>{props.title}</h5>
                    <p>{props.desc}</p>
                    <Link to={'project/' + props.link} className="btn btn-warning btn-sm">See Detail</Link>
                </div>
            </div>
        </>
    );
}