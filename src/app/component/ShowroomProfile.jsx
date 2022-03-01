import { Avatar, Box, Button, Card, CardActions, CardContent, Divider, Typography } from "@material-ui/core";

const ShowroomProfile = ({ showroom, handleChangeAvatar, ...props }) => {

  const renderAvatar = () => {
    if (showroom.avatar) {
      return showroom.avatar;
    }
    if (showroom.temporaryAvatar) {
      return showroom.temporaryAvatar;
    }
    return './static/images/defaultAvatar.png';
  }

  const avatar = renderAvatar();


  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={avatar}
            sx={{
              height: 64,
              mb: 2,
              width: 64
            }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            {showroom.name}
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="body2"
          >
            {showroom.phoneNumber}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {showroom.address}
          </Typography>
          {/* <Typography
            color="textSecondary"
            variant="body2"
          >
            {user.timezone}
          </Typography> */}
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Đổi ảnh đại diện
        </Button>
      </CardActions>
    </Card>
  )
};

export default ShowroomProfile;