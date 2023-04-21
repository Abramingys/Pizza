import React from 'react';


function Categories({ activeCategories, setActiveCategories }) {
    // const [activeIndex, setactiveIndex] = React.useState(0);
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((item, index) =>
                        <li key={index}
                            onClick={() => setActiveCategories(index)}
                            className={activeCategories == index ? 'active' : ''}>
                            {item}
                        </li>)
                }
                {/* <li className="active">Все</li>
                <li>Мясные</li>
                <li>Вегетарианская</li>
                <li>Гриль</li>
                <li>Острые</li>
                <li>Закрытые</li> */}
            </ul>
        </div>
    )
}

export default Categories;