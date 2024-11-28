const Button = ({ title, id, leftIcon, containerClassName, rightIcon }) => {
  return (
    <button
      id={id}
      className={`group relative 
        z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-voilet-50
        px-7 py-3 text-black ${containerClassName}`}
    >
      {leftIcon}
      <span
        className="relative inline-flex  overflow-hidden font-general
      text-xs uppercase"
      >
        {title}
        {rightIcon}
      </span>
    </button>
  );
};

export default Button;
