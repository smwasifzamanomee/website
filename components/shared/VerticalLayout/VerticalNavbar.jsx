import Image from "next/image";
import Link from "next/link";
import { navMenus } from "../../../data/data";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const VerticalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={` absolute top-0 left-0 w-full `}>
      <nav className="w-full p-8 flex justify-between items-center h-full ">
        <Link href={"/"}>
          <Image
            src="/images/brand.png"
            width="160"
            height="100"
            alt="miicon brand img"
            priority
          />
        </Link>

        <FaBars
          onClick={() => setIsOpen(true)}
          className="text-5xl mt-2 p-2 border cursor-pointer border-primary hover:text-primary transition-all duration-300 "
        />
      </nav>
      {isOpen && (
        <div className=" absolute top-0 w-full text-center bg-dark text-light min-h-screen z-10">
          <p
            onClick={() => setIsOpen(false)}
            className=" text-right p-5 text-primary text-4xl cursor-pointer"
          >
            &#10005;
          </p>
          {navMenus.map((menu) => (
            <Link
              onClick={() => setIsOpen(false)}
              className="text-lg font-[500] block py-1"
              key={menu.id}
              href={menu.route}
            >
              {menu.name}
            </Link>
          ))}
          {typeof window !== "undefined" && localStorage.getItem('email') &&(
            <>
              <Link
                className="text-lg font-[500]"
                href={"/career/candidatedata"}
              >
                Applications
              </Link>

              <Link
                className="text-lg font-[500]"
                href={"/"}
                onClick={() => localStorage.removeItem('email')}
              >
                Log Out
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default VerticalNavbar;
