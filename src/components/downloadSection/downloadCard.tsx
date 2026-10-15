import { assets } from "@/lib/constants";
import styles from "./DownloadCard.module.css";
import FadeUp from "../animation/FadeUp";
import FadeIn from "../animation/fadeIn";

export default function DownloadCard() {
  return (
    <FadeUp>
      <section className={styles.downloadCard} aria-labelledby="download-title">
      <div className={styles.downloadText}>
        <h2 id="download-title">
          Ready to keep your money and activities together?
        </h2>

        <p>
          Download Wemza for iOS or Android. Split dinner, share rent, or
          manage orders without awkward follow-ups.
        </p>

        <div className={styles.downloadButtons}>
          <a
            href="#app-store"
            className={`${styles.storeButton} ${styles.appleButton}`}
            aria-label="Download Wemza on the App Store"
          >
            <img src="/icons/apple.png" alt="" />
            <span>App Store</span>
          </a>

          <a
            href="#google-play"
            className={`${styles.storeButton} ${styles.playButton}`}
            aria-label="Get Wemza on Google Play"
          >
            <img src="/icons/playstore.png" alt="" />
            <span>Google Play</span>
          </a>
        </div>
      </div>

      <FadeIn className={styles.qrPanel}>
        <div className={styles.qrImage}>
          <img src={assets.images.qrCode} alt="Wemza QR code" />
        </div>

        <h3>Scan with phone camera</h3>
        <p>Direct install link</p>
      </FadeIn>
    </section>
    </FadeUp>
  );
}