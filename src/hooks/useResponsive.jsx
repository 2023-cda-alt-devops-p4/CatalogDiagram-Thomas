import { Responsive } from "../config";
import { useMediaQuery } from "usehooks-ts";

const useResponsive = () => {
    const { devices } = Responsive;

    const isDesktop = useMediaQuery(devices.desktop);
    const isLaptopL = useMediaQuery(devices.laptopL);
    const isLaptop = useMediaQuery(devices.laptop);
    const isTablet = useMediaQuery(devices.tablet);
    const isMobileL = useMediaQuery(devices.mobileL);
    const isMobileM = useMediaQuery(devices.mobileM);
    const isMobileS = useMediaQuery(devices.mobileS);

    const isGlobalMobile = isMobileL || isMobileM || isMobileS;
    const isGlobalLaptop = isLaptop || isLaptopL;

    return {
        isDesktop,
        isLaptopL,
        isLaptop,
        isTablet,
        isMobileL,
        isMobileM,
        isMobileS,
        isGlobalMobile,
        isGlobalLaptop
    }
}

export default useResponsive;