import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchHome } from "../Redux/Slice/homeSlice";

const Home = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const HomeData = state.user.data;

  console.log("state", HomeData);

  useEffect(() => {
    dispatch(fetchHome());
  }, []);

  return (
    <div className="mx-auto max-w-7xl">
      <div className=" my-5 text-center">
        <p className="text-2xl bg-blue-400 inline font-bold text-blue-900 py-4 px-8">
          User List
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-5">
        {HomeData?.map((data, index) => (
          <div className="sm:col-span-12 md:col-span-4 max-w-sm rounded overflow-hidden shadow-lg mb-5 bg-blue-100">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{data.name}</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
