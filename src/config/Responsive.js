export const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2200px',
};

export const devices = {
    mobileS: `(max-width: ${sizes.mobileM})`,
    mobileM: `(min-width: ${sizes.mobileM}) and (max-width: ${sizes.mobileL})`,
    mobileL: `(min-width: ${sizes.mobileL}) and (max-width: ${sizes.tablet})`,
    tablet: `(min-width: ${sizes.tablet}) and (max-width: ${sizes.laptop})`,
    laptop: `(min-width: ${sizes.laptop}) and (max-width: ${sizes.laptopL})`,
    laptopL: `(min-width: ${sizes.laptopL}) and (max-width: ${sizes.desktop})`,
    desktop: `(min-width: ${sizes.desktop})`,
};
