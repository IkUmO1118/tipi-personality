import { NavLink } from "react-router-dom";

function FooterNav() {
  return (
    <div className="flex items-center gap-40 font-light text-neutral-400">
      <NavLink to="contact" className="hover:underline ">
        Contact
      </NavLink>
      <NavLink to="privacy" className="hover:underline">
        Privacy Policy
      </NavLink>
      <NavLink to="testimonials" className="hover:underline">
        Testimonials
      </NavLink>
    </div>
  );
}

export default FooterNav;
