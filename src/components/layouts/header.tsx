import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-[10px] h-[70px] shadow-md shadow-zinc-100">
        <div>
          <Link href="/">
            <h1 className="font-bold text-lg">Velvet & Vine</h1>
          </Link>
        </div>
        <nav className="hidden lg:flex">
          <ul className="flex justify-center gap-7 items-center ">
            <li className="nav">
              <Link href="" className="cursor-pointer">
                Logo Makers
              </Link>
            </li>
            <li className="nav">
              <Link href="">Brand Kit</Link>
            </li>
            <li className="nav">
              <Link href="">How It Works</Link>
            </li>
            <li className="nav">
              <Link href="">Reviews</Link>
            </li>
            <li className="nav">
              <Link href="">Logo Ideas</Link>
            </li>
            <li className="nav">
              <Link href="">Blog</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-center gap-5">
          <div>
            <Link href="">
              <h2 className="nav">Login</h2>
            </Link>
          </div>
          <div>
            <Link href="">
              <button className="bg-custom-purple hover:scale-105 hover:bg-[#1800f3]  cursor-pointer ease-in-out duration-500  text-white px-5 py-3 rounded-md">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
