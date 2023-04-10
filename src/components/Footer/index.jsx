import React from "react";
import s from "./style.module.css";
import { InstagramOutlined } from "@ant-design/icons";
import { WhatsAppOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.contacts}>
        <h1>Contacts</h1>
        <p>+49 999 999 99 99</p>
        <div className={s.social_media}>
          <a href="#">
            <WhatsAppOutlined className={s.icon} />
            WhatsApp
          </a>
          <a href="https://www.instagram.com/">
            <InstagramOutlined className={s.icon} />
            instagram
          </a>
        </div>
      </div>
      <div className={s.address}>
        <h1>Address</h1>
        <h2>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</h2>
        <p>Working Hours:</p>
        <h3> 24 hours a day </h3>
      </div>
    </div>
  );
}
