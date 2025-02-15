import React from 'react';
import './Footer.css';
import FooterLink from './FooterLink';
import { WhatsappIcon, InstagramIcon, FacebookIcon, PhoneIcon } from '../Icons/Icons';

function Footer() {
  return (
    <div className="footer">
      <FooterLink
        href="https://wa.me/1169772073"
        icon={WhatsappIcon}
        label="Contacto por WhatsApp"
      />
      <FooterLink
        href="https://www.instagram.com/verdulerialea"
        icon={InstagramIcon}
        label="Seguinos en Instagram"
      />
      <FooterLink
        href="https://www.facebook.com/verdulerialea"
        icon={FacebookIcon}
        label="Seguinos en Facebook"
      />
      <FooterLink
        href="tel:+541145439376"
        icon={PhoneIcon}
        label="Llámanos"
      />
    </div>
  );
}

export default Footer;