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
        <a href="https://www.google.com/search?q=telranDE" target="_blank">
          <h2>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</h2>
        </a>
        <p>Working Hours:</p>
        <h3> 24 hours a day </h3>
      </div>
      <div className={s.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409042351496!2d13.372856015987539!3d52.50793614487535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sTel-Ran.de%20GmbH!5e0!3m2!1sru!2sde!4v1681207750569!5m2!1sru!2sde"></iframe>
      </div>
    </div>
  );
}
