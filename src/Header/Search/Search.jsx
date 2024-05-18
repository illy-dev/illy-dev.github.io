function Search() {

    return(
        <div className=" overflow-hidden font-body">
            <input type="search" name="search" placeholder="Search/Create Article" className=" float-right p-[6px] border-none mt-[8px] mr[16px]"></input>
            <button type="submit"><i class="fa fa-search"></i></button>
        </div>
    )
}
export default Search