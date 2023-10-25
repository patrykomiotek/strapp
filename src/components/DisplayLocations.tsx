import React from "react";
import { useQuery } from "@apollo/client";

import { GET_LOCATIONS } from "../gql/Queries";

interface Location {
  id: number;
  name: string;
  description: string;
  photo: string;
}

interface LocationsResponse {
  locations: Location[];
}

export const DisplayLocations = () => {
  const { loading, error, data } = useQuery<LocationsResponse>(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <p>No data</p>;

  return (
    <div>
      {data.locations.map(({ id, name, description, photo }) => (
        <div key={id}>
          <h3>{name}</h3>
          <img
            width="400"
            height="250"
            alt="location-reference"
            src={`${photo}`}
          />
          <br />
          <b>About this location:</b>
          <p>{description}</p>
          <br />
        </div>
      ))}
    </div>
  );
};
