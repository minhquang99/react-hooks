import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.array,
};

PostList.defaultProps = {
    posts: null
}

function PostList(props) {
    //obj destructring
    const { posts } = props;
    return (
        <ul className="post-lis">
            {posts.map((post) => (
                <li key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
    );
}

export default PostList;