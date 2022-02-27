import { Avatar, Box, Button, Card, CardActions, CardContent, Divider, Typography } from "@material-ui/core";

const AccountProfile = (props) => {

  const { user } = props;
  const avatar = user?.avatar ? user.avatar : './static/images/defaultAvatar.png';

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
            {user.firstname} {user.lastname}
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="body2"
          >
            {user.email}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {`${user.address}`}
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

export default AccountProfile;