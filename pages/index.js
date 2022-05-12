import axios from "axios";
import Link from "next/link";
import { List, Avatar } from "antd";

export async function getStaticProps() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data, time: new Date().toString() },
    revalidate: 10, // In seconds
  };
}

const Home = ({ data, time }) => {
  return (
    <div>
      <h4> generate page time: {time}</h4>{" "}
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(post) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<Link href={`/post/${post.id}`}>{post.title}</Link>}
              description={post.body}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Home;
