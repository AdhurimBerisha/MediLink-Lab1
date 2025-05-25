import { createContext } from "react";

export const AdminAppContext = createContext();

const AdminAppContextProvider = ({ children }) => {
  const currency = "€";

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    return age;
  };

  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slotDateFormat = (slotDate) => {
    if (!slotDate || typeof slotDate !== "string") return "-";
    const dateArray = slotDate.split("_");
    if (dateArray.length !== 3) return slotDate;
    const day = dateArray[0];
    const monthIdx = Number(dateArray[1]);
    const year = dateArray[2];
    return `${day} ${months[monthIdx]} ${year}`;
  };

  const formatSlotTime = (slotTime) => {
    if (!slotTime || typeof slotTime !== "string") return "-";
    const [hours, minutes] = slotTime.split(":");
    let h = parseInt(hours);
    const ampm = h >= 12 ? "PM" : "AM";
    let displayHour = h % 12;
    if (displayHour === 0) displayHour = 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const value = {
    calculateAge,
    slotDateFormat,
    currency,
    formatSlotTime,
  };

  return (
    <AdminAppContext.Provider value={value}>
      {children}
    </AdminAppContext.Provider>
  );
};

export default AdminAppContextProvider;
