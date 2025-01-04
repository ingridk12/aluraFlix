    import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { buscar } from "../Api/Api";
import "../componentes/Categorias/Categoria.css"

const ListCategories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        buscar(`/categorias`, setCategories)
    }, [])

    return (
        <ul className="categoria">
            {
                categories.map(category => (
                    <Link to={`/categoria/${category.id}`} key={category.id}>
                        <li className={`categoria${category.id}`}>
                            {category.nombre}
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}

export default ListCategories;