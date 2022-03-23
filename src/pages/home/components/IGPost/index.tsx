import IGUser from "components/IGUser"
import Comment from "./Comment"

type IGPostProps = {
  account: string;
  location: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  comments: number;
  createTime: string;
  
};

const IGPost:React.FC<IGPostProps> = ({
  account,
  location,
  avatar,
  photo,
  likes,
  description,
  hashTags,
  comments,
  createTime,
}) => {
  return (
    <div className="shadow-md pb-4 lg:mb-8">
      <IGUser account={account} location={location} avatar={avatar} />
      <img src={photo} alt="" />
      <Comment likes={likes} description={description} hashTags={hashTags} comments={comments} createTime={createTime} account={account} />
    </div>
  )
}

export default IGPost