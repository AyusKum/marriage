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
      "urlToImage": "https://plus.unsplash.com/premium_photo-1697729435209-97772693b7da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29hfGVufDB8fDB8fHww"
    },
    {
      "source": {
        "id": null
      },
      "title": "Udaipur",
      "description": "The city of lakes and palaces, Udaipur offers a royal and romantic setting for a destination wedding",
      "url": "/u",
      "urlToImage":"https://plus.unsplash.com/premium_photo-1697730426227-9056296a0315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVkYWlwdXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
      "source": {
        "id": null
      },
      "title": "Kerela",
      "description": "For a serene and scenic wedding, Kerala is a great option.Kerala also offers a rich culture and cuisine that will add to the charm of your wedding14.",
      "url": "/k",
      "urlToImage": "https://images.unsplash.com/photo-1603680887147-dceacf6e19e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtlcmVsYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "source": {
        "id": null
      },
      "title": "Andaman and Nicobar Islands",
      "description": "If you want a tropical and exotic wedding, the Andaman and Nicobar Islands are a dream destination",
      "url": "/a",
      "urlToImage": "https://images.unsplash.com/photo-1617653202545-931490e8d7e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzfGVufDB8fDB8fHww"
    },
    {
      "source": {
        "id": null
        
      },
      "title": "Agra",
      "description": "If you want to celebrate your love in the city of love, Agra is the perfect place for you. You can have a romantic wedding in front of the Taj Mahal, the symbol of eternal love",
      "url": "/ag",
      "urlToImage":"https://images.unsplash.com/photo-1612810436541-336b73fbcf9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWdyYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "source": {
        "id": null
      },
      "title": "Jaisalmer",
      "description": "For a desert-themed wedding, Jaisalmer is a unique and stunning choice. You can get married in the golden sand dunes, under the starry sky, or in the majestic forts and havelis that reflect the rich culture and heritage of Rajasthan.",
      "url": "/ja",
      "urlToImage": "https://media.istockphoto.com/id/1303019513/photo/various-views-of-the-jaiselmer-fort.webp?b=1&s=170667a&w=0&k=20&c=T4be0nutKV3FK3Lqr6eXpp97EkyMUd-efiV050X9pXA="
    },
    {
      "source": {
        "id": null
      },
      "title": "Mussoorie",
      "description": "The Doon Valley, the majestic Himalayas, and a brilliant night sky filled with dazzling stars provide the perfect setting for your D-Day.",
      "url": "/mu",
      "urlToImage":"https://images.unsplash.com/photo-1583143874828-de3d288be51a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzc29vcmllfGVufDB8fDB8fHww"
      
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
