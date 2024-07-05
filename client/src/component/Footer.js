import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* left side footer */}
        <div className="sm:col-span-12 md:col-span-12 lg:col-span-5 bg-color-2 min-h-80 flex items-center justify-center relative">
          <div className="footer-logo">
           <p className="text-6xl" clas>React-Laravel</p>
          </div>
          <div className="hidden lg:block absolute -right-130">
            <img src="/image/footer_left_img.png" alt="" className="h-80" />
          </div>
        </div>

        {/* right side footer */}
        <div className="sm:col-span-12 md:col-span-12 lg:col-span-7 flex">
          <div className="w-full">
            <div
              className="h-full w-full bg-contain float-left flex justify-end items-bottom"
              style={{
                backgroundImage: "url('/image/footer_right_bg.png')",
              }}
            >
              <div className="footer-wrapper w-3/4 float-right mt-4 pt-4 mr-7">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="sm:col-span-12 md:col-span-6 lg:col-span-6">
                    <p className="uppercase text-white text-normal text-lg">
                      quick links
                    </p>

                    <div className="footer_links flex flex-wrap justify-between">
                      <ul className="mr-5 pr-4">
                        <li>
                          <NavLink
                            to=""
                            className="text-xs text-color-2 py-1 block capitalize"
                          >
                            buy car
                          </NavLink>
                          <NavLink
                            to=""
                            className="text-xs text-color-2 py-1 block capitalize"
                          >
                            sell car
                          </NavLink>
                          <NavLink
                            to=""
                            className="text-xs text-color-2 py-1 block capitalize"
                          >
                            about us
                          </NavLink>
                        </li>
                      </ul>

                      <ul className="pl-5 ml-4">
                        <li>
                          <NavLink
                            to=""
                            className="text-xs text-color-2 py-1 block capitalize"
                          >
                            FAQ
                          </NavLink>
                          <NavLink
                            to=""
                            className="text-xs text-color-2 py-1 block capitalize"
                          >
                            Find Dealers
                          </NavLink>
                          <NavLink
                            to=""
                            className="text-xs text-color-2 py-1 block capitalize"
                          >
                            contact us
                          </NavLink>
                        </li>
                      </ul>

                      <ul>
                        <li>
                          <NavLink
                            to=""
                            className="text-xs text-color-2 py-1 block capitalize"
                          >
                            Terms & Conditions
                          </NavLink>
                          <NavLink
                            to=""
                            className="text-xs text-color-2 py-1 block capitalize"
                          >
                            Privacy Policy
                          </NavLink>
                          <NavLink
                            to=""
                            className="text-xs text-color-2 py-1 block capitalize"
                          >
                            about us
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sm:col-span-12 md:col-span-6 lg:col-span-6">
                    <p className="uppercase text-white text-normal text-lg">
                      newsletter
                    </p>

                    <div className="mt-6 flex max-w-md gap-x-0 pb-10">
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="min-w-0 flex-auto text-xs rounded-radius-left border-0 px-3.5 py-2 sm:leading-6 shadow-footer"
                        placeholder="Your Email"
                      />
                      <button
                        type="submit"
                        className="bg-theme  px-3.5 py-2.5 text-xs font-normal text-white shadow-footer"
                      >
                        Subscribe
                      </button>
                    </div>
                    <div className="float-right">
                      <ul>
                        <li className="inline-block mx-3">
                          <NavLink to="">
                            <img
                              src="/image/facebook.png"
                              alt=""
                              className="max-h-5"
                            />
                          </NavLink>
                        </li>

                        <li className="inline-block mx-3">
                          <NavLink to="">
                            <img
                              src="/image/x_vector.png"
                              alt=""
                              className="max-h-5"
                            />
                          </NavLink>
                        </li>

                        <li className="inline-block mx-3">
                          <NavLink to="">
                            <img
                              src="/image/instagram.png"
                              alt=""
                              className="max-h-5"
                            />
                          </NavLink>
                        </li>

                        <li className="inline-block mx-3">
                          <NavLink to="">
                            <img
                              src="/image/youtube.png"
                              alt=""
                              className="max-h-5"
                            />
                          </NavLink>
                        </li>

                        <li className="inline-block ml-3">
                          <NavLink to="">
                            <img
                              src="/image/tiktok.png"
                              alt=""
                              className="max-h-5"
                            />
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="border-b-links w-full h-0.5 pt-5 mb-3"></p>

                <p className="text-xs text-color-2 font-normal mb-4">
                  React-Laravel All Rights Reserved.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
