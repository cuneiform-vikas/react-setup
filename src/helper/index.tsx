import { uid } from "@/types";

export const getDeviceId = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const newDate = new Date(`${year}-${month}-${day}`);
  let uid: uid = newDate.getTime();
  uid += navigator.mediaDevices?.enumerateDevices?.length;
  uid += navigator.userAgent.replace(/\D+/g, "");
  uid += window.screen.height || "";
  uid += window.screen.width || "";
  uid += window.screen.pixelDepth || "";

  return uid;
};
