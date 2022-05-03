import { Avatar, Box, Card, CardContent, Divider, Typography } from "@material-ui/core";

const StylePreview = ({ style, handleChangeAvatar, ...props }) => {

  const renderAvatar = () => {
    if (style.temporaryAvatar) {
      return style.temporaryAvatar;
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
            flexDirection: 'column',
            height: '40vh'
          }}
        >
          <img alt="preview" src={avatar} style={{maxWidth: 400, maxHeight: 300}}/>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            Tên: {style.name}
          </Typography>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="body2"
          >
            Mô tả: {style.description}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
    </Card>
  )
};

export default StylePreview;