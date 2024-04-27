"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Avatar } from "@radix-ui/react-avatar";
import axios from "axios";
const Navbar = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  useEffect(() => {
    axios
      .post("/api/newUser", user)
      .then((res) => {
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log("error in request", err);
      });
  }, [user]);

  return (
    <header className="px-4 lg:px-6 h-14 w-full flex items-center border-b justify-between border-gray-200 dark:border-gray-800 fixed backdrop-blur-md bg-[#ffffff18] z-[150]">
      <Link
        className="flex items-center justify-center text-lg font-semibold "
        href="/"
      >
        Jengo
      </Link>

      {user && (
        <div className="   flex gap-3 items-center w-fit justify-center m-auto">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
            href="/learning"
          >
            Resources
          </Link>

          <Link
            className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
            href="/community"
          >
            Community
          </Link>
        </div>
      )}
      <nav className=" flex gap-4 sm:gap-6  py-2">
        {user ? (
          <>
            <div className=" flex gap-2 object-center">
              {" "}
              <Avatar className="">
                <img
                  alt="User avatar"
                  src={user.picture}
                  className="h-8 w-8 rounded-full"
                />
              </Avatar>
              <div className="  h-full lg:text-sm whitespace-nowrap leading-none">
                <p className="leading-none">{user.name}</p>
                <p className=" text-[.9rem] leading-none font-medium">
                  Learner
                </p>
              </div>
            </div>
            <Link
              className="text-sm font-medium border border-black/30 hover:bg-[#47474711] flex justify-center items-center lg:px-2 rounded underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
              href="/api/auth/logout"
            >
              Logout
            </Link>
          </>
        ) : (
          <Link
            href="/api/auth/login"
            className="  text-sm font-medium border px-3 border-black/30 hover:bg-[#47474711] flex justify-center items-center lg:px-2 rounded underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50 h-full "
          >
            Login
          </Link>
        )}

        {/* <Link
          className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          Impact
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          Testimonials
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 dark:text-gray-400 dark:hover:text-gray-50"
          href="#"
        >
          Contact
        </Link> */}
      </nav>
    </header>
  );
};

export default Navbar;
