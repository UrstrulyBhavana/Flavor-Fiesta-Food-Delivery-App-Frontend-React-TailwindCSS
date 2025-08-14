import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = ({ resData }) => {
  // console.log(resData);
  // console.log("💥 RestaurantCard Name:", resData?.info?.name);
  const info = resData?.info ?? {};
  const {
    cloudinaryImageId = "",
    name = "Restaurant",
    cuisines = [],
    avgRating,
    sla,
    costForTwo,
  } = info;

  const cuisineText = Array.isArray(cuisines)
    ? cuisines.slice(0, 3).join(", ")
    : "";
  const eta = sla?.slaString ?? "—";
  const priceForTwo = costForTwo ?? "—";

  const ratingNum = Number(avgRating);
  const ratingColor = isNaN(ratingNum)
    ? "bg-gray-200 text-gray-700"
    : ratingNum >= 4.2
    ? "bg-green-100 text-green-800"
    : ratingNum >= 3.5
    ? "bg-yellow-100 text-yellow-800"
    : "bg-red-100 text-red-800";

  return (
    <div
      data-testid="resCard"
      className="m-2 p-4 w-[230px] h-[360px] rounded-lg bg-amber-300 hover:shadow-md transition duration-300 flex flex-col justify-between"
      title={name}
    >
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full h-40 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          loading="lazy"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between mt-3">
        <h4 className="font-bold text-lg text-center line-clamp-2">{name}</h4>

        <h5 className="text-center text-sm text-black truncate" title={cuisineText}>
          {cuisineText}
        </h5>

        <div className="flex items-center justify-center gap-2">
          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${ratingColor}`}>
            <FontAwesomeIcon icon={faStar} className="mr-1" />
            {isNaN(ratingNum) ? "—" : ratingNum.toFixed(1)}
          </span>
          <span className="text-sm text-gray-800">{eta}</span>
        </div>

        <h5 className="text-center text-sm">{priceForTwo}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
