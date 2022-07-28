import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    svgHover: {
        fill: theme.palette.foreground.default,
        "&:hover": {
            fill: theme.palette.primary.main,
        },
        transition: "all 0.5s ease",
    },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60" 
            className={classes.svgHover}
        >
            <path
                d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-4.592 37.521c1.316 1.621 2.988 2.431 5.018 2.431c2.078 0 3.664-.695 4.756-2.086c.604-.748 1.104-1.87, 1.502-3.366h6.023c-.52 3.163-1.848 5.735-3.982 7.717c-2.137 1.981-4.871 2.972-8.209 2.972c-4.129 0-7.375-1.338-9.736-4.016c-2.363-2.689-3.545-6.378-3.545-11.063c0-5.066 1.344-8.971 4.031-11.713c2.338-2.389 5.311-3.583 8.92-3.583c4.83 0 8.361 1.601 10.594 4.804c1.234 1.798 1.896 3.602 1.986 5.413h-6.063c-.387-1.392-.881-2.44-1.484-3.149c-1.08-1.26-2.682-1.891-4.803-1.891c-2.16 0-3.863.89-5.111 2.668c-1.246 1.778-1.869 4.295-1.869 7.549c0 3.254.658 5.691 1.972 7.313"/>
                transform="translate(-50 -50)"
            
            
        
        </svg>
    );
};
