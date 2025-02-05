import BudgetCalculator from "../component/budgetcalculator";
import ContactForm from "../component/homepage/contactus";

export async function generateMetadata() {
  return {
    title: "Budget calculator",
    description: "Get a customized flooring estimate in minutes",
  }
}

export default function budgetCalculatorPage() {
  return (

<div className="product_wrapper">
<section className="banner inner_banner">
    <picture>
        <source media="(max-width:540px)" srcset="/images/budget/banner_mob.webp" />
        <img src="/images/budget/banner.webp" alt="" width="1920" height="472" />
    </picture>
    <div className="inner_content">
        <div className="banner_sub_heading">Design your ideal floor, tailored <br />to your style and</div>
        <div className="banner_heading">Budget-Friendly Needs</div>
    </div>
</section>
			

<section className="about_product about_budget" data-section="about_product">
    <div className="products_container">
        <div className="section_container">
            <h1 className="diamond diamond_blue">BUDGET CALCULATOR</h1>
            <div className="title_container">
                <h2 className="subtitle_60">
                    Get a customized <br />
                    flooring estimate <br />
                    in minutes
                </h2>
            </div>
        </div>
        <div className="about_right_container">
            <p>
                Take the guesswork out of your flooring project with our <br />
                easy-to-use budget calculator. Simply enter your room dimensions <br />
                and preferred flooring type to receive an accurate estimate. <br />
                Whether you're renovating or building new, we'll help you stay <br />
                within budget without compromising on style or quality.
            </p>
        </div>
    </div>
    <div className="square_box square_box_24"></div>
</section>


<BudgetCalculator />
			<ContactForm />
		</div>
  );
}
