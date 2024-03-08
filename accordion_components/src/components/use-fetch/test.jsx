
import useFetch from "./index";




export default function FetchHookTest(){


    const { data , pending, error } = useFetch('https://dummyjson.com/products' , {});

    return (
    <div>
        <h1> Use Fetch </h1>
        {
            pending ? <h1>Loading...</h1> : null

        }
        {
            error ? <h1>{error}</h1> : null
        }
        {
            data && data.products &&  data.products.length
            ? data.products.map((productItem) => (
                <p key={productItem.key}>{productItem.title}</p>
            ))
            : null
        }

    </div>
    );
}