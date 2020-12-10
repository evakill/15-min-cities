import React from 'react'
import Map from './Map'
import './App.css'
import { BW, JH, MJ, MY, VK, ZR, AT, EK } from'./img/avatars'
import { AT_text, BW_text, VK_text, JH_text, MY_text, MJ_text, ZR_text } from'./text'
import pin from './img/pin.svg'

function App() {
    const maps = [
        {
            name: 'AT',
            displayName: 'Alex',
            neighborhood: 'Rittenhouse, Center City',
            zoomLat: 39.9499,
            zoomLng:  -75.1704,
            avatar: AT,
            text: AT_text
        },
        {
            name: 'JH',
            displayName: 'John',
            neighborhood: 'Graduate Hospital, South Philadelphia',
            zoomLat: 39.943,
            zoomLng: -75.175,
            avatar: JH,
            text: JH_text,
        },
        {
            name: 'ZR',
            displayName: 'Zoey',
            neighborhood: 'University City, West Philadelphia',
            zoomLat: 39.952,
            zoomLng: -75.210,
            avatar: ZR,
            text: ZR_text
        },
        {
            name: 'MY',
            displayName: 'Melanie',
            neighborhood: 'Ogontz, North Philadelphia',
            zoomLat: 40.048,
            zoomLng: -75.148,
            avatar: MY,
            text: MY_text,
        }, {
            name: 'MJ',
            displayName: 'Maura',
            neighborhood: 'East Germantown, North Philadelphia',
            zoomLat: 40.048,
            zoomLng: -75.148,
            avatar: MJ,
            text: MJ_text,
        },
        {
            name: 'BW',
            displayName: 'Bob',
            neighborhood: 'Mt. Airy, Northwest Philadelphia',
            zoomLat: 40.057,
            zoomLng: -75.190,
            avatar: BW,
            text: BW_text,
        },
        {
            name: 'VK',
            displayName: 'Vicky',
            neighborhood: 'Mt. Airy, Northwest Philadelphia',
            zoomLat: 40.059,
            zoomLng: -75.185,
            avatar: VK,
            text: VK_text,
        }
    ]

    return (
        <>
            <div className="app">
                <div className="header">
                    <h1 className="title">Stories of the 15-Minute City</h1>
                    <p className="subtitle">A quantitative and qualitative analysis of accessibility in Philadelphia</p>
                </div>
                <h3 className="intro-header">Introduction</h3>
                <p className="intro-text">
                    First popularized by the mayor of Paris, Anne Higaldo, the 15-minute city is one where all residents can access their basic needs within a 15-minute walk, bike, or transit ride from their place of residence. This standard aims to decentralize urban spaces, equitably distribute amenities and transit infrastructure, and promote sustainability by reducing the use of private vehicles.
                    <br /><br />
                    In this project, I investigate the 15-minute city framework in the context of Philadelphia. My research method was twofold: a programmatic analysis of the routing time between residential locations and nearby amenities, and qualitative interviews focused on the transportation habits and experiences. Through the integration of these methods, I hope to illustrate the extent to which the 15-minute city applies Philadelphia, and the stories of how people experience it.
                </p>
                <h3 className="intro-header">Methodology</h3>
                <p className="intro-text">
                     The amenity categories are: groceries, restaurants, schools, healthcare, recreation & greenspace, retail, and entertainment & culture. I scraped the amenity locations from datasets from <a href="https://www.opendataphilly.org/" target="_blank">OpenDataPhilly</a> and the <a href="https://developers.google.com/places/web-service/overview" target="_blank">Google Places API</a>.
                     <br /><br />
                     Although these sources gave me a pretty comprehensive sample of datapoints, the amenity sets are not perfect. The scraping missed some points and returned others that are no longer operational. In addition, there is no hierarchy of quality in the amenities. For example, in the groceries dataset, the locations range from farmers markets to ACME supermarkets to 7/11's. All of these provide different level of amenity within the grocery category.
                    <br /><br />
                     I created the routing algorithm based on results from the <a href="https://developer.here.com/documentation/matrix-routing-api/8.2.0/dev_guide/index.html" target="_blank">HERE Developer Matrix Routing API</a> and the <a href="https://www.microsoft.com/en-us/maps/distance-matrix" target="_blank">Bing Maps Matrix API</a>. These take in an input of origin points (residential locations), destination points (amenity locations), and transportation mode (walking, biking, or transit). They output a matrix which gives the travel time and distance from each origin to each destination given the specified mode. I found the API's to be fairly accurrate in their results. However, from personal experience and the experiences shared by the interviewees, public transit schedules in Philly are not very reliable, often arriving several minutes early or late (on a good day). I added 4 minutes to the travel time on transit routes to account for this variance.
                    <br /><br />
                    I conducted interviews with connections from my personal network as well as people introduced to me through professors and staff at the Urban Studies department. I'd like to thank all of my interviewees for taking part in this project and sharing their thoughts and experiences!
                </p>
                <h3 className="intro-header">About the site</h3>
                <p className="intro-text">
                    The sections below correspond to the "story" of 15-minute city for each interviewee. The maps display amenity locations accessible within a 15-minute walk, bike, or transit ride from the residence of each interviewee. The results can be filtered by mode of transportation or amenitiy type using the selection boxes to the left of the map. The residence of the interviewee is represented by the pin icon. The amenity results are color coded by category based on the key in the filter bar. I write about my conclusions from the interview and analyze the data in the section above the map.
                </p>
                { maps.map(m => (
                    <div key={m.name} className="person-container">
                        <div className="interview-section">
                            <img src={m.avatar} className="avatar"/>
                            <div>
                                <div className="person-header">
                                    <span className="name">{m.displayName}</span>
                                    <span className="neighborhood">
                                        <img className="pin" src={pin} />
                                        {m.neighborhood}
                                    </span>
                                </div>
                                {m.text}
                            </div>
                        </div>
                        <Map {...m} />
                    </div>
                ))}
            </div>
            <div className="footer">
                <img src={EK} className="footer-avatar" />
                Created by Eva Killenberg for URBS419 @ uPenn.
            </div>
        </>
    )
}

export default App
