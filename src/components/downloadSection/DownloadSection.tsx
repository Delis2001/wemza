
import DownloadCard from "./downloadCard";
import styles from "./DownloadSection.module.css";
import SharedActivities from "./SharedActivities";


export default function DownloadSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SharedActivities />
        <DownloadCard />
      </div>
    </section>
  );
}