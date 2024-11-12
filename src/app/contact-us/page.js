import ContactForm from "../component/homepage/contactus";



export default function contactUsPage() {
  return (
	<div class="contact_wrapper">
			<section class="banner inner_banner">
    <picture>
        <source media="(max-width:540px)" srcset="/images/product/click_n_lock/banner_mob.webp" />
        <img src="/images/product/click_n_lock/banner.webp" alt="" width="1920" height="472" />
    </picture>
    <div class="inner_content">
        <h1 class="banner_heading">Contact Us</h1>
    </div>
</section>
<section class="contact_section">
    <h2 class="diamond diamond_blue">CONTACT US</h2>
    <div class="footer_container">
        <div class="">
            <address>
                Corporate Office and Plant <br />
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
        <div class="">
            <div class="contact_link">
                <span>Call Us</span>
                <a href="tel:+18001201161">1800-120-1161</a>
            </div>
            <div class="contact_link">
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
