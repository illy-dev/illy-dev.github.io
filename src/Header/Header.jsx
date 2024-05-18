import Search from "./Search/Search"

function Header() {

    return(
        <div className=" text-text flex">
            <h1 className=" text-5xl font-heading">Wiki Creator</h1>
            <Search/>
        </div>
    )
}
export default Header