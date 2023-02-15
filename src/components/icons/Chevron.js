const Chevron = ({ fill, ...props }) => (
    <svg fill={fill} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M16.042 9.36c.7-.505.831-1.448.294-2.106-.538-.658-1.54-.781-2.24-.276L9.029 10.64c-.7.505-.83 1.448-.293 2.106.537.659 1.54.782 2.24.277l5.066-3.662Z" />
        <path d="M5.902 6.983c-.7-.505-1.703-.38-2.24.279-.536.658-.403 1.601.297 2.106l5.071 3.656c.7.504 1.703.38 2.24-.28.537-.658.404-1.6-.296-2.105L5.902 6.982Z" />
    </svg>
);

export default Chevron;
