const Link = (props) => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#a)">
            <path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7ZM5.003 8 5 20h10V8H5.003ZM9 6h8v10h2V4H9v2Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default Link;
