import * as React from 'react';
import { fetchPostsResource } from '../../../../../utils/fakeAPI';

const resource = fetchPostsResource();

export const PostsFetchBeforeRender: React.FC = () => {
  const posts = resource.read();

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
};
