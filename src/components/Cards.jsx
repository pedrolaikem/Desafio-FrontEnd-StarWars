import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function Cards({ img, title, align, transform, width }) {
    return (
        <Box
            component="ul"
            sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                p: 0,
                m: 0,
                transition: "translate 0.5s ease-in-out",
                "&:hover": {
                    transform: transform,
                    transition: "all 0.25s ease-in-out",
                },
            }}
        >
            <Card
                className="w-[300px] 2xl:w-[240px] xl:w-[200px] lg:w-[150px] md:w-[250px] "
                component="li"
                sx={{ minWidth: 0, flexGrow: 1, width: width }}
            >
                <CardCover>
                    <img src={img} loading="lazy" alt="" />
                </CardCover>
                <CardContent>
                    <Typography
                        level="body-lg"
                        fontWeight="lg"
                        textColor={"#fff"}
                        textAlign={align}
                        mt={{ xs: 12, sm: 18 }}
                    >
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
