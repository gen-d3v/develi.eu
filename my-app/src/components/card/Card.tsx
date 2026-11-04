import styles from "./Card.module.css";
import { motion } from "motion/react";

type CardProps = {
  id: string | undefined;
  title: string;
  summary: string;
  logo?: string;
  onClick: () => void;
};

export default function Card({ id, title, summary, logo, onClick }: CardProps) {
  return (
    <motion.button
      layoutId={`project-${id}`}
      className={styles.card}
      type="button"
      onClick={onClick}
    >
      <span className={styles.logo}>{logo && <img src={logo} alt="" />}</span>

      <span className={styles.text}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{summary}</span>
      </span>
    </motion.button>
  );
}
