import React from "react";
import MenuItem from "./menu-item";
import Styles from "../Styles.scss";

class Directory extends React.Component{

    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title : "hats",
                    imageUrl : "https://media.istockphoto.com/photos/confident-mature-man-with-eyeglasses-and-hat-picture-id1315236014?s=612x612",
                    id : 1
                },

                {
                    title : "sneakers",
                    imageUrl : "https://media.istockphoto.com/photos/womens-feet-in-sneakers-gym-training-in-sport-shoes-womans-white-on-picture-id1307717764?s=612x612",
                    id : 2
                },

                {
                    title : "jackets",
                    imageUrl : "https://media.istockphoto.com/photos/leather-jacket-dude-picture-id658909718?s=612x612",
                    id : 3
                },

                {
                    title : "men",
                    imageUrl : "https://media.istockphoto.com/photos/young-handsome-man-with-beard-wearing-casual-sweater-standing-over-picture-id1212702108?s=612x612",
                    id : 4,
                    size:"large"
                },

                {
                    title : "women",
                    imageUrl : "https://media.istockphoto.com/photos/beautiful-woman-smiling-with-crossed-arms-picture-id1289220545?s=612x612",
                    id : 5,
                    size:"large"
                }


            ]
        };
    }

    render(){
        return (
            <div className="directory">
                {
                    this.state.sections.map(({title, imageUrl, id, size})=>(<MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>))
                }
            </div>
        );
    }
}


export default Directory;