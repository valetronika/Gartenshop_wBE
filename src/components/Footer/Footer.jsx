import React from "react";
import s from "./Footer.module.scss";
import {ReactComponent as Instagram} from "../../assets/instagram.svg"
import {ReactComponent as WhatsAppIcon} from "../../assets/whatsApp.svg"
export default function Footer() {
    return (
        <div className={s.contacts}>
            <div className={s.contacts__info}>
                <div className={s.contacts__phone}>
                    <h4>Contact</h4>
                    <h2>+49 999 999 99 99</h2>
                    <div className={s.contacts__links}>
                        <div>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                {/* <img src={instagram} alt="instagram" className={s.contacts__icon}/> */}
                                <Instagram className={s.contacts__icon}/>
                                <p>instagram</p>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                                {/* <img src={whatsApp} alt="WhatsApp" className={s.contacts__icon}/> */}
                                <WhatsAppIcon className={s.contacts__icon}/>
                                <p>WhatsApp</p>
                            </a>
                        </div>
                    </div>
          
                </div>
                <div className={s.contacts__address}>
                    <h4>Address</h4>
                    <div className={s.contacts__address_link}>
                        <a href="https://www.google.com/search?q=telranDE"  target="_blank" rel="noopener noreferrer">
                            Linkstraße 2, 8 OG, 10785,
                        </a>
                        <a href="https://www.google.com/search?q=telranDE"  target="_blank" rel="noopener noreferrer">
                            Berlin, Deutschland
                        </a>
                    </div>
                    <p>Working Hours:</p>
                    <h5>24 hours a day</h5>
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4092231792297!2d13.372469776680424!3d52.507932872058106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d00f714303%3A0xb7b4fcea44396e2d!2sAIT%20TR%20GmbH!5e0!3m2!1suk!2sde!4v1696090338208!5m2!1suk!2sde"
                width="100%"
                height="525"
                style={{ border: 0 }}
                allowFullScreen =""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
