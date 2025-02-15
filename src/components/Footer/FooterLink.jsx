import React from 'react';
import './FooterLink.css'
function FooterLink({ href, icon: Icon, label }) {
  return (
    <a className="footerLink" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <div className="footerIcon">
        <Icon/>
      </div>
    </a>
  );
}

export default FooterLink;