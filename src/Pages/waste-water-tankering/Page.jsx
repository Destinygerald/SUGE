import { WhoWeAreCard } from "./component/who-we-are-card";
import "./style.css";
import "./style.mobile.css";
import img1 from "/images/waste-water-tankering/Frame 1618868390.webp";
import img2 from "/images/waste-water-tankering/Frame 1618868532.webp";
import img3 from "/images/waste-water-tankering/Frame 1618868296.webp";
import WhoWeAreCardImg1 from "/images/waste-water-tankering/Frame 1618868539.webp";
import WhoWeAreCardImg2 from "/images/waste-water-tankering/Frame 1618868540-1.webp";
import WhoWeAreCardImg3 from "/images/waste-water-tankering/Frame 1618868540.webp";
import reviewImg from "/images/waste-water-tankering/Group 5.webp";
import lightning from "/images/waste-water-tankering/Lighting.webp";
import lightning_1 from "/images/waste-water-tankering/Lighting (1).webp";
import { FAQCard } from "./component/FAQ-card";

const WhoWeAreData = [
  {
    image: WhoWeAreCardImg1,
    title: "Food manufacturers producing ",
    description: ">10 tonnes/day.",
  },
  {
    image: WhoWeAreCardImg3,
    title: "FAD plants ",
    description: "needing steady feedstock supply.",
  },
  {
    image: WhoWeAreCardImg2,
    title: "Waste brokers",
    description: "looking for specialist subcontractors.",
  },
];

const Challanges = [
  {
    title: "Storage",
    content: "tanks and skips filling faster than collection.",
  },
  {
    title: "Compliance",
    content: "strict EA rules on handling, transport & traceability.",
  },
  {
    title: "Costs",
    content: "rejected loads or disposal delays eating into margins.",
  },
  {
    title: "Reputation",
    content: "poor waste handling undermines sustainability targets.",
  },
];

const Solution = [
  {
    title: "Specialist Equipment",
    content: "Tankers and trailers built for liquid & solid food waste.",
  },
  {
    title: "Expert Handling",
    content: "Experience with pigmented, smelly, or ‘awkward’ loads.",
  },
  {
    title: "Circular Economy Partner",
    content: "We move waste into AD plants, turning it into renewable energy.",
  },
  {
    title: "Reliability",
    content: "On-time collections, every time. No excuses",
  },
];

const FAQ = [
  {
    title: "Do you handle liquids and solids?",
    content: "Yes - that’s our speciality.",
  },
  {
    title: "What volumes can you manage?",
    content:
      "From single loads to recurring daily collections up to 30,000 litres.",
  },
  {
    title: "Is my waste compliant for AD plants?",
    content: "We’ll review your streams and match them to suitable end sites.",
  },
];

