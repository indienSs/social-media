import { FC } from "react";
import ContentLoader from "react-content-loader";

const UserCardLoader: FC = () => (
  <ContentLoader
    speed={2}
    width={150}
    height={220}
    viewBox="0 0 150 220"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="150" height="220" />
  </ContentLoader>
);

export default UserCardLoader;
