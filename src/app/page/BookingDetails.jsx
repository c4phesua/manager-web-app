import React, { useEffect, useState } from 'react';
import { ENTITY } from '../util/Constant';
import Services from '../util/Services';

function BookingDetails(props) {
  const { params: { id } } = props.match;
  const [booking, setBooking] = useState({});
  const entity = ENTITY.BOOKING;

  const getBooking = () => {
    Services.searchEntity(entity, id)
    .then(({data}) => setBooking(data));
  }

  useEffect(() => {
    getBooking();
  }, [])

  console.log(booking);

  return (
    <div>
      
    </div>
  );
}

export default BookingDetails;