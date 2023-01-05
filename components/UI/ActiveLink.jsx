// import Link from "next/link";
// import { useRouter } from "next/router";

// const ActiveLink = ({  href, children }) => {
//     const router = useRouter();
//   (function prefetchPages() {
//     if (typeof window !== "undefined") {
//       router.prefetch(router.pathname);
//     }
//   })();

//   const handleClick = (e) => {
//     e.preventDefault();
//     router.push(href);
//   };

//   const isCurrentPath = router.pathname === href || router.asPath === href;

//   return (
//     <div className="flex gap-x-8">
//       <a
//         className={`text-lg font-[500] hover:border-b-2 border-dark pb-2 ${isCurrentPath ? "border-b-2  border-dark" : ""}`}
//         href={href}
//         onClick={handleClick}
//       >
//         {children}
//       </a>
//     </div>
//   );
// };

// export default ActiveLink;
