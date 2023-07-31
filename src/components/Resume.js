import { Link } from "react-router-dom";
export const Resume = () =>{
    return(
        <div className="min-h-screen bg-[#1B1A1E] relative overflow-hidden">
            {/* <Head> */}
                <title>Nam Truong | Resume</title>
                <meta name="description" content="Nam Truong's resume" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" property="og:description" content="Nam Truong's resume" />
            {/* </Head> */}
            <div className="px-4 z-10 relative">
                {/* Header */}
                <div className="h-[5rem] flex items-center py-3 lg:px-20 md:px-16 sm:px-8 px-4">
                    <Link href="/">
                        {/* <Image src={''} alt="Logo" width={40} height="auto"></Image> */}
                    </Link>
                </div>
                <div className = "w-full min-h-screen flex justify-center">
                    <a href="/assets/NamTruong_Resume.pdf" target="_blank" rel="noopener noreferrer" className="md:w-1/2 sm:w-3/4 w-full md:my-14 my-10 resumeGlow">
                        {/* <Image src={''} alt="Resume" priority={true}/> */}
                    </a>
                </div>
            </div>
            {/* Underglow */}
            <div className="absolute heroGradient top-0 -translate-x-1/2 left-1/2 w-[250%] h-full z-0"></div>
        </div>
    );
}