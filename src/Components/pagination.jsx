//inputs--> no of products, page size, active page

import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { pageSize, countOfProduct, activePage, changePage } = props;

  const pagesNo = Math.ceil(countOfProduct / pageSize);
  const pages = _.range(1, pagesNo + 1);

  return (
    <nav>
      {/* to disappear pagination if pageno =< one */}
      {pagesNo > 1 && (
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={page === activePage ? "page-item active" : "page-item"}
            >
              <a
                onClick={() => changePage(page)}
                className="page-link"
                aria-disabled="true"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Pagination;
