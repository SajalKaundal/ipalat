import clsx from "clsx";

type Variant = "red" | "white"

interface ButtonProps {
  variant?:Variant;
  className?:string;
  children:React.ReactNode;
}

function Button({variant="red",className,children}:ButtonProps) {

  const variantStyle = {
    red: "bg-primary text-white",
    white: "bg-white text-primary"
  }
  const baseStyle = "font-gilroy font-[950]"

  return (
    <button
      className={clsx(
        className,
        baseStyle,
        "hover:scale-110 transition-all duration-300 cursor-pointer",
        variantStyle[variant],
      )}
    >
      {children}
    </button>
  );
}

export default Button
