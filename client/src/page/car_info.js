import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchWeSell } from "../Redux/Slice/weSellSlice";

function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const car_data = state?.weSell?.data?.data?.data;

  useEffect(() => {
    dispatch(fetchWeSell());
  }, []);

  return (
    <div>
      <div className="">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex">
            <nav className="p-4">
              <ol className="list-reset flex text-gray-700">
                <li>
                  <a href="#" className="text-theme text-xs hover:underline">
                    Home
                  </a>
                </li>
                <li className="mx-2">
                  <i className="text-xs text-color-1 fa-solid fa-angle-right"></i>
                </li>
                <li>
                  <a href="#" className="text-color-1 text-xs hover:underline">
                    We Sell
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* LEFT SIDE */}
          <div className="sm:col-span-12 md:col-span-3">
            <div className="bg-black pb-3 rounded">
              <div className="p-2 bg-theme text-white font-medium text-xs px-4 py-4">
                <span className="items-center leading-none font-semibold">
                  Search Filter
                </span>
              </div>
              <div className="px-3 search_input relative">
                <input
                  className="rounded w-full mt-1 h-10 px-3 text-sm pl-9 bg-light-dark placeholder-gray"
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Search..."
                />
                <div className="absolute search_icon left-23 top-10 z-10">
                  <i className="text-color-4 fa-solid fa-magnifying-glass text-xs"></i>
                </div>
              </div>
              <div className="filter_menu px-4">
                <ul className="list-none px-2">
                  <li className="mb-2 text-color-2 text-xs cursor-pointer">
                    <p className="py-3 border-b-filter">
                      <span>Brand</span>
                      <span className="text-color-2 text-xs float-end">
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </p>
                  </li>
                  <li className="mb-2 text-color-2 text-xs cursor-pointer">
                    <p className="py-3 border-b-filter">
                      <span>Body Type</span>
                      <span className="text-color-2 text-xs float-end">
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </p>
                  </li>

                  <li className="mb-2 text-color-2 text-xs cursor-pointer">
                    <p className="py-3 border-b-filter">
                      <span>Price</span>
                      <span className="text-color-2 text-xs float-end">
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </p>
                  </li>

                  <li className="mb-2 text-color-2 text-xs cursor-pointer">
                    <p className="py-3 border-b-filter">
                      <span>Mileage</span>
                      <span className="text-color-2 text-xs float-end">
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </p>
                  </li>

                  <li className="mb-2 text-color-2 text-xs cursor-pointer">
                    <p className="py-3 border-b-filter">
                      <span>Year</span>
                      <span className="text-color-2 text-xs float-end">
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </p>
                  </li>

                  <li className="mb-2 text-color-2 text-xs cursor-pointer">
                    <p className="py-3 border-b-filter">
                      <span>Transmission</span>
                      <span className="text-color-2 text-xs float-end">
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </p>
                  </li>

                  <li className="mb-2 text-color-2 text-xs cursor-pointer">
                    <p className="py-3 border-b-filter">
                      <span>City</span>
                      <span className="text-color-2 text-xs float-end">
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="px-3 mt-4">
                <button className="text-xs flex">
                  <span className="text-xs font-medium text-color-2 uppercase">
                    reset search
                  </span>
                  <img
                    src="/image/reset_icon.png"
                    alt=""
                    className="w-4 ms-2"
                  />
                </button>
              </div>
            </div>
          </div>
          {/* LEFT SIDE */}

          {/* RIGHT SIDE */}
          <div className="sm:col-span-12 md:col-span-9">
            <div className="grid grid-cols md:grid-cols-12 gap-4">
              {/* INNER LEFT SIDE */}
              <div className="sm:col-span-12 md:col-span-9">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {car_data?.map((car, index) => (
                    <div className="" key={index}>
                      <div
                        className="max-w-md w-full bg-white shadow-lg rounded-none overflow-hidden"
                        key={index}
                      >
                        {/* card image section */}
                        <div className="relative">
                          <img
                            className="w-full h-52 object-cover object-center"
                            src={car.image}
                            alt="Card image"
                          />
                          {/* Heart icon */}
                          <div
                            className="wishlist-icon text-28 text-white absolute z-10 top-7 right-7"
                            type="button"
                          >
                            <i className="fa-regular fa-heart wishlist-icon-heart text-white text-md"></i>
                          </div>

                          {/* Total View */}
                          <div className="absolute bg-black rounded-3xl px-2 py-1 flex items-center bottom-8 left-15">
                            <img
                              src="/image/camera.png"
                              className="w-3.5"
                              alt="..."
                            />
                            <span className="text-xs text-white font-bold ps-2">
                              8
                            </span>
                          </div>
                        </div>

                        <div className="m-4 mb-0 w-4/5 border-b">
                          <h2 className="text-sm font-semibold text-color-3 h-10 overflow-hidden line-clamp-2">
                            {car.model_desc} km
                          </h2>
                          <p className="mt-2 text-color-1 text-sm mb-2">
                            RM446.98/mth
                          </p>
                        </div>

                        <div className="p-4 pt-2 pt-0 flex justify-between items-end">
                          <div>
                            <p className="text-color-1 text-xs flex items-center">
                              <span className="w-4 inline-block text-center mr-1">
                                <img
                                  src="/image/meter.png"
                                  className="w-4 mx-auto"
                                  alt="..."
                                />
                              </span>
                              <span>{car.mileage}</span>
                            </p>

                            <p className="mt-2 text-color-1 text-xs flex items-center">
                              <span className="w-4 inline-block text-center mr-1">
                                <img
                                  src="/image/type.png"
                                  className="w-mw-10 w-4 mx-auto"
                                  alt="..."
                                />
                              </span>
                              <span>{car.transmission}</span>
                            </p>

                            <p className="mt-2 text-color-1 text-xs flex items-center">
                              <span className="w-4 inline-block text-center mr-1">
                                <img
                                  src="/image/place.png"
                                  className="w-mw-10 w-4 mx-auto"
                                  alt="..."
                                />
                              </span>
                              <span>{car.city}</span>
                            </p>
                          </div>

                          <div>
                            <p className="text-xl font-bold text-theme text-right">
                              RM{car.tm_selling_price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* INNER LEFT SIDE */}

              {/* INNER RIGHT SIDE */}
              <div className="sm:col-span-12 md:col-span-3">
                <div
                  className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden h-80 bg-cover"
                  style={{
                    backgroundImage: "url('/image/ads1.png')",
                  }}
                >
                  <div className="px-6 py-4 mt-10">
                    <p className="text-white text-lg font-bold text-base uppercase">
                      local
                    </p>
                    <p className="text-white text-lg font-bold text-base uppercase mb-0">
                      drive
                    </p>
                  </div>
                  <div className="px-6 pb-2">
                    <button className="theme-btn box-shadow-theme py-2.5 px-8 rounded bg-theme hover:bg-theme-hover text-white font-semibold text-sm">
                      View Now
                    </button>
                  </div>
                </div>

                <div
                  className="mt-5 h-32 p-5 bg-cover"
                  style={{
                    backgroundImage: "url('image/budget_link_bg.png')",
                  }}
                >
                  <a
                    href="#"
                    className="text-22 underline font-bold text-white uppercase"
                  >
                    estimate your budget
                  </a>
                </div>
              </div>
            </div>
            {/* INNER RIGHT SIDE */}
          </div>
          {/* RIGHT SIDE */}
        </div>
      </div>
    </div>
  );
}

export default App;
