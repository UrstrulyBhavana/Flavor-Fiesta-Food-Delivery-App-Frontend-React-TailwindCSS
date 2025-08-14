// import { useEffect, useState } from "react";

// const useOnlineStatus = () => {

//     const [onlineStatus, setOnlineStatus] = useState(true);

//     useEffect(() => {
        
//         window.addEventListener("offline", () => {
//             setOnlineStatus(false);
//         });

//         window.addEventListener("online", () => {
//             setOnlineStatus(true);
//         });

//     }, []);


//     return onlineStatus;
// };

// export default useOnlineStatus;



import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  useEffect(() => {
    const goOffline = () => setOnlineStatus(false);
    const goOnline = () => setOnlineStatus(true);

    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);

    return () => {
      window.removeEventListener("offline", goOffline);
      window.removeEventListener("online", goOnline);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
