import FadeUp from "../animation/FadeUp";
import Card from "../shared/card/card";
import styles from "./SharedActivities.module.css";

export default function SharedActivities() {
  return (
   <FadeUp> <Card
      isIconNeeded
      image="/icons/link2.png"
      title="Your friends don't need an account beforehand"
      description="You don't have to convince everyone to sign up before creating an activity. Send your invite link. When they open it, it guides them straight to install the app, and then their split or order is already waiting when they log in."
      className={styles.sharedCard}
    >
      <div className={styles.cardFooter}>
        <div className={styles.checklist}>
          <span>
            <span className={styles.check}>✓</span>
            No manual invite codes to copy
          </span>

          <span>
            <span className={styles.check}>✓</span>
            No web fallbacks that lose context
          </span>
        </div>

        <aside className={styles.infoPanel}>
          <div className={styles.infoIcon}>
            <img src="/icons/link2.png" alt="" />
          </div>

          <h3>Direct deep linking</h3>

          <p>
            Phone number verification connects friends directly to their
            shared activity with zero extra taps.
          </p>
        </aside>
      </div>
    </Card></FadeUp>
  );
}