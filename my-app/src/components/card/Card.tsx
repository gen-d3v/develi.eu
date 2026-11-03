type ProjectCardProps = {
  title: string;
  description: string;
  onClick: () => void;
};

export default function Card({
  title,
  description,
  onClick,
}: ProjectCardProps) {
  return (
    <button
      className="projectCard"
      type="button"
      onClick={onClick}
      aria-haspopup="dialog"
    >
      <svg
        className="projectCard__icon"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5" />
        <path d="M12 8h.01" />
      </svg>

      <span className="projectCard__content">
        <span className="projectCard__title">{title}</span>
        <span className="projectCard__description">{description}</span>
      </span>
    </button>
  );
}
