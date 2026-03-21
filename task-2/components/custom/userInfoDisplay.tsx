//Imports
import { userData } from "@/types";

//Type
type userInfoProp = {
  user: userData;
};

const UserInfoDisplay = ({ user }: userInfoProp) => {
  return (
    <div className="w-full rounded-2xl backdrop-blur-md bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 p-6 hover:shadow-md hover:shadow-blue-500/5">
      {/* Header - Avatar, Name, Email */}
      <div className="flex items-start gap-6 pb-6 border-b border-gray-200">
        {/* Avatar */}
        <div
          className="w-16 h-16 rounded-xl bg-linear-to-br from-blue-400 to-blue-600 shrink-0 overflow-hidden"
          style={{
            backgroundImage: `url(${user?.avatar})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        {/* Info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{user.email}</p>
        </div>
      </div>
      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* Email */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Email
          </label>
          <p className="text-sm text-gray-700 mt-1 break-all">{user.email}</p>
        </div>
        {/* Company */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Company
          </label>
          <p className="text-sm text-gray-700 mt-1 break-all">
            {user.companyName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfoDisplay;
