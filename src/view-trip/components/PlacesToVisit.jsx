import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  const itinerary = trip?.TripData?.itinerary;
  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>

      <div>
        {itinerary &&
          Object.entries(itinerary).map(([dayKey, dayData]) => (
            <div className="mt-5" key={dayKey}>
                <div>
              <h2 className="font-medium text-lg">{dayKey}</h2>
              <div className='grid md:grid-cols-2 gap-5'>
              {dayData.activities &&
                dayData.activities.map((activity, index) => (
                  <div className="my-3" key={index}>
                    
                     
                      <h2 className="font-medium text-sm text-orange-600">
                      🕙 {activity.timeTravel}
                      </h2>
                      <PlaceCardItem place={activity}/>
                   

                    {/* <p>{activity.placeDetails}</p>
                <img
                  src={activity.placeImageUrl}
                  alt={activity.placeName}
                  className='rounded-xl'
                /> */}
                  </div>
                ))}
                </div>
            </div>
            </div>
          ))}
      </div>
    </div>

  );
}

export default PlacesToVisit;

 {/* <h2 className='font-semibold'>{activity.placeName}</h2> */}
