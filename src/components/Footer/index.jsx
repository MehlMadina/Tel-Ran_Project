import React from "react";
import s from "./style.module.css";
import { InstagramOutlined, WhatsAppOutlined, FacebookOutlined, TwitterOutlined } from "@ant-design/icons";
import {  } from "@ant-design/icons";

export default function Footer() {
  return (
    <div className={s.wrapper}>
      <div className={s.footer}>
        <div className={s.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409042351496!2d13.372856015987539!3d52.50793614487535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sTel-Ran.de%20GmbH!5e0!3m2!1sru!2sde!4v1681207750569!5m2!1sru!2sde"></iframe>
        </div>
        <div className={s.address}>
          <h2>Address</h2>
          <a href="https://www.google.com/search?q=telranDE">
            <p>Linkstraße 2, 8 OG, 10785, Berlin</p>
          </a>
          <p>Working Hours:</p>
          <h3> 24 hours a day </h3>
        </div>
        <div className={s.contacts}>
          <h2>Contacts</h2>
          <p>+49 1717 788 86 64</p>
          <p className={s.email}>start@tel-ran.de</p>
          <div className={s.social_media}>
            <a href="#">
              <WhatsAppOutlined className={s.icon} />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramOutlined className={s.icon} />
            </a>
            <a href="https://www.facebook.com/">
              <FacebookOutlined className={s.icon} />
            </a>
            <a href="https://www.facebook.com/">
              <TwitterOutlined className={s.icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
