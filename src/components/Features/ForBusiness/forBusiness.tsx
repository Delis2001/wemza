import Image from "next/image";

import { assets } from "@/lib/constants";

import FadeUp from "@/components/animation/FadeUp";

import classes from "./forBusiness.module.css";
import SlideIn from "@/components/animation/slideIn";

export default function ForBusiness() {
  return (
    <section className={classes.section} id="businesses">
      {/* Business information */}
      <FadeUp className={classes.content}>
        <span className={classes.badge}>
          For Small Businesses & Creators
        </span>

        <h2>
          Sell and deliver without losing customer details in DMs
        </h2>

        <p>
          If you sell apparel, food, beauty products, or creative services on
          Instagram and WhatsApp, orders get messy. Customers send fake
          receipts, addresses get buried, and dispatch riders get lost.
        </p>

        <p>
          Wemza turns customer orders into structured activities. The payment,
          delivery location, customer phone number, and courier tracking are
          anchored to a single confirmed thread.
        </p>

        {/* Example order card */}
        <FadeUp delay={0.2}>
          <div className={classes.orderCard}>
            <div className={classes.orderHeader}>
              <div>
                <span className={classes.storeName}>
                  D'LIX OFFICIAL STORE • LAGOS
                </span>

                <h3>Heavyweight Black Streetwear Hoodie</h3>
              </div>

              <span className={classes.price}>₦50,000</span>
            </div>

            <div className={classes.orderDetails}>
              <span>Customer: Chidera Okon</span>

              <span className={classes.paid}>
                <span>✓</span> Paid via Bank Transfer
              </span>
            </div>

            <div className={classes.deliveryInstructions}>
              <span>Delivery Instructions:</span>

              <p>
                "Please send to Abakaliki office. Landmark is Stadium junction."
              </p>
            </div>

            <div className={classes.dispatch}>
              <span className={classes.dispatchStatus}>
                <span aria-hidden="true">▱</span>
                Dispatched via GIG Logistics
              </span>

              <span className={classes.waybill}>
                Waybill: GIG-88401
              </span>
            </div>
          </div>
        </FadeUp>
      </FadeUp>

      {/* Business image and order preview */}
      <SlideIn
        direction="right"
        delay={0.15}
        className={classes.visual}
      >
        <div className={classes.imageWrapper}>
          <Image
            src={assets.images.package}
            alt="Small business owner preparing a customer order for delivery"
            width={600}
            height={600}
            className={classes.businessImage}
            unoptimized
          />
        </div>

        <div className={classes.imageFooter}>
          <div>
            <h3>D'LIX Workshop • Packaging order</h3>
            <p>Black Hoodie — Size 43</p>
          </div>

          <span className={classes.confirmed}>
            Order #842 Confirmed
          </span>
        </div>
      </SlideIn>
    </section>
  );
}