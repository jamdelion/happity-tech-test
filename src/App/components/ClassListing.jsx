import React from "react";
import styled from "styled-components";

const ClassListingCard = styled.div`
  padding: 0px 8px;
  margin: 1rem 0;
  border-radius: 4px;
  border: 1px solid hsl(265deg 61% 36%);
  border-bottom: 3px solid hsl(265deg 61% 36%);
`;

export const ClassListing = ({ classListing }) => {
  return (
    <ClassListingCard>
      <h2>{classListing.class_name}</h2>
      <h3>{classListing.provider_name}</h3>
      <div>
        <p>{classListing.venue_name}</p>
        <p>{classListing.venue_address}</p>
      </div>
    </ClassListingCard>
  );
};
