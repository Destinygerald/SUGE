import "../style.css";

export function WhoWeAreCard({ img_source, title, description }) {
  return (
    <div className="waste-water-tankering-who-we-are-card">
      <div className="waste-water-tankering-who-we-are-card-img">
        <img src={img_source} alt="waste-water-tankering-icon" />
      </div>

      <div className="waste-water-tankering-who-we-are-card-txt">
        <span className="waste-water-tankering-who-we-are-card-title">
          {title}
        </span>
        <span className="waste-water-tankering-who-we-are-card-desc">
          {description}
        </span>
      </div>
    </div>
  );
}
