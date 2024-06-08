'use client'

export default function Button({children, theme, type, click}) {


    switch (theme) {
        case 'Primary':
            return <button
            type={type ? type : 'button'}
            className="text-white bg-black border border-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[2px] text-[16px] w-full px-2 py-3 text-center space-x-2 sm:max-w-[300px] z-20"
            // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
            // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={click}
        >
            {children}
        </button>
        case 'Secondary':
            return <button
            type={type ? type : 'button'}
            className="text-black bg-white border border-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[2px] text-[16px] w-full px-2 py-3 text-center space-x-2 sm:max-w-[300px] z-20"
            // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
            // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={click}
        >
             {children}
        </button>
        default:
    }


}