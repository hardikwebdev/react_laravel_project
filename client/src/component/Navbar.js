import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-6 px-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <p className="text-3xl">React-Laravel</p>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <i className="fa-solid fa-bars"></i>
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-4">
          <NavLink
            to="/"
            className="text-color-3 px-3 py-2 rounded-md text-xs font-bold uppercase"
          >
            Home
          </NavLink>

          <NavLink
            to="/we-sell"
            className="text-color-3 px-3 py-2 rounded-md text-xs font-bold uppercase"
          >
            we sell
          </NavLink>

          <NavLink
            to="#"
            className="text-color-3 px-3 py-2 rounded-md text-xs font-bold uppercase"
          >
            we buy
          </NavLink>

          <NavLink
            to="#"
            className="theme-btn box-shadow-theme py-2.5 px-8 rounded bg-theme hover:bg-theme-hover text-white text-color-3 px-3 py-2 rounded text-xs font-bold uppercase shadow"
          >
            contact us
          </NavLink>

          <NavLink
            to="#"
            className="text-color-3 px-3 py-2 rounded-md text-xs font-bold uppercase flex"
          >
            <img
              src="/image/user_icon.png"
              className="w-4 h-5 me-2 ms-3"
            />
            <span className="text-sm font-bold capitalized text-color-3">
              Sign up / Login
            </span>
          </NavLink>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/image/logo.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fa-solid fa-xmark"></i>
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 uppercase"
                >
                  Home
                </NavLink>
                <NavLink
                  to="we-sell"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 uppercase"
                >
                  we sell
                </NavLink>
                <NavLink
                  to="we-buy"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 uppercase"
                >
                  we buy
                </NavLink>
              </div>
              <div className="py-6">
                <NavLink
                  to="login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
