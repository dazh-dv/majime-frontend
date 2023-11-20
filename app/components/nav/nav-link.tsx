"use client";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";
import Link from "next/link";

interface NavLink {
  to: string;
  title: string;
}

export default function NavLink({ to, title }: NavLink) {
  const path = usePathname();

  return (
    <Link
      aria-current={to === path ? "page" : undefined}
      className={styles.nav_link}
      href={to}
    >
      {title}
    </Link>
  );
}
