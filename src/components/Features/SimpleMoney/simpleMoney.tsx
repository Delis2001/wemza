import Image from "next/image";

import { assets } from "@/lib/constants";

import DownloadButton from "@/components/shared/downloadButton/downloadButton";
import TrustItem from "@/components/shared/trustItem/trustItem";

import FadeUp from "@/components/animation/FadeUp";

import classes from "./simpleMoney.module.css";
import FadeIn from "@/components/animation/fadeIn";

export default function SimpleMoney() {
  return (
    <section className={classes.section} id="simple-money">
      <div className={classes.content}>
        <FadeUp>
          <h1 className={classes.heading}>
            Simple money stays simple.
            <br />
            When money involves people,
            <br />
            <span>Wemza brings it together.</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.12}>
          <p className={classes.description}>
            Send money normally without extra steps. When it's dinner with
            friends, house bills, or paying a local business, Wemza keeps
            the payments, chat, and updates in one place.
          </p>
        </FadeUp>

        <FadeUp delay={0.24}>
          <div className={classes.downloadButtons}>
            <DownloadButton
              icon={assets.icons.ios}
              text="Coming soon on the App Store"
              platform="ios"
              href="#coming-soon"
            />

            <DownloadButton
              icon={assets.icons.play_store}
              text="Coming soon on Google Play"
              platform="android"
              href="#coming-soon"
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.36}>
          <div className={classes.trustItems}>
            <TrustItem
              icon={assets.icons.lock}
              text="Connected payments"
            />

            <TrustItem
              icon={assets.icons.link}
              text="No invite codes required"
            />

            <TrustItem
              icon={assets.icons.checked}
              text="Instant confirmation"
            />
          </div>
        </FadeUp>
      </div>

      <FadeIn
        className={classes.visual}
        delay={0.2}
        duration={0.9}
      >
        <Image
          src={assets.images.circa}
          alt="Friends sharing an activity through Wemza"
          width={600}
          height={600}
          priority
          unoptimized
        />
      </FadeIn>
    </section>
  );
}