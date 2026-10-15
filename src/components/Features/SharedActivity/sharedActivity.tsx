import Image from "next/image";
import { assets } from "@/lib/constants";
import classes from "./sharedActivity.module.css";
import SlideIn from "@/components/animation/slideIn";
import FadeUp from "@/components/animation/FadeUp";

export default function SharedActivity() {
  return (
    <section className={classes.section} id="shared-activities">
      <SlideIn className={classes.visual}>
        <Image
          src={assets.images.dinner}
          alt="Friends sharing dinner together"
          width={600}
          height={600}
          unoptimized
        />

        <div className={classes.imageFooter}>
          <span className={classes.settled}>
            <span />
            Weekend dinner settled · Circa, Lagos
          </span>

          <span className={classes.amount}>₦40,000 / 4 friends</span>
        </div>
      </SlideIn>

      <div className={classes.content}>
        <FadeUp>
          {" "}
          <span className={classes.badge}>Shared Activities</span>
        </FadeUp>

        <FadeUp>
          <h2>When money involves people, Wemza brings it together</h2>
        </FadeUp>

        <FadeUp>
          {" "}
          <p>
            Planning a dinner, split Airbnb, or group trip shouldn't mean
            someone footing the bill and awkwardly chasing people on WhatsApp
            for weeks.
          </p>
        </FadeUp>

        <FadeUp>
          <p>
            Invite friends with a link. Everyone sees what they owe, pays
            directly from their bank in seconds, and the shared ledger updates
            for everyone in real time.
          </p>
        </FadeUp>
        <FadeUp>
          <ul className={classes.features}>
            <li>
              <span>✓</span>
              <p>
                <strong>Clear per-person breakdown:</strong> No guesswork or
                manual calculator screenshots.
              </p>
            </li>

            <li>
              <span>✓</span>
              <p>
                <strong>Contextual activity chat:</strong> Keep the receipt
                notes, food preferences, and payment reminders in one clean
                thread.
              </p>
            </li>

            <li>
              <span>✓</span>
              <p>
                <strong>Instant confirmation:</strong> Every payment updates the
                progress bar live so everyone knows when it's settled.
              </p>
            </li>
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
