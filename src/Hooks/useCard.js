import { useEffect, useState } from "react"
import {getShoppingCart} from "../utilities/fakedb";

const useCard = (products) => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        const storedcard = getShoppingCart();
        const savecard = [];
        for(const id in storedcard){
            const addedproduct = products.find(product => product.id === id);
            if(addedproduct){
                const quantity = storedcard[id];
                addedproduct.quantity = quantity;
                savecard.push(addedproduct);
            }
        }
        setCard(savecard);
    } ,[products])
    return [card, setCard];
}

export default useCard;