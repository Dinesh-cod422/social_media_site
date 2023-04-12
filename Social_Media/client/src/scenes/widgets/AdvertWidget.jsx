import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
    const { palette } = useTheme()
    const dark = palette.neutral.dark
    const main = palette.neutral.main
    const medium = palette.neutral.medium

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ad</Typography>
            </FlexBetween>
            <img
              width="100%"
              height="auto"
              alt="advert"
              src="http://localhost:3001/assets/Advertisment.avif"
              style={{ borderRadius: "0.75rem", margin: "0.75rem, 0"}}
            />
            <FlexBetween>
                <Typography color={main}>IceCreams Ever</Typography>
                <Typography color={medium}>icecreamsever.com</Typography>
            </FlexBetween>  
            <Typography color={medium} m="0.5rem 0">
               You're eating ice cream. Remind your customers how sweet life can be with these taglines. Nothing as timeless as our ice cream.
            </Typography>
        </WidgetWrapper>    
    )
}

export default AdvertWidget