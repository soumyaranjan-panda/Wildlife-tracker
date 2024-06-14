import { AiFillAccountBook } from "react-icons/ai";


const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <AiFillAccountBook className="location-icon"/>
        </div>
    )
}

export default LocationMarker
