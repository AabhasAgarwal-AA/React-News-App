import { Card } from "./Card";

export function NewsApp(){
    const API_KEY = import.meta.env.VITE_API_KEY;
    console.log(API_KEY);
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
                    <input type="text" placeholder="Search News" />
                    <button>Search</button>

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
                <Card />
            </div>
        </div>
    );
}