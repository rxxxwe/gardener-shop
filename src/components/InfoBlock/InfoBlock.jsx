import "./InfoBlock.css";

/* eslint-disable react/prop-types */
function InfoBlock({ infoBlockTitle, infoBlockText }) {
  return (
    <div className="info-block">
      <div className="info-block__title">{infoBlockTitle}</div>
      <div className="info-block__text">{infoBlockText}</div>
    </div>
  );
}

export default InfoBlock;
