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
                    First popularized by the mayor of Paris, Anne Higaldo, the <a href="https://www.fastcompany.com/90456312/pariss-mayor-has-a-dream-for-a-15-minute-city" target="_blank">15-minute city</a> is one where all residents can access their basic needs within a 15-minute walk, bike, or transit ride from their place of residence. This urbanist trend is catching on, and <a href="https://www.bloomberg.com/news/features/2020-11-12/paris-s-15-minute-city-could-be-coming-to-an-urban-area-near-you" target="_blank">American cities</a> have begun to integrate the idea into their planning practices. This standard aims to decentralize urban spaces, equitably distribute amenities and transit infrastructure, and promote sustainability by reducing the use of private vehicles.
                    <br /><br />
                    In this project, I investigate the 15-minute city framework in the context of Philadelphia. My research method was twofold: 1) a programmatic analysis of the routing time between residential locations and nearby amenities, and 2) qualitative interviews focused on transportation habits and experiences. Through the integration of these methods, I hope to illustrate the extent to which the 15-minute city framework applies to Philadelphia, and the stories of how people experience it.
                </p>
                <h3 className="intro-header">Methodology</h3>
                <p className="intro-text">
                     The amenity categories are: groceries, restaurants, schools, healthcare, recreation & greenspace, retail, and entertainment & culture. I scraped the amenity locations from datasets from <a href="https://www.opendataphilly.org/" target="_blank">OpenDataPhilly</a> and the <a href="https://developers.google.com/places/web-service/overview" target="_blank">Google Places API</a>.
                     <br /><br />
                     Although these sources gave me a pretty comprehensive sample of datapoints, the amenity sets are not perfect. The scraping missed some points and returned others that are no longer operational. In addition, there is no hierarchy of quality in the amenities. For example, in the groceries dataset, the locations range from farmers markets to ACME supermarkets to 7/11's. All of these provide different levels of amenity within the grocery category.
                    <br /><br />
                     I created a routing algorithm based on results from the <a href="https://developer.here.com/documentation/matrix-routing-api/8.2.0/dev_guide/index.html" target="_blank">HERE Developer Matrix Routing API</a> and the <a href="https://www.microsoft.com/en-us/maps/distance-matrix" target="_blank">Bing Maps Matrix API</a>. These take in an input of origin points (residential locations), destination points (amenity locations), and transportation mode (walking, biking, or transit). They output a matrix which gives the travel time and distance from each origin to each destination given the specified mode. I found the API's to be fairly accurrate in their results. However, from personal experience and the experiences shared by the interviewees, public transit schedules in Philly are not very reliable, often arriving several minutes early or late (on a good day). I added 4 minutes to the travel time on transit routes to account for this variance.
                    <br /><br />
                    I conducted interviews with connections from my personal network as well as people introduced to me through professors and staff at the Urban Studies department. I'd like to thank all of my interviewees for taking part in this project and sharing their thoughts and experiences!
                </p>
                <h3 className="intro-header">About the site</h3>
                <p className="intro-text">
                    The sections below correspond to the "story" of a 15-minute city for each interviewee. I write about my conclusions from the interview and analyze the map data in the written section above the map. The maps display amenity locations accessible within a 15-minute walk, bike, or transit ride from the residence of each interviewee. The residence of the interviewee is represented by the pin icon and the colored circles represent the amenity locations. The circles are color-coded corresponding to the data bubbles on the right side of the map. The results can be filtered by mode of transportation or amenity type using the selection boxes to the left of the map. The bubbles to the right of the map display the number of amenities currently displayed, separated by category.
                    <br /> <br />
                    Meet the interviewees!
                </p>
                <div className="interviewees">
                    {maps.map(m => (
                        <div className="interviewee">
                            <img src={m.avatar} className="intro-avatar"/>
                            <div className="intro-name">
                                {m.displayName}
                            </div>
                            <div className="intro-neighborhood">
                                {m.neighborhood}
                            </div>
                        </div>
                    ))}
                </div>

                <h3 className="intro-header">Stories</h3>

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
                        {<Map {...m} />}
                    </div>
                ))}

                <h3 className="intro-header">Conclusions</h3>
                <p className="intro-text">
                    I analyzed a small sample of Philadelphia neighborhoods and took the accounts of only a few residents. This is not a comprehensive analysis of the city as a whole, rather a focused study based on integrating qualitative and quantitative research methods. I drew two conclusions from my work that I believe to be important when considering the 15-minute city in the context of Philadelphia.
                    <br/><br/>

                    <b>1) The adequacy of amenities is relative to their degree of cultural fit</b>
                    <p className="conclusion-section">
                        The numerical results of the algorithm did not always correlate with the interviewee’s satisfaction with accessible amenities. The algorithm run from Bob’s residential location returned the least number of total amenity results. However, he expressed that he lives––and is extremely satisfied with––the “15-minute” lifestyle in his neighborhood. According to the algorithm, John can reach four times the number of amenities as Bob, yet John relies on his car to access amenities which are further away yet better suit he and his family’s needs. Melanie has access to a very similar number of amenities as Bob, yet uses her car for nearly every trip to reach better quality amenities further away. Those who do not have access to a private vehicle or the time to make this further commute would not have the ability to fulfill their needs in this way. This indicates that additional qualifying factors about the amenity locations are necessary for a complete assessment.
                        <br/><br/>
                        However, it is impossible to make a universal qualifying factor for amenities––individuals have different needs and preferences, and the perceived quality of amenity is highly subjective. I believe these factors and preferences amount to the idea of cultural preference. Philadelphia neighborhoods offer varied and diverse amenities and aesthetics because they house varied and diverse populations and have unique historic origins. Creating a 15-minute city does not mean that each of these neighborhoods should be redeveloped to each have the same balanced constitution of amenities and transportation options––this would destroy the fabric of the city, diminish neighborhood identity, contribute to gentrification, and fail to serve minority populations. Rather, the neighborhoods should be developed in ways that increase amenity options that appeal to the existing communities needs and wants. In this way, neighborhood culture is preserved, and each is equitably supported and resourced.
                        <br/><br/>
                        As Vicky said in her interview, there is no “perfect neighborhood” for her in Philadelphia. While this will likely be the case for the majority individuals in any city, developing these culturally diverse amenity hubs gives a set of good options to people of all demographics and economic means.
                    </p>

                    <b> 2) Better accessibility requires neighborhood interconnectivity.</b>
                    <p className="conclusion-section">
                        The results revealed that public transit was not as effective as expected in transporting people to essential amenities within 15 minutes. This was particularly evident in John’s neighborhood, Graduate Hospital. John is not far from Center City, University City, Queen Village, and Passayunk, each of which has a wider range of amenities than is offered in his immediate surroundings. However, the routing algorithm showed only the amenities around Rittenhouse were accessible via transit within 15-minutes. John expressed that using transit to get to other nearby neighborhoods is impossible or extremely inefficient, and therefore he relies on his car or bike to access other areas of the city. This pattern is seen in other neighborhoods as well––most transit routes take riders into Center City, where they would transfer to another line to take them to their destination. While this pattern of transportation planning may be efficient in a city where most transit riders are traveling in or out of a centralized business district, a 15-minute city would have many, geographically-dispersed amenity hubs. Additionally, residents would use public transit for a variety of trips, not just a commute. Residents therefore would have more of a need for a decentralized transit system that distributes service more equally between and around different neighborhoods. If this is accomplished, people can reach more amenities within 15-minutes using transit.
                        <br/><br/>
                        In addition, with a decentialized transit system it would be easier to break the 15-minute bubble for extended trips. A large flaw with the 15-minute city concept is that it has no guidelines for transportation needs that extend beyond the 15-minute radius of an individual. Nearly all interviewees expressed that they have needed to travel a longer distance for school, work, retail needs, social visits, or for specific entertainment or recreation purposes. For example, Zoey travels from University City to Fishtown for dance lessons, as a teenager Melanie traveled across the city to attend a private school, and Vicky has close friends in West Philly which she likes to spend time with. These fall outside of the qualification of “basic amenities”, but are important parts of the lifestyle of each person. The interviewees expressed that these trips were often difficult on transit, involving transfers and indirect routes that made the travel time much longer than it would be by car. Even if a person lives in a 15-minute city, transportation infrastructure should support neighborhood connectivity which would allow people to make these longer trips efficiently with public transit.
                    </p>

                    <br />
                    In conclusion, additional, large-scale quantitative modeling and qualitative investigation would be necessary to fully understand how a 15-minute city would operate in Philadelphia. I believe development of culturally diverse amenity hubs and decentralization of transportation services would be a good start.
                    <br/><br/>
                    Beyond physical changes, the 15-minute city model requires a cultural shift to be fully realized. Ultimately, individuals make their own decisions of which amenities to utilize and how to access them. The 15-minute city is contingent on the assumption that individuals will prioritize public transportation modes over private vehicles and local businesses over box stores. To many people, this is a dramatic shift in how they operate from day to day. However, this cultural buy-in is essential to the success of the idea. The interviews confirmed known problems with transit, biking, and walking in Philadelphia: there is a stigma against public transit, people (especially females) feel uncomfortable using these modes alone or at night, and bike safety measures are not sufficient to make people feel comfortable biking on the street. There are infrastructural and operational improvements that must be made to address these problems, but the issues are as much cultural as they are tangible. Many times, the root of this statement is, “People like me do not use transportation in this way.” The more people that use public transit, bike, and walk––and the more diverse the population––the more comfortable all people will become using these modes as their default transportation method.
                    <br/><br/>
                    The 15-minute city presents an idyllic alternative to the problems facing many American cities. The idea that urban residents could spend less time in transit, have access to quality amenities, and not rely on a private vehicle is appealing to both city-dwellers and city planners. However, there is structural and cultural development needed before this goal can be realized. This project has proposed new ways to research a 15-minute city using qualitative and quantitative data, and presented several hypotheses of how the 15-minute city might exist in Philadelphia.
                </p>
            </div>
            <div className="footer">
                <img src={EK} className="footer-avatar" />
                Created by Eva Killenberg for URBS419 @ uPenn.
            </div>
        </>
    )
}

export default App
