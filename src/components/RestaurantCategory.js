import { useRef, useEffect, useState } from "react";
import ItemList from "./ItemList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const title = data?.title ?? "Category";
  const itemCards = Array.isArray(data?.itemCards) ? data.itemCards : [];
  const itemCount = itemCards.length;

  useEffect(() => {
    if (showItems && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [showItems, itemCount]);

  const panelId = `cat-panel-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="w-full sm:w-8/12 md:w-6/12 mx-auto my-4 bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header (button for accessibility) */}
      <button
        type="button"
        className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-expanded={showItems}
        aria-controls={panelId}
        onClick={setShowIndex}
      >
        <span className="font-semibold text-base sm:text-lg text-gray-800">
          {title} ({itemCount})
        </span>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`transition-transform duration-300 ${
            showItems ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Collapsible Content */}
      <div
        id={panelId}
        ref={contentRef}
        style={{ maxHeight }}
        className="transition-[max-height] duration-500 ease-in-out overflow-hidden"
      >
        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
