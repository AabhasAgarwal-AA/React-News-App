import { useState } from "react";
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

    return(
        <div>
            <nav>
                <div>
                    <h1>Trendy news </h1>
                </div>
                <ul>
                    <a>All News</a>
                    <a>Trending</a>

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
                <button>Sports </button>
                <button>Politics </button>
                <button>Entertainment </button>
                <button>Health </button>
                <button>Fitness </button>


            </div>

            <div>
                <Card data={newsData} />
            </div>
        </div>
    );
}