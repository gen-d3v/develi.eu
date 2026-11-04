import styles from "./Card.module.css";
import { motion } from "motion/react";

type CardProps = {
  id: string | undefined;
  title: string;
  description: string;
  logoSrc?: string;
  onClick: () => void;
};

export default function Card({
  id,
  title,
  description,
  logoSrc,
  onClick,
}: CardProps) {
  return (
    <motion.button
      layoutId={`project-${id}`}
      className={styles.card}
      type="button"
      onClick={onClick}
    >
      <span className={styles.logo}>
        {logoSrc && <img src={logoSrc} alt="" />}
      </span>

      <span className={styles.text}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </span>
    </motion.button>
  );
}
