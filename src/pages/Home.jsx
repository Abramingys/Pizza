import React from 'react'
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton'

function Home() {
    const [pizzas, setPizzas] = React.useState([]);
    const [isloading, setIsLoadind] = React.useState(true);
    const [activeCategories, setActiveCategories] = React.useState(0);



    React.useEffect(() => {
        setIsLoadind(true)
        fetch('https://62a706db97b6156bff855e3b.mockapi.io/items?category=' + (activeCategories > 0 ? activeCategories : '')).
            then((res) => res.json()
            ).then((arr) => {
                setPizzas(arr);
                setIsLoadind(false);
            });
        window.scrollTo(0, 0);
    }, [activeCategories]);

    return (
        <>
            <div className="content__top">
                <Categories activeCategories={activeCategories} setActiveCategories={setActiveCategories} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isloading ?
                        [...new Array(12)].map((_, index) => < PizzaBlockSkeleton key={index} />)
                        : pizzas.map((obj, objIndex) =>
                            <PizzaBlock {...obj} key={objIndex} />
                        )
                }
            </div>
        </>
    )

}


export default Home;