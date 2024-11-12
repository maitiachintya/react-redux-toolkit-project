import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './posts/PostSlice'

const Postview = () => {
    const { isLoding, postValue, error } = useSelector(state => state.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    return (
        <div>
            <h1>posts</h1>
            {isLoding && <h3>...loding</h3>}
            {error && <h3>{error}</h3>}
            {postValue && postValue.map(post => (
                <React.Fragment key={post.id}>
                    <h3>{post.userId}.{post.title}</h3>
                    <h5>{post.body}</h5>
                    <hr />

                </React.Fragment>
            ))}
        </div>
    )
}

export default Postview