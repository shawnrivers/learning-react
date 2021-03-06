import * as React from 'react';
import {
  fetchPostsResource,
  Post,
  Resource,
} from '../../../../../../../utils/fakeAPI';
import { DataContainer } from '../../../../../../atoms/DataContainer';

const Posts: React.FC<{
  resource: Resource<Post[]>;
}> = (props) => {
  const posts = props.resource.read();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
};

const PostsContainer: React.FC = () => {
  const postsResource = React.useMemo(() => fetchPostsResource(), []);

  return (
    <DataContainer>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Posts resource={postsResource} />
      </React.Suspense>
    </DataContainer>
  );
};

export const SuspenseWithFetch: React.FC = () => {
  return (
    <section>
      <h2>Suspense with fetch API</h2>
      <PostsContainer />
    </section>
  );
};
