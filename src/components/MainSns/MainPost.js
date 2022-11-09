import "../../styles/MainSns/MainPost.scss";

function Post(props){

    const { bd_content, bd_id,bd_likes } = props;
    return(
        <>
        <div className="post_Container">
            <div className="post_num">
                <span className="img_content" >{bd_content}</span>
                {/* <span className="img_likes">좋아요 {bd_likes}개</span> */}
            </div>
        </div>
        </>
    );
}
export default Post;