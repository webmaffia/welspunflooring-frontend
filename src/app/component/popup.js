"use client"
import { useState } from 'react';
import Image from 'next/image';
import ContactForm from './homepage/contactus';
import Link from 'next/link';

export default function PopupComponent() {
    const [isPopupActive, setIsPopupActive] = useState(false);

    const handleChatClick = (e) => {
        e.preventDefault();
        setIsPopupActive(true);
        document.body.classList.add('hideHeader', 'overflow');
    };

    const handleCloseClick = (e) => {
        e.preventDefault();
        setIsPopupActive(false);
        document.body.classList.remove('hideHeader', 'overflow');
    };

    return (
        <div>
            {/* Sticky icons for Chat and Catalogue */}
            <div className="sticky_icons">
                
                <Link href="/product" className="sticky_catalogue">VIEW CATALOGUE</Link>
                <a href="#" className="sticky_chat" onClick={handleChatClick}>
                    <Image
                        src="/images/icons/chat.webp"
                        alt="Chat"
                        width={78}
                        height={68}
                    />
                </a>
            </div>

            {/* Popup Form */}
            {isPopupActive && (
                <div className={`form_popup ${isPopupActive ? 'active' : ''}`}>
                   <div className='contact_popup'>
                   <ContactForm />
                    <a href="#" className="close_popup" onClick={handleCloseClick}>
                        <Image
                            src="/images/icons/close_button.webp"
                            alt="Close Popup"
                            width={64}
                            height={64}
                        />
                    </a>
                   </div>
                </div>
            )}

    
        </div>
    );
}
