import { DownloadButtonProps } from "@/types";
import styles from "./downloadButton.module.css";



export default function DownloadButton({
  icon,
  text,
  platform,
  href = "#coming-soon",
}: DownloadButtonProps) {
  const buttonClass =
    platform === "ios"
      ? `${styles.button} ${styles.primary}`
      : `${styles.button} ${styles.secondary}`;

  return (
    <a
      href={href}
      className={buttonClass}
      aria-label={text}
    >
      <img
        src={icon}
        alt=""
        aria-hidden="true"
      />

      <span>{text}</span>
    </a>
  );
}