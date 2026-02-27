interface RefreshIconProps {
    hasUpdate: boolean
}

export default function RefreshIcon({ hasUpdate }: RefreshIconProps) {

    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_300_1170)">
                <path
                    d="M16.125 1.49995V5.99995H11.625M1.875 16.4999V11.9999H6.375M1.5 8.62495C1.57103 6.98357 2.17906 5.41093 3.23064 4.14866C4.28223 2.8864 5.71919 2.00434 7.32074 1.63803C8.9223 1.27171 10.5998 1.44141 12.0956 2.12105C13.5913 2.80068 14.8225 3.95265 15.6 5.39995M16.5 9.37495C16.4142 11.0103 15.7954 12.5726 14.7383 13.8233C13.6812 15.074 12.2437 15.9443 10.6455 16.3014C9.04732 16.6584 7.37617 16.4826 5.88729 15.8007C4.39841 15.1188 3.17363 13.9683 2.4 12.5249"
                    stroke={ hasUpdate ? '#06B20D' : '#323233'}
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
            <clipPath id="clip0_300_1170">
                <rect width="18" height="18" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}