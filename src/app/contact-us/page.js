import ContactForm from "../component/homepage/contactus";



export default function contactUsPage() {
  return (
	<div className="contact_wrapper">
			<section className="banner inner_banner">
    <picture>
        <source media="(max-width:540px)" srcset="/images/product/click_n_lock/banner_mob.webp" />
        <img src="/images/product/click_n_lock/banner.webp" alt="" width="1920" height="472" />
    </picture>
    <div className="inner_content">
        <h1 className="banner_heading">Contact Us</h1>
    </div>
</section>
<section className="contact_section">
    <p className="para">
        We’re here to help you with any residential or commercial flooring-related query. Get in touch with us today to know more about Welspun Flooring solutions, and how your space can look and feel different with our quality products. To get a sample of one of our products or an understanding of the budget, drop us an email today! Our experts will assist you with flooring solutions that suit your requirements the best.
    </p>
    <h2 className="diamond diamond_blue">CONTACT US</h2>
    <div className="footer_container">
        <div className="">
            <address>
                Corporate Office <br />
                <span>
                    Welspun House <br />
                    6th Floor, Kamala Mills Compound, <br />
                    Senapati Bapat Marg, Lower Parel, <br />
                    Mumbai 400 013, India<br />
                    +91 22 66136000 / 24908000
                </span>
            </address>
            <address>
                Manufacturing Plant <br />
                <span>
                    Survey No - 190, Village - Chandanvelly, <br />
                    Mandal - Shabad,Chandanvelly, Ranga Reddy, <br />
                    Telangana, 501503
                </span>
            </address>
            <address>
                USA Office <br />
                <span>
                    Suite No. 1118-1120, 295 Textile Building, <br />
                    5th Avenue,New York 10016, U.S.A.
                </span>
            </address>
        </div>
        <div className="">
            <div className="contact_link">
                <span>Call Us</span>
                <a href="tel:+18001201161">1800-120-1161</a>
            </div>
            <div className="contact_link">
                <span>Email Us</span>
                <a href="mailto:contact_flooring@welspun.com">contact_flooring@welspun.com</a>
            </div>
        </div>
    </div>
</section>
<ContactForm />
		</div>

  );
}
