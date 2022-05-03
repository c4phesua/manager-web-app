import React from 'react';
import { Avatar, Box, Card, CardContent, Divider, Typography } from "@material-ui/core";
import Carousel from 'react-bootstrap/Carousel';
import { toVND } from '../util/Helper';
import { next } from '../util/Count';


function PackageProfile({ pkg, ...props }) {
  console.log(pkg);

  const renderSliderImage = (images) => {
    return (
      <Carousel>
        {
          images && images.length > 0 && images.map((image) => (
            <Carousel.Item key={next()}>
              <img
                className="d-block w-100"
                src={image}
                alt="First slide"
              />
            </Carousel.Item>
          ))
        }
      </Carousel>
    )
  }

  console.log(pkg);

  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            height: '60vh'
          }}
        >
          {renderSliderImage(pkg.temporaryImages)}
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            Tên: {pkg.name}
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="body2"
          >
            Địa điểm: {pkg.location}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            Thời gian thực hiện: {pkg.duration}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            Giá ước tính: {toVND(pkg.price)}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            Mô tả: {pkg.description}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
}

export default PackageProfile;
