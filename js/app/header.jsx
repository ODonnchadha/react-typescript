"use client";
import { useTheme } from "@/app/theme-context";

export default function Header() {
  const { toggleTheme } = useTheme();
  return (
    <div className="hero py-4">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 logo justify-content-center justify-content-lg-start">
            <div>
              <img src="/images/SVCClogo.png" alt="SVCC Logo" />
            </div>
            <h2>
              <a
                href="https://www.siliconvalley-codecamp.com/Event/2019"
                target="_blank"
              >
                Silicon Valley Code Camp
              </a>
            </h2>
          </div>
          <div className="col-lg-4 date-meta text-center text-lg-start mt-3 mt-lg-0">
            <h5 className="text-uppercase">By and For Developers</h5>
            <h6 className="text-uppercase">San Jose, California</h6>
          </div>
          <div className="col-lg-2 date-meta text-center text-lg-end mt-3 mt-lg-0">
            <input
              type="checkbox"
              className="themeToggleCheckbox"
              autoComplete="off"
              id="themeToggle"
              onChange={toggleTheme}
            />
            <label className="themeToggleCheckbox-label" htmlFor="themeToggle">
              <i className="fa fa-moon"></i>
              <i className="fa fa-sun"></i>
              <span className="ball"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
