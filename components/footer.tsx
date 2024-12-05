import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-12 text-center text-sm text-muted-foreground">
      <p className="flex items-center justify-center gap-1">
        Crafted with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{" "}
        <a
          href="https://github.com/uabdirasul"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          uabdirasul
        </a>
      </p>
    </footer>
  );
};

export default Footer;
