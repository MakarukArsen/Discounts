const Accout = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx={16} cy={16} r={16} fill="#F7F7F7" />
        <g clipPath="url(#a)">
            <path
                d="M10.666 22.666a5.333 5.333 0 1 1 10.667 0H20a4 4 0 1 0-8 0h-1.334Zm5.334-6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Zm0-1.333A2.666 2.666 0 1 0 16 10.001 2.666 2.666 0 0 0 16 15.333Z"
                fill="#333"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" transform="translate(8 8)" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default Accout;
