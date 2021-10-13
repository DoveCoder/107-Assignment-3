import { useEffect, useState } from "react";

import Item from "./item";
import "./catalog.css"
import DataService from "../services/dataService"

const Catalog = () => {
    const [itemList, setItemList] = useState([]);

    const loadCatalog = () => {
        let service = new DataService();
        let catalog = service.getCatalog();
        console.log("the data", catalog);

        setItemList(catalog);
    };

    useEffect(() => {
        loadCatalog();
    }, [])

    return (
        <div>
            <div className="catalog">
                <h3> My Catalog</h3>

                <h3>Currently have {itemList.length} products.</h3>

                {itemList.map( product => {
                    return <Item data={product}></Item>;
                } )}
            </div>
        </div>
        
        
    );
}

export default Catalog;