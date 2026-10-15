import Image from "next/image";
import { simpleMoneyStep } from "@/lib/constants";
import classes from "./howItWork.module.css";
import FadeUp from "@/components/animation/FadeUp";

export default function HowSimpleMoneyWork() {
  return (
    <section className={classes.section} id="simple-money">
      <FadeUp className={classes.heading}>
        <h2>How simple money works</h2>

        <p>
          Send normally with no extra steps. Just a clean transfer that lands
          instantly without clutter.
        </p>
      </FadeUp>

      <div className={classes.grid}>
        {simpleMoneyStep.map((step) => (
          <article className={classes.card} key={step.title}>
            <FadeUp>
              {" "}
              <div className={classes.iconWrapper}>
                <Image src={step.icon} alt="" width={18} height={18} />
              </div>
              <h3>{step.title}</h3>
              <p className={classes.description}>{step.description}</p>
              <div className={classes.transaction}>
                <span>{step.detail}</span>

                <span className={classes[step.type]}>{step.status}</span>
              </div>
            </FadeUp>
          </article>
        ))}
      </div>
    </section>
  );
}
