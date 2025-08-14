import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const Badge = ({ source }) => (
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
);

const RestaurantMenu = () => {
  const { resId } = useParams();
  const location = useLocation();

  // keep mock on page change via state or ?mock=1
  const qsMock = new URLSearchParams(location.search).get("mock") === "1";
  const stateMock = location.state?.useMock === true;
  const forceMock = stateMock || qsMock;

  const [resInfo, source] = useRestaurantMenu(resId, forceMock);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  // restaurant header info
  const restaurantInfoCard = resInfo.cards?.find((c) => c?.card?.card?.info);
  const info = restaurantInfoCard?.card?.card?.info || {};
  const { name = "Restaurant", cuisines = [], costForTwoMessage = "" } = info;

  // menu cards
  const regularCards =
    resInfo.cards?.find((c) => c?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // show header + badge even if menu missing
  if (!regularCards || regularCards.length === 0) {
    return (
      <div className="px-3 sm:px-4">
        <div className="max-w-7xl mx-auto mt-8 flex items-center justify-between">
          <h1 className="font-bold text-2xl">{name}</h1>
          <Badge source={source} />
        </div>
        <div className="text-center mt-6 text-red-500 font-semibold text-lg">
          ⚠️ Menu not available for this restaurant. Try another or enable mock mode.
        </div>
      </div>
    );
  }

  // item categories only
  const categories =
    regularCards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  // if categories list ended up empty (rare shape), show a gentle note
  if (categories.length === 0) {
    return (
      <div className="px-3 sm:px-4">
        <div className="max-w-7xl mx-auto mt-8 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-2xl">{name}</h1>
            <p className="font-bold text-lg">
              {cuisines.length ? cuisines.join(", ") + " — " : ""}
              {costForTwoMessage}
            </p>
          </div>
          <Badge source={source} />
        </div>
        <div className="text-center mt-6 text-amber-700 font-semibold">
          Menu is currently unavailable for this restaurant.
        </div>
      </div>
    );
  }

  return (
    <div className="px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mt-6">
          <div>
            <h1 className="font-bold text-2xl">{name}</h1>
            <p className="font-bold text-lg">
              {cuisines.length ? cuisines.join(", ") + " — " : ""}
              {costForTwoMessage}
            </p>
          </div>
          <Badge source={source} />
        </div>

        {categories.map((category, index) => (
          <RestaurantCategory
            key={(category?.card?.card?.title || "category") + "-" + index}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
