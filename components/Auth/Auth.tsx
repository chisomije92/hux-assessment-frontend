import Link from "next/link";
import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import { useRouter } from "next/router";

const Auth = () => {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(true);
  const { pathname } = router;
  useEffect(() => {
    if (pathname === "/register") {
      setShowLogin(false);
    } else {
      setShowLogin(true);
    }
  }, [pathname]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Hux Contact Manager"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {showLogin
            ? "Sign in to your account"
            : "Register to enjoy the benefits"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          {!showLogin && (
            <Input
              id="name"
              name="name"
              type="text"
              labelText="Name"
              className2="mt-2"
              labelClassName="block text-sm font-medium leading-6 text-gray-900"
              inputClassName="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          )}

          <Input
            id="email"
            name="email"
            type="email"
            labelText="Email Address"
            className2="mt-2"
            labelClassName="block text-sm font-medium leading-6 text-gray-900"
            inputClassName="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <Input
            id="password"
            name="password"
            type="password"
            labelText="Password"
            // className1="flex items-center justify-between"
            className2="mt-2"
            labelClassName="block text-sm font-medium leading-6 text-gray-900"
            inputClassName="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {showLogin ? "Login" : "Register"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          {showLogin ? "Not a user? " : "A user already? "}
          <Link
            href={!showLogin ? "/login" : "/register"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            {!showLogin ? "Login" : "Register"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Auth;