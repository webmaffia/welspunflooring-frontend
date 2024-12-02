import ContactForm from "../component/homepage/contactus";
export async function generateMetadata() {
  return {
    title: "Terms & Conditions",
    description: "Check Welspun Flooring Terms &amp; Conditions.",
  }
}

export default function termsAndConditionPage() {
  return (

    <div className="product_wrapper">
  <section className="banner inner_banner">
    <picture>
        <source media="(max-width:540px)" srcset="/images/product/click_n_lock/banner_mob.webp" />
        <img src="/images/product/click_n_lock/banner.webp" alt="" width="1920" height="472" />
    </picture>
    <div className="inner_content">
        <h1 className="banner_heading">Terms & Condition</h1>
    </div>
</section>
<section className="terms_privacy_container">
    <div className="main_container">
        <ul className="alpha_terms_list">
            <li>The starting price of ₹27,999/- mentioned is considering a 100 square feet installation area with our “Bliss Collection” flooring.</li>
            <li>Any space bigger than 100 sft, overall will have higher product cost than &#x20b9;27,999/-</li>
            <li>The flooring cost will vary depending on the site area & product chosen.</li>
            <li>We additionally charge for Installation, accessories & transportation of the product which will be communicated to the customer post their site visits by Welspun team.</li>
            <li>18% GST will be charged extra.</li>
            <li>We accept payment through online only, “NO CASH TRANSACTION”.</li>
        </ul>
    </div>
</section>
   <ContactForm />
</div>
  );
}
