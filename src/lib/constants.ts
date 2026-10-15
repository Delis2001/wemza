

 const logo: string =  "/logo.png"
 const icons = {
   ios:"/icons/apple.png",
   play_store: "/icons/playstore.png",
   lock:"/icons/lock.png",
   link:"/icons/link.png",
   checked:"/icons/checked.png",
   send:"/icons/send.png",
   receipt:"/icons/receipt.png",
   wallet:"/icons/wallet.png",
   margin:"/icons/margin.png",
   fast_setUp:"/icons/set_up.png",
   whatsapp:"/icons/whatsapp.png",
   payment:"/icons/simple_payment.png",

 }
 
 const images = {
    circa:"/images/circa.png",
    circa2:"/images/circa.png",
    dinner:"/images/dinner.png",
    package:"/images/package.png",
    qrCode:"/images/wemza-qr.png"
 }


export const assets = {
    logo : logo,
    icons:icons,
    images:images

}



export const simpleActivitySteps = [
  {
    number: "01",
    title: "Create in 20 seconds",
    description:
      "Name your activity, enter the total amount or individual shares, and set a target date.",
    icon: icons.fast_setUp,
    type: "Fast setup",
  },
  {
    number: "02",
    title: "Share a link",
    description:
      "Send a single universal link into your WhatsApp group, iMessage, or direct message.",
    icon:icons.whatsapp,
    type: "WhatsApp & iMessage ready",
  },
  {
    number: "03",
    title: "Friends join & pay",
    description:
      "Friends open the link, review their share, and pay with their normal debit card or bank transfer.",
    icon: icons.payment,
    type: "Simple payment",
  },
   {
    number: "04",
    title: "Track settled payments",
    description:
      "Everyone sees who has paid and what's remaining. Once complete, the funds are safely settled.",
    icon: icons.checked,
    type: "Zero awkward reminders",
  },
];



export const simpleMoneyStep = [
  {
    icon: assets.icons.send,
    title: "Send straight to anyone",
    description:
      "Barber, tailor, sister, or colleague. Use their phone number or account tag. No group creation needed for a single transfer.",
    detail: "To: Barber Tunde",
    status: "₦5,000 sent",
    type: "success",
  },
  {
    icon: assets.icons.receipt,
    title: "No receipt screenshots",
    description:
      "Stop cropping mobile banking screenshots to prove payment. Both sender and receiver get real-time verified bank receipts.",
    detail: "Ref: #WMZ-9821",
    status: "Bank Confirmed",
    type: "info",
  },
  {
    icon: assets.icons.wallet,
    title: "Keep your balance quiet",
    description:
      "Shared activities stay completely contained. Your regular personal account balance is never exposed to anyone in a group.",
    detail: "Personal Balance",
    status: "Private · Visible only to you",
    type: "private",
  },
];