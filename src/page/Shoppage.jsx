import React from "react";
import CollectionPreview from "../component/previewcollection";
import ShopData from "../Shopdata";
import Styles from "../Styles.scss";

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
             collections: ShopData
        };
    }

    render(){
        const {collections} = this.state;
        return( 
            
            <div className="shoppage">
                {
                    collections.map(({id, ...otherCollections})=>(
                        <CollectionPreview key={id} {...otherCollections}/>
                    ))
                }
            </div>
            
          
        );
      
    }
}

export default ShopPage;