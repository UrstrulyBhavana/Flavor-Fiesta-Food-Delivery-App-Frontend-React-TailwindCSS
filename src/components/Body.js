import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import mockResListData from "./mocks/mockResListData.json";
import { LIST_API } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [useMock, setUseMock] = useState(false); // toggle
  const [topRatedOn, setTopRatedOn] = useState(false);
  const [source, setSource] = useState("api"); // "api" | "mock" | "fallback"

  const onlineStatus = useOnlineStatus();

  const extractRestaurants = (data) =>
    data?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();

    async function fetchDataSafe() {
      try {
        if (useMock) {
          const mockRestaurants = extractRestaurants(mockResListData);
          if (!ignore) {
            setListOfRestaurant(mockRestaurants);
            setFilteredRestaurant(mockRestaurants);
            setSource("mock");
          }
          return;
        }

        const resp = await fetch(LIST_API, { signal: controller.signal });
        if (ignore) return;
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);

        const json = await resp.json();
        if (ignore) return;

        const restaurants = extractRestaurants(json);
        if (ignore) return;

        if (restaurants.length) {
          setListOfRestaurant(restaurants);
          setFilteredRestaurant(restaurants);
          setSource("api");
        } else {
          const fallback = extractRestaurants(mockResListData);
          setListOfRestaurant(fallback);
          setFilteredRestaurant(fallback);
          setSource("fallback");
          console.warn("API empty — using mock fallback");
        }
      } catch (err) {
        if (ignore) return;
        const fallback = extractRestaurants(mockResListData);
        setListOfRestaurant(fallback);
        setFilteredRestaurant(fallback);
        setSource("fallback");
        console.warn("API failed — using mock fallback once:", err?.message || err);
      }
    }

    fetchDataSafe();
    setTopRatedOn(false);

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [useMock]);

  if (onlineStatus === false) {
    return <h1>You're Offline !! Please check your Internet Connection</h1>;
  }

  if (!Array.isArray(filteredRestaurant)) return <Shimmer />;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-4 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        {/* Toggle + source badge */}
        <div className="flex justify-between items-center mb-4">
          <label className="text-sm flex items-center gap-2 select-none">
            <input
              type="checkbox"
              aria-label="Use mock data"
              checked={useMock}
              onChange={() => setUseMock((v) => !v)}
            />
            Use Mock Data
          </label>

          <span
            className={
              "px-3 py-1 text-xs font-semibold rounded-full shadow-sm " +
              (source === "api"
                ? "bg-blue-100 text-blue-800"
                : source === "mock"
                ? "bg-emerald-100 text-emerald-800"
                : "bg-amber-100 text-amber-800")
            }
          >
            {source === "api" && "🌐 API mode"}
            {source === "mock" && "📦 Mock mode"}
            {source === "fallback" && "🛟 Auto fallback (mock)"}
          </span>
        </div>

        {/* Search + Filters */}
        <div className="filter w-full flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-6">
          <input
            type="text"
            data-testid="searchInput"
            className="w-full md:w-72 h-10 rounded-full border border-slate-300 px-4 text-sm font-medium
                       placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400
                       focus:border-transparent"
            value={searchText}
            placeholder="Search Restaurants"
            onChange={(e) => {
              const text = e.target.value;
              setSearchText(text);
              if (text.trim() === "") {
                setFilteredRestaurant(listOfRestaurants);
                setTopRatedOn(false);
              }
            }}
          />

          <div className="w-full md:w-auto grid grid-cols-2 gap-2 md:flex md:gap-3">
            <button
              className="h-11 md:h-10 md:px-5 tracking-widest rounded-full bg-emerald-500 text-white font-semibold text-base md:text-sm shadow
                         hover:bg-emerald-600 active:scale-[.98] transition"
              onClick={() => {
                const filtered = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filtered);
                setTopRatedOn(false);
                setSearchText("");
              }}
            >
              Search
            </button>

            <button
              className={`h-11 md:h-10 md:px-5 -tracking-tight md:tracking-normal rounded-full text-white font-semibold text-base md:text-sm shadow active:scale-[.98] transition ${
                topRatedOn
                  ? "bg-amber-600 hover:bg-amber-700"
                  : "bg-amber-500 hover:bg-amber-600"
              }`}
              onClick={() => {
                setTopRatedOn((on) => {
                  const next = !on;
                  setFilteredRestaurant(
                    next
                      ? listOfRestaurants.filter(
                          (res) => Number(res?.info?.avgRating) >= 4.4
                        )
                      : listOfRestaurants
                  );
                  return next;
                });
              }}
            >
              {topRatedOn ? "Top Rated (ON)" : "Top Rated Restaurants"}
            </button>
          </div>
        </div>

        <div
          className="res-container grid justify-items-center gap-4 sm:gap-5 xl:gap-6
                     grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}${useMock ? "?mock=1" : ""}`}
              state={{ useMock }}
              className="block"
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
