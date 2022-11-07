import "../../styles/Special/SQuestionHeader.scss";
import SearchIcon from "../../images/search.png";

function QuestionHeader() {
  return (
    <div className="container_header">
      <div className="container_text">
        <span className="header_text">여기는 코딩 문답 페이지</span>
      </div>
      <div className="container_search">
        <div class="wrap">
          <div class="search">

            {/* 검색 창 */}
            {/* <input
              type="text"
              class="searchTerm"
              placeholder="Search for Post"
            />
            <button type="submit" class="searchButton">
              <img className="searchIcon" src={SearchIcon} alt="searchIcon" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuestionHeader;
