import React from "react";
import s from "./style.module.css";
import FormItem from "../FormItem";
import { CloseOutlined } from "@ant-design/icons";
import { Routes, Route, Link } from "react-router-dom";

export default function FormModal() {
  return (
    <div className={s.modal_container}>
      <div className={s.modal_content}>
        <Link to="/">
          <CloseOutlined className={s.crossIcon} />
        </Link>

        <Routes>
          <Route
            path="/registration_form"
            element={
              <FormItem
                title={"Registration"}
                button={{ submit: "Registration", redirect: "Login" }}
                info_text={
                  "By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters."
                }
                form_type={"registration"}
                redirect_btn_link={"/account/login_form"}
              />
            }
          />

          <Route
            path="/login_form"
            element={
              <FormItem
                title={"Login"}
                button={{ submit: "Login", redirect: "Registration" }}
                info_text={"Reset password."}
                form_type={"login"}
                redirect_btn_link={"/account/registration_form"}
              />
            }
          />

          <Route
            path="/reset_password_form"
            element={
              <FormItem
                title={"Reset password"}
                button={{ submit: "Send" }}
                info_text={"The temporary password is valid for 24 hours."}
                form_type={"reset_password"}
                info_text_add={
                  "To receive a temporary password, you must enter the email address you provided during registration."
                }
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}
