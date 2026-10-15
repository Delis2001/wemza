import Image from "next/image";
import { simpleActivitySteps } from "@/lib/constants";
import classes from "./howItWork.module.css";
import FadeUp from "@/components/animation/FadeUp";

export default function HowItWorks() {
  return (
    <section className={classes.section} id="how-it-works">
      <FadeUp className={classes.heading}>
        <h2>How an Activity works in 4 steps</h2>

        <p>Simple, predictable steps from creation to full settlement.</p>
      </FadeUp>

      <div className={`${classes.grid} ${classes.activityGrid}`}>
        {simpleActivitySteps.map((step) => (
           <article className={classes.card} key={step.number}>
          <FadeUp>
           
              <span
                className={`${classes.number} ${classes[`step${step.number}`]}`}
              >
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p className={classes.description}>{step.description}</p>

              <div className={classes.cardFooter}>
                <Image src={step.icon} alt="" width={14} height={14} />

                <span>{step.type}</span>
              </div>
           
          </FadeUp>
           </article>
        ))}
      </div>
    </section>
  );
}
