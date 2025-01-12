import InfoBlock from "../InfoBlock/InfoBlock";
import Title from "../Title/Title";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <Title title={"Contact"} />

        <div className="contact__block">
          <div className="contact__block-top">
            <InfoBlock
              infoBlockTitle={"Phone"}
              infoBlockText={"+90 531 123 4567"}
            />
            <InfoBlock
              infoBlockTitle={"Working Hours"}
              infoBlockText={"24 hours a day"}
            />
          </div>

          <div className="contact__block-bottom">
            <InfoBlock
              infoBlockTitle={"Address"}
              infoBlockText={"Nişantaşı, İstanbul, Türkiye, 01961"}
            />
          </div>
        </div>

        <div className="contact__map-block">
          <iframe
            className="contact__map-frame"
            width="100%"
            height="350"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12035.773751788!2d28.984146525392102!3d41.04836599151641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab708f402e7ab%3A0x81f56e7dbf2437c2!2zTmnFn2FudGHFn8SxLCBUZcWfdmlraXllLCDQqNC40YjQu9C4L9Ch0YLQsNC80LHRg9C7LCDQotGD0YDRhtC40Y8!5e0!3m2!1sru!2sfr!4v1736598855018!5m2!1sru!2sfr"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
