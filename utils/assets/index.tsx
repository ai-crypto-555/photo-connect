import React from 'react'
import { Svg, Path, Rect, Line, Circle, Defs, Pattern, Image, Use } from 'react-native-svg'

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
    DownAngle: ({ }) => (
        <Svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <Path d="M1 1L7 7L13 1" stroke="#ABABAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    ),
    PositionIcon: () => (
        <Svg width="10" height="15" viewBox="0 0 10 15" fill="none">
            <Path d="M5.39194 0C5.68597 0.0608157 5.98699 0.0969606 6.27291 0.186411C8.29788 0.819896 9.4974 2.2569 9.91179 4.41409C10.1347 5.57435 9.92804 6.67822 9.37263 7.70886C8.15098 9.97578 6.93192 12.2442 5.70751 14.5095C5.35983 15.1528 4.60945 15.1666 4.26538 14.5317C3.03852 12.268 1.7937 10.0143 0.603858 7.72917C-1.06005 4.53353 0.88858 0.537497 4.32137 0.043213C4.40032 0.0318448 4.47851 0.0145384 4.55705 0C4.83534 0 5.11364 0 5.39194 0ZM4.99612 7.51465C6.18096 7.50855 7.1551 6.48137 7.15347 5.23984C7.15183 3.98382 6.17228 2.95956 4.97953 2.96669C3.80861 2.97368 2.82653 4.01617 2.82536 5.25334C2.8242 6.48532 3.81813 7.52071 4.99612 7.51465Z" fill="#0041C4" />
        </Svg>
    ),
    PlusIcon: () => (
        <Svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <Path d="M9 1L9 16" stroke="#0041C4" strokeWidth="2" strokeLinecap="round" />
            <Path d="M16 8L1 8" stroke="#0041C4" strokeWidth="2" strokeLinecap="round" />
        </Svg>
    ),
    TickIcon: () => (
        <Svg width="17" height="14" viewBox="0 0 17 14" fill="none">
            <Path d="M1 6.5L6.625 12L16 1" stroke="#0041C4" strokeWidth="2" />
        </Svg>
    ),
    AboutIcon: () => (
        <Svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <Path d="M4.03516 10.625H6.05664V10.0293C6.05664 9.02344 6.41797 8.50586 7.67773 7.76367C8.9668 6.99219 9.72852 5.92773 9.72852 4.42383V4.4043C9.72852 2.32422 7.99023 0.791016 5.41211 0.791016C2.58008 0.791016 1.06641 2.4707 0.978516 4.67773V4.69727L2.99023 4.6875H3.00977C3.08789 3.39844 3.95703 2.58789 5.30469 2.58789C6.64258 2.58789 7.51172 3.39844 7.51172 4.49219V4.51172C7.51172 5.50781 7.0918 6.07422 5.91016 6.78711C4.57227 7.58789 3.97656 8.4668 4.02539 9.84375L4.03516 10.625ZM5.16797 15.2148C6.06641 15.2148 6.67188 14.6289 6.67188 13.7598C6.67188 12.8809 6.06641 12.2949 5.16797 12.2949C4.26953 12.2949 3.6543 12.8809 3.6543 13.7598C3.6543 14.6289 4.26953 15.2148 5.16797 15.2148Z" fill="#0041C4" />
        </Svg>
    ),

    // LeftArrow: ({ width, height, color }: IconProps) => (
    //     <Svg width="17" height="18" viewBox="0 0 17 18" fill="none">
    //         <Path d="M2 9L1.45625 8.48344L0.965516 9L1.45625 9.51656L2 9ZM16 9.75C16.4142 9.75 16.75 9.41421 16.75 9C16.75 8.58579 16.4142 8.25 16 8.25V9.75ZM9.05625 0.483438L1.45625 8.48344L2.54375 9.51656L10.1437 1.51656L9.05625 0.483438ZM1.45625 9.51656L9.05625 17.5166L10.1437 16.4834L2.54375 8.48344L1.45625 9.51656ZM2 9.75H16V8.25H2V9.75Z" fill="#0041C4" />
    //     </Svg>
    // ),
    LeftArrowIcon: ({ color }: IconProps) => (
        <Svg width="16" height="16" viewBox="0 0 18 18" fill="none">
            <Path d="M2 9L1.275 8.31125L0.620689 9L1.275 9.68875L2 9ZM21 10C21.5523 10 22 9.55229 22 9C22 8.44772 21.5523 8 21 8V10ZM8.875 0.311251L1.275 8.31125L2.725 9.68875L10.325 1.68875L8.875 0.311251ZM1.275 9.68875L8.875 17.6887L10.325 16.3113L2.725 8.31125L1.275 9.68875ZM2 10H21V8H2V10Z" fill={color || "#33363F"} />
        </Svg>
    ),
    DollarIcon: ({ color }: IconProps) => (
        <Svg width="11" height="18" viewBox="0 0 11 18" fill="none">
            <Path d="M4.95312 17.4062H6.10547V15.7754C8.57617 15.5898 10.5195 14.2324 10.5195 11.8496V11.8301C10.5195 9.75977 9.11328 8.70508 6.54492 8.10938L6.10547 8.00195V3.91016C7.3457 4.08594 8.20508 4.82812 8.3418 6.03906V6.05859L10.3633 6.04883V6.03906C10.2754 3.8418 8.52734 2.33789 6.10547 2.13281V0.492188H4.95312V2.13281C2.50195 2.32812 0.763672 3.77344 0.763672 5.95117V5.9707C0.763672 7.94336 2.10156 9.05664 4.57227 9.63281L4.95312 9.73047V13.998C3.38086 13.832 2.64844 12.9824 2.48242 11.8496V11.8301L0.451172 11.8398V11.8496C0.529297 14.1738 2.48242 15.5801 4.95312 15.7754V17.4062ZM2.82422 5.81445V5.79492C2.82422 4.90625 3.55664 4.0957 4.95312 3.91016V7.72852C3.41016 7.33789 2.82422 6.68359 2.82422 5.81445ZM8.44922 12.0254V12.0449C8.44922 13.0801 7.75586 13.8711 6.10547 14.0078V9.99414C7.90234 10.4238 8.44922 11.0195 8.44922 12.0254Z" fill="#0041C4" />
        </Svg>
    ),
    CloudIcon: () => (
        <Svg width="27" height="15" viewBox="0 0 27 15" fill="none">
            <Path fillRule="evenodd" clipRule="evenodd" d="M4.5 15H13.5H23C25.2091 15 27 13.2091 27 11V10C27 7.79086 25.2091 6 23 6H22.4848C21.7606 6 21.3985 6 21.1502 5.83893C20.9019 5.67785 20.7187 5.26727 20.3521 4.44612C19.1827 1.82607 16.5546 0 13.5 0C10.4454 0 7.81734 1.82607 6.64786 4.44612C6.28133 5.26727 6.09807 5.67785 5.84978 5.83893C5.60149 6 5.23433 6 4.5 6V6C2.01472 6 0 8.01472 0 10.5C0 12.9853 2.01472 15 4.5 15Z" fill="white" fillOpacity="0.8" />
        </Svg>
    ),
    CheckIcon: () => (
        <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
            <Circle cx="12.5" cy="12.5" r="12" fill="#0041C4" stroke="white" />
            <Path d="M6.94446 12.5347L10.3927 15.9722L18.0556 8.33336" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    ),
    RefreshIcon: () => (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path d="M2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1H2ZM1 7H0C0 7.55228 0.447715 8 1 8L1 7ZM7 8C7.55228 8 8 7.55228 8 7C8 6.44772 7.55228 6 7 6V8ZM17.3013 7.73048C17.527 8.23453 18.1186 8.46016 18.6227 8.23443C19.1267 8.0087 19.3523 7.4171 19.1266 6.91305L17.3013 7.73048ZM14.3539 3.12343L14.8377 2.24824L14.8377 2.24824L14.3539 3.12343ZM8.74532 2.08779L8.88463 3.07804L8.88463 3.07804L8.74532 2.08779ZM18 19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19H18ZM19 13H20C20 12.4477 19.5523 12 19 12V13ZM13 12C12.4477 12 12 12.4477 12 13C12 13.5523 12.4477 14 13 14V12ZM2.69867 12.2695C2.47294 11.7655 1.88134 11.5398 1.37729 11.7656C0.873245 11.9913 0.647621 12.5829 0.87335 13.0869L2.69867 12.2695ZM11.2546 17.9122L11.3939 18.9025L11.2546 17.9122ZM0 1V7H2V1H0ZM1 8H7V6H1V8ZM19.1266 6.91305C18.2405 4.93431 16.7352 3.29716 14.8377 2.24824L13.8701 3.99862C15.3882 4.83777 16.5924 6.14751 17.3013 7.73048L19.1266 6.91305ZM14.8377 2.24824C12.9401 1.19933 10.753 0.795485 8.60601 1.09754L8.88463 3.07804C10.6023 2.83638 12.352 3.15948 13.8701 3.99862L14.8377 2.24824ZM8.60601 1.09754C4.96371 1.60995 2.5364 4.27766 0.332114 6.25574L1.66789 7.74426C4.11849 5.54515 6.00203 3.48357 8.88463 3.07804L8.60601 1.09754ZM20 19V13H18V19H20ZM19 12H13V14H19V12ZM0.87335 13.0869C1.75949 15.0657 3.26474 16.7028 5.16229 17.7517L6.12985 16.0014C4.61178 15.1622 3.40758 13.8525 2.69867 12.2695L0.87335 13.0869ZM5.16229 17.7517C7.05984 18.8007 9.2469 19.2045 11.3939 18.9025L11.1153 16.922C9.39763 17.1636 7.64793 16.8405 6.12985 16.0014L5.16229 17.7517ZM11.3939 18.9025C15.0362 18.39 17.4636 15.7223 19.6679 13.7443L18.3321 12.2557C15.8815 14.4548 13.9979 16.5164 11.1153 16.922L11.3939 18.9025Z" fill="white" fillOpacity="0.7" />
        </Svg>
    ),
    UploadIcon: () => (
        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <Path d="M9 1L9 11.2857" stroke="#160042" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M12.4287 4.42857L9.00011 1L5.57153 4.42857" stroke="#160042" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M1 9L1 17L17 17V9" stroke="#160042" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    ),
    DeleteIcon: () => (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path d="M3.66667 4.6665V16.9998C3.66667 18.1044 4.5621 18.9998 5.66667 18.9998H14.3333C15.4379 18.9998 16.3333 18.1044 16.3333 16.9998V4.6665M1 4.6665H19" stroke="#160042" strokeWidth="1.5" strokeLinecap="round" />
            <Path d="M6 1H14" stroke="#160042" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M8 9.33325V14.3333" stroke="#160042" strokeWidth="1.5" strokeLinecap="round" />
            <Path d="M12 9.33325V14.3333" stroke="#160042" strokeWidth="1.5" strokeLinecap="round" />
        </Svg>
    )
}

export default Icons;

