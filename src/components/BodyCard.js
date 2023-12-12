import React, { Component } from "react";
import Ca from "./Ca";


export class BodyCard extends Component {
  articles= [
    {
      "source": {
        "id": null
      },
      "title": "Goa",
      "description": "A popular and fun-filled destination, Goa has many resorts and beaches that can host a lively and memorable wedding.",
      "url": "/",
      "urlToImage": "src/components/Goa.jpg"
    },
    {
      "source": {
        "id": null
      },
      "title": "Udaipur",
      "description": "The city of lakes and palaces, Udaipur offers a royal and romantic setting for a destination wedding",
      "url": "/u",
      "urlToImage":"src/components/udaipur.jpg"
    },
    {
      "source": {
        "id": null
      },
      "title": "Kerela",
      "description": "For a serene and scenic wedding, Kerala is a great option.Kerala also offers a rich culture and cuisine that will add to the charm of your wedding14.",
      "url": "/k",
      "urlToImage": "src/components/DoubleTree-by-Hilton-Hotel-Goa.jpg"
    },
    {
      "source": {
        "id": null
      },
      "title": "Andaman and Nicobar Islands",
      "description": "If you want a tropical and exotic wedding, the Andaman and Nicobar Islands are a dream destination",
      "url": "/a",
      "urlToImage": "src/components/andaman.jpg"
    },
    {
      "source": {
        "id": null
        
      },
      "title": "Agra",
      "description": "If you want to celebrate your love in the city of love, Agra is the perfect place for you. You can have a romantic wedding in front of the Taj Mahal, the symbol of eternal love",
      "url": "/ag",
      "urlToImage":"src/components/agra.jpg"
    },
    {
      "source": {
        "id": null
      },
      "title": "Jaisalmer",
      "description": "For a desert-themed wedding, Jaisalmer is a unique and stunning choice. You can get married in the golden sand dunes, under the starry sky, or in the majestic forts and havelis that reflect the rich culture and heritage of Rajasthan.",
      "url": "/ja",
      "urlToImage": "src/components/andaman.jpg"
    },
    {
      "source": {
        "id": null
      },
      "title": "Mussoorie",
      "description": "The Doon Valley, the majestic Himalayas, and a brilliant night sky filled with dazzling stars provide the perfect setting for your D-Day.",
      "url": "/mu",
      "urlToImage":"C:\Users\Asus\Desktop\marriage\src\components\agra.jpg"
      
    }
  ]
  constructor(){
    super();
    this.state={
       articles:this.articles,
       loading:true
    }
  }
  render() {
    return (
      <div className="container my-5">
        <h2>Wedding Places</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4 "  key={element.title}>
            <Ca  title={element.title} desc={element.description} urlToImage={element.urlToImage} />
          </div>
               
        })}
        </div>
      </div>
    );
  }
}

export default BodyCard;
