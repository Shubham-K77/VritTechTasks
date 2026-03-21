/* eslint-disable @typescript-eslint/no-explicit-any */
//Imports
import { userData } from "@/types";
//Function
const fetchUsers = async () => {
  const res = await fetch(`${process.env.API_URL}/users/?limit=10`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return {
      success: false,
      message: "Unable to retrieve user's info!",
      data: null,
    };
  }
  const data = await res.json();
  const users: userData[] = data.users.map((user: any) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    companyName: user.company.name,
    avatar: user.image,
  }));
  return {
    success: true,
    message: "Successfully retrieved!",
    data: users,
  };
};
//Export
export { fetchUsers };
