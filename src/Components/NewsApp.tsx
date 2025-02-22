import { useEffect, useState } from "react";
import { Card } from "./Card";

export function NewsApp(){
    const API_KEY = import.meta.env.VITE_API_KEY;
    const [search, setSearch] = useState("India");
    const [newsData, setNewsData] = useState(null);

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        setNewsData(jsonData.articles);
    }

    const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }
    
    useEffect(()=>{
        getData()
    }, []);

    const userInput = (e: any) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    return(
        <div>
            <nav>
                <div>
                    <h1>News</h1>
                </div>
                <ul style={{display:"flex", gap:"11px"}}>
                    <a href="https://www.bbc.com" target="_blank" style={{fontWeight:600, fontSize:"17px"}}>All News</a>
                    <a href="https://www.bbc.com/news" target="_blank" style={{fontWeight:600, fontSize:"17px"}}>Trending</a>
                </ul>
                <div className="serachBar">
                    <input type="text" placeholder="Search News" onChange={handleInput} />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>

            <div>
                <p className="head">Stay updated with Treandy news</p>
            </div>

            <div className="categoryBtn">
                <button onClick={userInput} value="sports">Sports </button>
                <button onClick={userInput} value="politics">Politics </button>
                <button onClick={userInput} value="entertainment">Entertainment </button>
                <button onClick={userInput} value="health">Health </button>
                <button onClick={userInput} value="fitness">Fitness </button>
            </div>

            <div>
                <Card data={newsData} />
            </div>
        </div>
    );
}