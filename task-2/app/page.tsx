/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import NavigationBar from "@/components/custom/navigationBar";
import UserProfileCard from "@/components/custom/userProfileCard";
import { Input } from "@/components/ui/input";
import { Search, Users } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "@/store/userSlice";
import { fetchUsers } from "@/actions/userAction";
import { userData } from "@/types";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState, useMemo } from "react";

export default function Home() {
  //Redux
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users.users);
  //Hook
  const { data, loading, error } = useFetch<userData[]>(fetchUsers);
  const [searchQuery, setSearchQuery] = useState("");
  //Store Into Redux
  useEffect(() => {
    if (data) {
      dispatch(setUsers(data));
    }
  }, [data, dispatch]);
  //Filter Logic
  const filteredUsers = useMemo(() => {
    if (!searchQuery.trim()) {
      return users;
    }
    const query = searchQuery.toLowerCase().trim();
    return users.filter((user: userData) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      const email = user.email.toLowerCase();

      return fullName.includes(query) || email.includes(query);
    });
  }, [users, searchQuery]);
  //Loading And Error States
  if (loading) {
    return (
      <div className="w-full min-h-screen bg-white/95 flex items-center justify-center">
        <div className="backdrop-blur-md bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-blue-200 border-t-blue-500 animate-spin"></div>
            <p className="text-gray-600 font-medium">Loading users...</p>
          </div>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full min-h-screen bg-white/95 flex items-center justify-center">
        <div className="backdrop-blur-md bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
          <p className="text-red-500 font-medium">{error}</p>
        </div>
      </div>
    );
  }
  //Component
  return (
    <div className="w-full min-h-screen bg-white/95 flex flex-col justify-start items-center">
      {/* Navigation Bar */}
      <NavigationBar home={true} title={"Users Directory"} />
      {/* Main Section */}
      <div className="w-[90%] max-w-7xl flex flex-col justify-start items-center gap-y-12 py-12 px-4">
        {/* Search Section */}
        <div className="w-full space-y-6">
          {/* Text and Icon */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-500" />
              Find Users
            </h2>
            <p className="text-gray-500 text-sm">
              Search and discover talented professionals
            </p>
          </div>
          {/* Search Bar */}
          <div className="relative group">
            <div className="relative flex items-center backdrop-blur-md bg-white border border-gray-200 hover:border-gray-300 rounded-2xl transition-all duration-300 focus-within:border-blue-400 focus-within:shadow-md px-6 py-1">
              <Input
                type="text"
                placeholder="Search by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-gray-900 placeholder:text-gray-400 border-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-full font-medium"
              />
              <div className="shrink-0 p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:cursor-pointer">
                <Search className="w-5 h-5 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
        {/* Results Header */}
        <div className="w-full flex justify-between items-center">
          {filteredUsers.length > 0 && (
            <>
              <p className="text-gray-600 text-sm">
                Showing{" "}
                <span className="text-blue-600 font-semibold">
                  {filteredUsers.length}
                </span>{" "}
                {searchQuery.trim() ? "results" : "users"}
              </p>
            </>
          )}
        </div>
        {/* Users Grid */}
        {filteredUsers.length > 0 ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user: userData) => (
              <UserProfileCard key={user.id} data={user} />
            ))}
          </div>
        ) : (
          <div className="w-full h-64 flex flex-col items-center justify-center">
            <div className="backdrop-blur-md bg-white border border-gray-200 rounded-2xl p-12 text-center shadow-sm">
              <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-700 font-medium">No users found</p>
              <p className="text-gray-500 text-sm mt-2">
                Try adjusting your search query
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
