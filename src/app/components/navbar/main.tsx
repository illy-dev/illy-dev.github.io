"use client";

import Link from "next/link";

const Navbar = () => {
  return (
      <div className="w-full h-20 fixed top-0 z-50">
        <div className="container mx-auto h-full">
          <div className="flex justify-between items-center h-full font-[Switzer-Medium] text-[0.8rem]">        
            <Link href={"/"} prefetch={false} className="font-[Switzer-BoldItalic]">ILLY</Link>
            <ul className="hidden md:flex gap-x-6 text-white">
              <li className="category-anim cursor-pointer">
                <Link href={"/projects"} prefetch={false}>PROJECTS</Link>
              </li>
              <li className="category-anim cursor-pointer">
                <Link href={"/about"} prefetch={false}>ABOUT</Link>
              </li>
              <li className="category-anim cursor-pointer">
                <Link href={"/gallery"} prefetch={false}>GALLERY</Link>
                </li>
            </ul>
            <p className="font-[Switzer-BoldItalic]">&copy; 2025</p>
          </div>
        </div>
      </div>
  );
};

export default Navbar;