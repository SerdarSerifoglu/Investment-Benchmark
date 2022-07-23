const size = {
  mobileS: "375px",
  mobileL: "500px",
  tablet: "768px",
  laptopS: "1024px",
  laptop: "1440px",
};

export const deviceMin = {
  mobileS: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptopS: `(min-width: ${size.laptopS})`,
  laptop: `(min-width: ${size.laptop})`,
};
export const deviceMax = {
  mobileS: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptopS: `(max-width: ${size.laptopS})`,
  laptop: `(max-width: ${size.laptop})`,
};
