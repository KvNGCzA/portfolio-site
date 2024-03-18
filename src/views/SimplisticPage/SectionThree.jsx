import actions from "../../images/actions.svg";
import chevronRight from "../../images/chevron-right.svg";
import React from "react";

const SectionThree = ({
  handleSubmit,
  formValues,
  onChangeValue,
  sendingMessage,
}) => {
  const { body, email, fullName } = formValues;

  return (
    <div className="simplistic-message">
      <p className="simplistic-message--title">send me a message</p>
      <form onSubmit={handleSubmit} name="contact">
        <input type="hidden" name="contact" value="contact" />
        <div className="simplistic-form">
          <div className="simplistic-form--header">
            <img src={actions} alt="window actions" />
          </div>
          <div className="simplistic-form--text-area">
            <textarea
              name={"body"}
              value={body}
              placeholder="Tell me what I can do for you :)..."
              onChange={(e) => onChangeValue("body", e)}
              required
            />
          </div>
          <div className="simplistic-form--footer">
            <div className="simplistic-form--footer--form">
              <div className="input-parent">
                <input
                  value={email}
                  placeholder="enter your email"
                  type="email"
                  onChange={(e) => onChangeValue("email", e)}
                  required
                  name={"email"}
                />
                <input
                  name={"fullName"}
                  value={fullName}
                  placeholder="enter your fullName"
                  required
                  onChange={(e) => onChangeValue("fullName", e)}
                />
              </div>
              <button
                type="submit"
                className={sendingMessage ? "disabled" : ""}
                disabled={sendingMessage}
              >
                send
                <img src={chevronRight} alt="chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </form>
      <footer>
        <p style={{ fontSize: 16 }}>
          &copy; Christopher Akanmu {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default SectionThree;
