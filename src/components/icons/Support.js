const Support = (props) => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#a)">
            <path
                d="M20 22H4a1 1 0 0 1-1-1V8h18v13a1 1 0 0 1-1 1Zm1-16H3V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3ZM7 11v4h4v-4H7Zm0 6v2h10v-2H7Zm6-5v2h4v-2h-4Z"
                fill="#9C99AD"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default Support;
