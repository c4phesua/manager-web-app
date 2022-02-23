
const ProfileImage = ({ url, name, diameter}) => {

  const renderImage = () => {
    return (
      <img
        width={diameter}
        height={diameter}
        className="rounded-circle"
        src={url}
        title={name}
        alt={name}
      />
    );
  }
  return (
    <div className="avatar">
      {renderImage()}
    </div>
  )
}

export default ProfileImage;