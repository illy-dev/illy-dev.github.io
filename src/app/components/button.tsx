import Link from "next/link";

const Button1 = () => {
    return (
        <div className="flex gap-4 items-center flex-col sm:flex-row ">
          <Link
            className="text-black hover:text-white rounded-full border border-solid transition-all duration-500 flex items-center justify-center bg-foreground gap-2 hover:bg-[#383838] dark:hover:bg-[#1a1a1a] border-white font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-6 hover:sm:px-10 hover:px-10 sm:w-auto font-[Switzer-Regular]"
            href="/projects"
          >
            See all
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </Link>
          </div>
    );
}

export default Button1;