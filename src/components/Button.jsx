function Button({ id, title, containerClass, leftIcon, rightIcon }) {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden uppercase font-general text-xs">
        {title}
      </span>
      {rightIcon}
    </button>
  );
}

export default Button;
