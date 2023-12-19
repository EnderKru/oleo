import "../noPage/noPage.css"
export function NoPage() {
    return(
        <>
        <a href='/'><img src="/src/assets/images/logo.svg" alt="logo" className="logo" /></a>
        <div className="no-page-body">
            <div className="error">
                Oops, We can't find that page... Oops, We can't find that page... Oops, We can't find that page...Oops, We can't find that page...Oops, We can't find that page...Oops, We can't find that page...Oops, We can't find that page...Oops, We can't find that page...We can't find that page...We can't find that page...
            </div>
            <div className="donate-img">
                <img src="/src/assets/images/donate.svg" alt="donate" />
            </div>
            <div className="error">
                Oops, We can't find that page... Oops, We can't find that page... Oops, We can't find that page...Oops, We can't find that page...Oops, We can't find that page...Oops, We can't find that page...Oops, We can't find that page...Oops, We can't find that page...We can't find that page...We can't find that page...
            </div>
        </div>
        </>
        
    )
}