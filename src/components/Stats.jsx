import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

export default function Stats({ text }) {
  const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;
  const numberOfChars = text.length;
  const instagramCharsLeft = INSTAGRAM_MAX_CHARACTERS - numberOfChars;
  const facebookCharsLeft = FACEBOOK_MAX_CHARACTERS - numberOfChars;

  return (
    <section className="stats">
      <Stat number={numberOfWords} label="Words" />
      <Stat number={numberOfChars} label="Character" />
      <Stat number={instagramCharsLeft} label="Instagram" />
      <Stat number={facebookCharsLeft} label="Facebook" />
    </section>
  );
}

function Stat({ label, number }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