export default function Page() {
  return (
    <section className="waste-water-tankering-page">
      <div className="waste-water-tankering-main">
        <span>Organic Waste Haulage UK</span>

        <div className="waste-water-tankering-main-cnt">
          <div className="waste-water-tankering-main-cnt-text">
            <h2 className="waste-water-tankering-main-cnt-text-hdr">
              Bulk Organic Waste Haulage UK | Specialist Food Waste Transport
            </h2>

            <span className="waste-water-tankering-main-cnt-text-cnt">
              SUGE provides specialist bulk organic waste haulage across the UK.
              From beetroot liquor, potato peels, to sludges, we handle the
              waste no one else wants.
            </span>

            <button>Book My Waste Review</button>
          </div>

          <div className="waste-water-tankering-main-cnt-img">
            <img src={img1} alt="waste-water-tankering-image" />
          </div>
        </div>
      </div>

      <div className="waste-water-tankering-desc">
        <span className="waste-water-tankering-desc-title">
          Bulk Organic Waste Haulage Simplified
        </span>
        <span className="waste-water-tankering-desc-cnt">
          Food waste is a messy business. And some streams? Downright
          impossible. That’s where we come in. <br />
          At SUGE, we specialise in hauling bulk organic waste across the UK -
          from all types of solids to liquids like beetroot liquor to
          starch-heavy sludges that most hauliers won’t touch. If it’s organic,
          difficult, and in large volumes, it’s in our wheelhouse.
        </span>
      </div>

      <div className="waste-water-tankering-msg1">
        <div className="waste-water-tankering-msg1-img">
          <img src={img2} alt="waste-water-tankering-image" />
        </div>

        <div className="waste-water-tankering-msg1-cnt">
          <span className="waste-water-tankering-msg1-cnt-hdr">
            Why Bulk Organic Waste is a Headache
          </span>
          <div className="waste-water-tankering-msg1-cnt-desc">
            <span>
              For UK food manufacturers, bulk organic waste creates daily
              challenges:
            </span>
            <ul>
              {Challanges.map((challange, index) => (
                <li key={index}>
                  <b>{challange.title}</b>
                  &ensp; - &ensp;
                  <span>{challange.content}</span>
                </li>
              ))}
            </ul>
            <span>
              And when a haulier says “we can’t take that”? That’s where
              bottlenecks begin.
            </span>
          </div>
        </div>

        <div className="green-blur" />
      </div>

      <div className="waste-water-tankering-msg2">
        <div className="waste-water-tankering-msg2-img">
          <img src={img2} alt="waste-water-tankering-image" />
        </div>

        <div className="waste-water-tankering-msg2-cnt">
          <span className="waste-water-tankering-msg2-cnt-hdr">
            The SUGE Solution
          </span>
          <div className="waste-water-tankering-msg2-cnt-desc">
            <span>
              We’re not your average haulier. <br />
              Specialist Equipment - Tankers and trailers built for liquid &
              solid food waste.
            </span>

            <ul>
              {Solution.map((solution, index) => (
                <li key={index}>
                  <b>{solution.title}</b>
                  &ensp; - &ensp;
                  <span>{solution.content}</span>
                </li>
              ))}
            </ul>

            <span>
              We take the organic waste others avoid and keep your operations
              flowing.
            </span>
          </div>
        </div>
      </div>

      <div className="waste-water-tankering-case-study">
        <span className="waste-water-tankering-case-study-hdr">
          Case Study: The “Barbie Load”
        </span>

        <div className="waste-water-tankering-case-study-main">
          <div className="waste-water-tankering-case-study-main-cnt">
            <div>
              <span>
                One of the UK’s largest veg growers faced a unique problem:
                beetroot washings.
              </span>
              <ul>
                <li>Too pigmented for most AD plants.</li>
                <li>Rejected by standard hauliers.</li>
                <li>Building up on site, fast.</li>
              </ul>
            </div>

            <div>
              <span>
                SUGE stepped in. We collected, transported, and delivered the
                load to a partner AD facility that could handle it transforming
                a liability into clean energy.
              </span>
              <br /> <br />
              <span>
                💬 “SUGE solved a problem we thought had no solution. The
                ‘barbie load’ is just perfect for the digester chemistry” -
                Feedstock Manager
              </span>
            </div>
          </div>
          <div className="waste-water-tankering-case-study-main-img">
            <img src={img3} alt="waste-water-tankering-image" />
          </div>
        </div>
      </div>

      <div className="waste-water-tankering-who-we-are">
        <div className="waste-water-tankering-who-we-are-main">
          <span className="waste-water-tankering-who-we-are-hdr">
            Who We Work With
          </span>

          <div className="waste-water-tankering-who-we-are-cnt">
            {WhoWeAreData.map((data, index) => (
              <WhoWeAreCard
                key={index}
                img_source={data.image}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
        </div>

        <div className="lightning-img">
          <img src={lightning_1} alt="lightning-image" />
        </div>
      </div>

      <div className="waste-water-tankering-faq">
        <div className="waste-water-tankering-faq-main">
          <div className="waste-water-tankering-faq-text">
            <span className="waste-water-tankering-faq-text-hdr">FAQS</span>
            <span className="waste-water-tankering-faq-text-cnt">
              Frequently Asked Questions
            </span>
          </div>

          <div className="waste-water-tankering-faq-list">
            {FAQ.map((faq, index) => (
              <FAQCard
                key={index}
                title={faq.title}
                description={faq.content}
              />
            ))}
          </div>
        </div>

        <div className="lightning-img">
          <img src={lightning} alt="lightning-image" />
        </div>
      </div>

      <div className="waste-water-tankering-review">
        <div className="waste-water-tankering-review-img">
          <img src={reviewImg} alt="waste-water-tankering-img" />
        </div>
        <div className="waste-water-tankering-review-cnt">
          <div className="waste-water-tankering-review-cnt-top">
            <span>Book Your Free Waste Review</span>
            <span>
              Not sure where your tricky waste fits?
              <br /> Let’s find out.
            </span>
          </div>

          <button>Book My Waste Review</button>

          <div className="waste-water-tankering-review-cnt-btm">
            We’ll assess your waste streams, advise on compliance, and build a
            collection plan that works for your site.
          </div>
        </div>
      </div>
    </section>
  );
}
