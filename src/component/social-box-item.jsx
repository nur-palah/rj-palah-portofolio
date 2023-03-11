import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ItemSocialBox(props) {

    return (
        <>
            <li className="social-box-item">
                <a href={props.link} target="_blank">
                    <button type="button" className="btn social-btn" data-bs-toggle="tooltip" data-bs-placement="bottom"
                        title={props.title}>
                        <FontAwesomeIcon icon={props.icon} />
                    </button>
                </a>
            </li>
        </>
    );
}