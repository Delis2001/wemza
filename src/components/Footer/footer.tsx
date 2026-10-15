import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const footerLinks = [
  {
    title: "PRODUCT",
    links: [
      { label: "Simple Money", href: "#simple-money" },
      { label: "Shared Activities", href: "#shared-activities" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "For Businesses", href: "#businesses" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About Wemza", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "SECURITY & LEGAL",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Bank Grade Security", href: "/security" },
      { label: "Compliance", href: "/compliance" },
    ],
  },
  {
    title: "CONNECT",
    links: [
      { label: "X (Twitter)", href: "https://x.com/" },
      { label: "Instagram", href: "https://instagram.com/" },
      { label: "LinkedIn", href: "https://linkedin.com/" },
      { label: "Community", href: "/community" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand and tagline */}
        <div className={styles.brandSection}>
          <Link href="/" className={styles.brand}>
            <img
              src="/logo.png"
              alt="Wemza"
              className={styles.logo}
            />
          </Link>

          <p className={styles.tagline}>
            Simple money stays simple. When money involves people, Wemza
            brings it together.
          </p>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Navigation columns */}
        <nav className={styles.navigation} aria-label="Footer navigation">
          {footerLinks.map((group) => (
            <div className={styles.linkGroup} key={group.title}>
              <h2>{group.title}</h2>

              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={
                        link.href.startsWith("https://")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        link.href.startsWith("https://")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Bottom divider */}
        <div className={styles.divider} />

        {/* Legal and copyright */}
        <div className={styles.bottomSection}>
          <p className={styles.security}>
            <span className={styles.lockIcon} aria-hidden="true">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="10" width="16" height="11" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              </svg>
            </span>

            <span>Secured end-to-end payments • Privacy protected</span>
          </p>

          <p className={styles.copyright}>
            © {new Date().getFullYear()} Wemza Inc. Built for human spending.
          </p>
        </div>
      </div>
    </footer>
  );
}