/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { itemsCount, pageSize } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if(pagesCount === 1) return null
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul class="pagination">
        {pages.map(page => (
          <li key={page} class="page-item">
            <a class="page-link" href="#">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
