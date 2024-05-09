import { FaUsers } from "react-icons/fa"
import { MdDashboard } from "react-icons/md"

export const SideBar = () => {

  const menuItems = [
    {
      name: "Dashboard",
      link: "/",
      icon: <MdDashboard/>
    },
    {
      name: "Socios",
      link: "/members",
      icon: <FaUsers />
    },
  ]

  return (
    <div className="relative hidden h-screen shadow-lg lg:block w-80">
      <div className="h-full bg-white dark:bg-gray-700">
        <div className="flex items-center justify-start pt-6 ml-8">
          <p className="text-xl font-bold dark:text-white">Plannifer</p>
        </div>
        <nav className="mt-6">
          <div>
            {menuItems.map(item => (
            <a
              key={item.link}
              className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 border-l-4 border-purple-500 dark:text-white"
              href={item.link}
            >
              <span className="text-left">
                {item.icon}
              </span>
              <span className="mx-2 text-sm font-normal">{item.name}</span>
            </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
