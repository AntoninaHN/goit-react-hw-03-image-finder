import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";
import { Hearts } from "react-loader-spinner";
import styles from "./Loader.module.css";

const loader = () => {
  return (
    <div className={styles.center}>
      <Hearts type="Hearts" color="#3f51b5" height={80} width={80} />
    </div>
  );
};
export default loader;
