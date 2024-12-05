import Link from "next/link";
import { ThemeToggler } from "./theme-toggler";

const Header = () => {
  return (
    <header className="flex items-center justify-between mb-8 xl:max-w-[60%] mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold">
        <Link href="/">replace</Link>
      </h1>
      <ThemeToggler />
    </header>
  );
};

export default Header;
