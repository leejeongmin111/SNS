import "../../styles/JobSns/JobPost.scss";

function Post(props){

    const { bd_content, bd_id } = props;
    return(
        <>
        <div className="post_Container">
            <div className="post_num">{bd_content}{bd_id}</div>
        </div>
        </>
    );
}
export default Post;