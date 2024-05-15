import { useEffect } from "react";
import "./login.css";

export default function Login() {
  useEffect(() => {
    const switchers = [...document.querySelectorAll(".switcher")];
    switchers.forEach((item) => {
      item.addEventListener("click", function () {
        switchers.forEach((item) =>
          item.parentElement.classList.remove("is-active")
        );
        this.parentElement.classList.add("is-active");
      });
    });
  }, []);

  // debugger;
  // console.log(switchers);
  // switchers.forEach((item) => {
  //   item.addEventListener("click", function () {
  //     switchers.forEach((item) =>
  //       item.parentElement.classList.remove("is-active")
  //     );
  //     this.parentElement.classList.add("is-active");
  //   });
  // });

  return (
    <>
      <section className="forms-section">
        <div className="forms">
          <div className="form-wrapper is-active">
            <button type="button" className="switcher switcher-login">
              Login
              <span className="underline"></span>ª
            </button>
            <form className="form form-login">
              <fieldset>
                {/* <legend>
                  Please, enter your email and password for login.s
                </legend> */}
                <div className="input-block">
                  <label>E-mail</label>
                  <input id="login-email" type="email" required></input>
                </div>
                <div className="input-block">
                  <label>Password</label>
                  <input id="login-password" type="password" required></input>
                </div>
              </fieldset>
              <button type="submit" className="btn">
                Login
              </button>
            </form>
          </div>
          <div className="form-wrapper">
            <button type="button" className="switcher switcher-signup">
              Sign Up
              <span className="underline"></span>
            </button>
            <form className="form form-signup">
              <fieldset>
                {/* <legend>
                  Please, enter your email, password and password confirmation
                  for sign up.
                </legend> */}
                <div className="input-block">
                  <label>E-mail</label>
                  <input id="signup-email" type="email" required></input>
                </div>
                <div className="input-block">
                  <label>Password</label>
                  <input id="signup-password" type="password" required></input>
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password-confirm">
                    Confirm password
                  </label>
                  <input
                    id="signup-password-confirm"
                    type="password"
                    required
                  ></input>
                </div>
              </fieldset>
              <button type="submit" className="btn">
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
