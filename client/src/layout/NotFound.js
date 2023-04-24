import { NavLink } from "react-router-dom";
import notfoundimg from "../image/notfound/page.png";
export default function NotFound() {
  return (
    <div className=" text-center py-5">
      <h2>Page not found!</h2>
      <p>
        Go to the <NavLink to="/">Homepage</NavLink>.
      </p>
      <img src={notfoundimg} className="w-100" alt="" />
    </div>
  );
}
