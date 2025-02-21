
export function Card({data}: any){
    return(
        <div className="cardContainer">
            {data.map((curItem : any, index: any) => {
                return(
                    <div className="card">
                        <img src={curItem.urlToImage} />
                        <div className="cardContent">
                            <a>{curItem.title}</a>
                            <p>{curItem.description}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                )
            })}
            
             
        </div>
    );
}