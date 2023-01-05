import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { navMenus } from "../../../data/data";


const HorizontalNavbar = ({ className }) => {
  const {pathname} = useRouter();
  return (
    <header className={` h-[80px] absolute top-0 left-0 w-full hidden xl:flex`}>
      <nav className="container mx-auto px-4 xl:flex justify-between items-center h-full">
        <Link href={"/"}>
          <Image
            src="/images/brand.png"
            width="160"
            height="100"
            alt="miicon brand img"
            priority
          />
        </Link>

        <div className="flex gap-x-8">
          {navMenus.map((menu) => (
            <Link
              className={`text-lg font-[500] hover:border-b-2 border-dark ${pathname === menu.route && ' border-b-2 border-dark'}`}
              key={menu.id}
              href={menu.route}
            >
              {menu.name}
            </Link>
          ))}

          {/* {typeof window !== "undefined"  && localStorage.getItem('email') &&(
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
          )} */}
        </div>
      </nav>
    </header>
  );
};

export default HorizontalNavbar;
