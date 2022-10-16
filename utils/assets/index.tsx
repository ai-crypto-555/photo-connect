import React from 'react'
import { Svg, Path, Rect, Line, Circle, Defs, Pattern, Image } from 'react-native-svg'

interface IconProps {
    width?: string | number
    height?: string | number
    color?: string
}


const Icons = {
    Zoom: ({ width, height, color }: IconProps) => (
        <Svg width={width || "18"} height={height || "18"} viewBox="0 0 18 18" fill="none">
            <Circle cx="8" cy="8" r="7" stroke={color || "#ABABAB"} strokeWidth="1.5" />
            <Path d="M17 17L13 13" stroke={color || "#ABABAB"} strokeWidth="1.5" strokeLinecap="round" />
        </Svg>
    ),
    Tool: ({ width, height, color }: IconProps) => (
        <Svg width="20" height="22" viewBox="0 0 20 18" fill="none">
            <Line x1="0.75" y1="-0.75" x2="18.45" y2="-0.75" transform="matrix(-1 0 0 1 19.2 16.2)" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <Line x1="0.75" y1="-0.75" x2="18.45" y2="-0.75" transform="matrix(-1 0 0 1 19.2 10.2)" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <Line x1="0.75" y1="-0.75" x2="18.45" y2="-0.75" transform="matrix(-1 0 0 1 19.2 4.19998)" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <Path d="M13.2 1L13.2 5" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <Path d="M13.2 13L13.2 17" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <Path d="M6 7L6 11" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
        </Svg>
    ),
    RightAngle: ({ width, height, color }: IconProps) => (
        <Svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <Path d="M1 13L7 7L1 1" stroke="#ABABAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    ),
    LeftArrow: ({ width, height, color }: IconProps) => (
        <Svg width="17" height="18" viewBox="0 0 17 18" fill="none">
            <Path d="M2 9L1.45625 8.48344L0.965516 9L1.45625 9.51656L2 9ZM16 9.75C16.4142 9.75 16.75 9.41421 16.75 9C16.75 8.58579 16.4142 8.25 16 8.25V9.75ZM9.05625 0.483438L1.45625 8.48344L2.54375 9.51656L10.1437 1.51656L9.05625 0.483438ZM1.45625 9.51656L9.05625 17.5166L10.1437 16.4834L2.54375 8.48344L1.45625 9.51656ZM2 9.75H16V8.25H2V9.75Z" fill="#0041C4" />
        </Svg>
    )
}

export default Icons;

