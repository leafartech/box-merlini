import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
}

export default function Button({ children }: ButtonProps) {
    return (
        <div className="flex justify-center w-full">
            <a href="https://api.whatsapp.com/send?phone=554233235059&text=Ol%C3%A1,%20tudo%20bem?%20" className="bg-red-500 rounded-lg w-full sm:max-w-sm text-white font-semibold flex gap-2 py-3 px-6 sm:text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-6 sm:h-6 mt-1 sm:mt-0" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_1_772)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.463 3.488C18.217 1.24 15.231 0.001 12.05 0C5.49501 0 0.160007 5.334 0.157007 11.892C0.156007 13.988 0.704007 16.034 1.74501 17.838L0.0570068 24L6.36101 22.346C8.09801 23.294 10.054 23.793 12.044 23.794H12.049C18.603 23.794 23.939 18.459 23.942 11.901C23.944 8.724 22.708 5.735 20.463 3.488ZM12.05 21.785H12.046C10.272 21.785 8.53301 21.308 7.01501 20.407L6.65401 20.193L2.91301 21.174L3.91201 17.526L3.67701 17.152C2.68701 15.578 2.16501 13.759 2.16601 11.892C2.16801 6.442 6.60301 2.008 12.055 2.008C14.695 2.008 17.177 3.038 19.043 4.906C20.909 6.775 21.936 9.258 21.935 11.899C21.932 17.351 17.498 21.785 12.05 21.785ZM17.472 14.382C17.175 14.233 15.714 13.514 15.441 13.415C15.169 13.316 14.971 13.266 14.772 13.563C14.573 13.86 14.005 14.53 13.831 14.729C13.658 14.927 13.484 14.952 13.187 14.803C12.89 14.654 11.932 14.341 10.797 13.328C9.91401 12.54 9.31701 11.567 9.14401 11.269C8.97101 10.971 9.12601 10.811 9.27401 10.663C9.40801 10.53 9.57101 10.316 9.72001 10.142C9.87001 9.97 9.91901 9.846 10.019 9.647C10.118 9.449 10.069 9.275 9.99401 9.126C9.91901 8.978 9.32501 7.515 9.07801 6.92C8.83701 6.34 8.59201 6.419 8.40901 6.41C8.23601 6.401 8.03801 6.4 7.83901 6.4C7.64101 6.4 7.31901 6.474 7.04701 6.772C6.77501 7.07 6.00701 7.789 6.00701 9.251C6.00701 10.714 7.07201 12.127 7.22001 12.325C7.36801 12.523 9.31501 15.525 12.296 16.812C13.005 17.118 13.559 17.301 13.99 17.438C14.702 17.664 15.35 17.632 15.862 17.556C16.433 17.471 17.62 16.837 17.868 16.143C18.116 15.449 18.116 14.853 18.041 14.73C17.967 14.605 17.769 14.531 17.472 14.382Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_772">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                {children}
            </a>
        </div>
    )
}