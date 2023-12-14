import "../noPage/noPage.css"
export function NoPage() {
    return(
        <div className="no-page-body">
            <div className="error">
                Oops, We can't find that page... Oops, We can't find that page... Oops, We can't find that page...
            </div>
            <div className="donate-img">
                <img src="/src/assets/images/donate.svg" alt="donate" />
            </div>
            <div className="error">
                Oops, We can't find that page... Oops, We can't find that page... Oops, We can't find that page...
            </div>
        </div>
    )
}