import { useSearchParams, useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <p>
        Position: {lat} {lng}
        <button onClick={() => setSearchParams({ lat: 23, lng: 50 })}>
          Change Pos
        </button>
      </p>
    </div>
  );
}

export default Map;
