export default function PageCarousel(props) {

    return (
        <>
            <div className={props.style}>
                <img src={"/img/" + props.img + ".png"}
                    className="carousel-item-img detail d-block w-100 shadow" alt="..." />
            </div>
        </>
    );
}