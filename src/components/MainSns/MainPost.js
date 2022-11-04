import "../../styles/MainSns/MainPost.scss";

function Post(props){

    const { post_id, post } = props;
    return(
        <>
        <div className="post_Container">
            <div className="post_num">{post}{post_id}</div>
        </div>
        </>
    );
}
export default Post;