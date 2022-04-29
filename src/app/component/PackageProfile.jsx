import React from 'react';
import { Avatar, Box, Card, CardContent, Divider, Typography } from "@material-ui/core";
import Carousel from 'react-bootstrap/Carousel';
import { toVND } from '../util/Helper';


function PackageProfile({ pkg, ...props }) {

  const renderSliderImage = (images) => {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://fpt-sba-images.s3.ap-southeast-2.amazonaws.com/e0c833a82dfd4a37990dc49c15f77535"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://fpt-sba-images.s3.ap-southeast-2.amazonaws.com/e0c833a82dfd4a37990dc49c15f77535"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://fpt-sba-images.s3.ap-southeast-2.amazonaws.com/e0c833a82dfd4a37990dc49c15f77535"
            alt="First slide"
          />
        </Carousel.Item>
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
          {renderSliderImage(pkg)}
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
