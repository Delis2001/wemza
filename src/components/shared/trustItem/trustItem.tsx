import styles from "./trustItem.module.css";

interface TrustItemProps {
  icon: string;
  text: string;
}

export default function TrustItem({ icon, text }: TrustItemProps) {
  return (
    <div className={styles.trustItem}>
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className={styles.icon}
      />

      <span className={styles.text}>{text}</span>
    </div>
  );
}