const SvgComponent = (props) => (
    <svg width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx={16} cy={16} r={16} fill="#333" />
        <g clipPath="url(#a)">
            <path
                d="M11.333 22.666a.667.667 0 0 1-.667-.666V10a.667.667 0 0 1 .667-.667h9.333a.667.667 0 0 1 .667.667v12a.667.667 0 0 1-.667.666h-9.333Zm6.666-4L21.333 16l-3.334-2.667v2h-4v1.333h4v2Z"
                fill="#F7F7F7"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" transform="translate(8 8)" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default SvgComponent;
