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
      <div className="w-full min-h-screen bg-linear-to-b from-black via-neutral-950 to-black flex items-center justify-center">
        <div className="backdrop-blur-md bg-white/8 border border-white/15 rounded-2xl p-8">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-green-500/20 border-t-green-500 animate-spin"></div>
            <p className="text-white/70 font-medium">Loading users...</p>
          </div>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full min-h-screen bg-linear-to-b from-black via-neutral-950 to-black flex items-center justify-center">
        <div className="backdrop-blur-md bg-white/8 border border-white/15 rounded-2xl p-8">
          <p className="text-red-400 font-medium">{error}</p>
        </div>
      </div>
    );
  }
  //Component
  return (
    <div className="w-full min-h-screen bg-linear-to-b from-black via-neutral-950 to-black flex flex-col justify-start items-center">
      {/* Navigation Bar */}
      <NavigationBar home={true} title={"Users Directory"} />
      {/* Main Section */}
      <div className="w-[90%] max-w-7xl flex flex-col justify-start items-center gap-y-12 py-12 px-4">
        {/* Search Section */}
        <div className="w-full space-y-6">
          {/* Text and Icon */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Users className="w-6 h-6 text-green-400" />
              Find Users
            </h2>
            <p className="text-white/50 text-sm">
              Search and discover talented professionals
            </p>
          </div>
          {/* Search Bar */}
          <div className="relative group">
            <div className="relative flex items-center backdrop-blur-md bg-white/8 border border-white/15 hover:border-white/30 rounded-2xl transition-all duration-300 focus-within:border-green-400/50 focus-within:bg-white/12 px-6 py-1">
              <Input
                type="text"
                placeholder="Search by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-white placeholder:text-white/40 border-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-full"
              />
              <div className="shrink-0 p-2 rounded-lg bg-linear-to-br from-green-500/30 to-emerald-500/30 hover:from-green-500/50 hover:to-emerald-500/50 transition-all duration-300 hover:cursor-pointer">
                <Search className="w-5 h-5 text-green-300" />
              </div>
            </div>
          </div>
        </div>
        {/* Results Header */}
        <div className="w-full flex justify-between items-center">
          {filteredUsers.length > 0 && (
            <>
              <p className="text-white/70 text-sm">
                Showing{" "}
                <span className="text-green-400 font-semibold">
                  {filteredUsers.length}
                </span>{" "}
                {searchQuery.trim() ? "results found" : "users"}
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
            <div className="backdrop-blur-md bg-white/8 border border-white/15 rounded-2xl p-12 text-center">
              <Users className="w-12 h-12 text-green-600/80 mx-auto mb-4" />
              <p className="text-white font-medium">No users found</p>
              <p className="text-muted-foreground text-sm mt-2">
                Try adjusting your search query
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
