import React from "react";
import styled from "styled-components";

const ClassListingCard = styled.div`
  padding: 0px 8px;
  margin: 1rem 0;
  border-radius: 4px;
  border: 1px solid hsl(265deg 61% 36%);
  border-bottom: 3px solid hsl(265deg 61% 36%);
`;

const ListingSection = styled.div`
  text-align: start;
  padding-top: 1rem;
`;

export const ClassListing = ({ classListing }) => {
  return (
    <ClassListingCard>
      <h2>{classListing.class_name}</h2>
      <h3>{classListing.provider_name}</h3>
      <div>
        <ListingSection>
          <p>{classListing.venue_name}</p>
          <p>{classListing.venue_address}</p>
        </ListingSection>
        <ListingSection>
          <p>Day: {classListing.usual_day}</p>
          <p>Time: {classListing.start_time}</p>
        </ListingSection>
        <ListingSection>
          <p style={{ paddingBottom: "1rem" }}>£{classListing.price}</p>
        </ListingSection>
      </div>
    </ClassListingCard>
  );
};
