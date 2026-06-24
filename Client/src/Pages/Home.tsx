import { Link } from "react-router"
import { SlPlus } from "react-icons/sl";

const Home = () => {
  return (
    <header className="bg-gray-200">
    <div className="flex items-center justify-between p-2">
      <h2>ChocolateList</h2>
      <div className="bg-violet-500 p-2 rounded-2xl">
    <Link to="/createpage">
    <SlPlus/>Add New
    </Link>
    </div>
    </div>
    </header>
  )
}

export default Home