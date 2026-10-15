import styles from "./card.module.css";
import { CardProps } from "@/types";

interface ExtendedCardProps extends CardProps {
  layout?: "default" | "horizontal";
}

export default function Card({
  isIconNeeded = false,
  title,
  description,
  image,
  children,
  className = "",
  layout = "default",
}: ExtendedCardProps) {
  return (
    <article
      className={`${styles.card} ${styles[layout]} ${className}`}
    >
      <div className={styles.content}>
        {isIconNeeded && (
          <div className={styles.iconWrapper}>
            <img
              src={image || "/icons/link2.png"}
              alt=""
              className={styles.icon}
            />
          </div>
        )}

        <div className={styles.textContent}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        {children && (
          <div className={styles.extraContent}>{children}</div>
        )}
      </div>
    </article>
  );
}