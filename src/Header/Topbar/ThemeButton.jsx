export default function ThemeBUtton(){
    return (
            <button id="theme-btn" type="button" data-theme-toggle aria-label="Change to light theme">
                <svg
                    className="dark-icon feather feather-moon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="27px"
                    height="27px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            </button>
    )
}