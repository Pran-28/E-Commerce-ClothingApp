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
                    id : 1,
                    linkUrl : "hats"
                },

                {
                    title : "sneakers",
                    imageUrl : "https://media.istockphoto.com/photos/womens-feet-in-sneakers-gym-training-in-sport-shoes-womans-white-on-picture-id1307717764?s=612x612",
                    id : 2,
                    linkUrl:""
                },

                {
                    title : "jackets",
                    imageUrl : "https://media.istockphoto.com/photos/leather-jacket-dude-picture-id658909718?s=612x612",
                    id : 3,
                    linkUrl:""
                },

                {
                    title : "men",
                    imageUrl : "https://media.istockphoto.com/photos/young-handsome-man-with-beard-wearing-casual-sweater-standing-over-picture-id1212702108?s=612x612",
                    id : 4,
                    size:"large",
                    linkUrl:""
                },

                {
                    title : "women",
                    imageUrl : "https://media.istockphoto.com/photos/beautiful-woman-smiling-with-crossed-arms-picture-id1289220545?s=612x612",
                    id : 5,
                    size:"large",
                    linkUrl:""

                }


            ]
        };
    }

    render(){
        return (
            <div className="directory">
                {
                    this.state.sections.map(({id, ...otherSectionProps})=>(<MenuItem key={id} {...otherSectionProps}
                    />))
                }
            </div>
        );
    }
}


export default Directory;