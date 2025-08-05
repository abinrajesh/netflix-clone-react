import Banner from "./Components/Banner/Banner";
import Explore from "./Components/Explore/Explore";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.appWrapper}>
      <Banner />
      <Explore />
    </div>
  );
}

export default App;
