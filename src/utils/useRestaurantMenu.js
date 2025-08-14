import { useEffect, useState, useContext } from "react";
import { Menu_API } from "../utils/constants";
import MockContext from "../utils/MockContext";
import mockResMenu from "../components/mocks/mockResMenu.json";

/**
 * Returns [resInfo, source]
 * - resInfo: normalized object with `.cards` (or null while loading)
 * - source: "api" | "mock" | "fallback"
 */
const useRestaurantMenu = (resId, forceMock) => {
  const [resInfo, setResInfo] = useState(null);
  const [source, setSource] = useState("api");

  const ctx = useContext(MockContext);
  const ctxMock = ctx?.useMock ?? false;
  const useMock = forceMock ?? ctxMock;

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();

    if (!resId) {
      setResInfo(null);
      return () => controller.abort();
    }

    // show shimmer while switching restaurants
    setResInfo(null);

    async function fetchData() {
      // --- MOCK PATH ---
      if (useMock) {
      //  console.warn("⚠️ Using mockResMenu.json (mock enabled)");
        const normalized = mockResMenu?.data ?? mockResMenu;
        if (!ignore) {
          setResInfo(normalized);
          setSource("mock");
        }
        return;
      }

      // --- API PATH ---
      try {
        const resp = await fetch(`${Menu_API}${resId}`, {
          signal: controller.signal,
        });
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const json = await resp.json();
        const payload = json?.data ?? json;

        if (!ignore) {
          if (payload?.cards?.length) {
            setResInfo(payload);
            setSource("api");
          } else {
            const normalized = mockResMenu?.data ?? mockResMenu;
            setResInfo(normalized);
            setSource("fallback");
          }
        }
      } catch {
        if (!ignore) {
          const normalized = mockResMenu?.data ?? mockResMenu;
          setResInfo(normalized);
          setSource("fallback");
        }
      }
    }

    fetchData();
    return () => {
      ignore = true;
      controller.abort();
    };
  }, [resId, useMock]);

  return [resInfo, source];
};

export default useRestaurantMenu;
