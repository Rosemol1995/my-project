import { ClipboardList, Users, BarChart3, Settings, MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const adminOptions = [
  {
    title: "Manage Food Items",
    icon: <ClipboardList className="w-8 h-8 text-orange-500" />,
    description: "Add, edit, or remove items from your restaurant menu.",
    link: "/admin/managefooditem",
  },
  {
    title: "Manage Staff",
    icon: <Users className="w-8 h-8 text-orange-500" />,
    description: "Assign roles, add new staff, and manage schedules.",
    link: "/admin/manageStaff",
  },
  {
    title: "Reports & Analytics",
    icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
    description: "View performance reports, sales trends, and analytics.",
    link: "/admin/reports",
  },
  {
    title: "Settings",
    icon: <Settings className="w-8 h-8 text-orange-500" />,
    description: "Configure restaurant preferences and system settings.",
    link: "/admin/settings",
  },
];

const AdminMenu = () =>{
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white px-6 py-12">
      <div onClick={()=>navigate('/admin')} className="flex left-0 top-1 border w-[80px] p-2 rounded-full shadow-md hover:shadow-lg hover:translate-y-1 duration-300">
      <MoveLeft />
      </div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-600 mb-10 text-center">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {adminOptions.map((option, index) => (
            <a
              key={index}
              href={option.link}
              className="group bg-white rounded-3xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-4 mx-auto">
                {option.icon}
              </div>
              <h2 className="text-lg font-semibold text-center text-orange-600 mb-2">
                {option.title}
              </h2>
              <p className="text-sm text-gray-600 text-center">
                {option.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminMenu
