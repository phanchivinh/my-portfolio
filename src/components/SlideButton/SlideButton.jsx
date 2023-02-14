import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import './SlideButton.css'

const SlideButton = ({ icon, text, location, type, onSubmit }) => {
  return (
    <button className='slideBtn' type={type} onSubmit={onSubmit}>
        <Link to={location}>
            <span className="btn-text">{text}</span>
            <span className="btn-icon">
              <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            </span>
        </Link>
    </button>
  )
}

export default SlideButton