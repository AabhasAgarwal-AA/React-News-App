
export function Card({data}: any){
    
    return(
        <div className="cardContainer">
            {data?.map((curItem : any) => {
                if(!curItem.urlToImage){
                    return null
                }
                return(
                    <div className="card">
                        <img src={curItem.urlToImage} />
                        <div className="cardContent">
                            <a className="title" onClick={() => window.open(curItem.url)}>{curItem.title}</a>
                            <p>{curItem.description}</p>
                            <button onClick={() => window.open(curItem.url)}>Read More</button>
                        </div>
                    </div>
                )
            })}             
        </div>
    );
}