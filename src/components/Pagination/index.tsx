import { FC } from "react";
import styled from "styled-components";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";

const Pagination: FC<ReactPaginateProps> = ({
  pageCount,
  pageRangeDisplayed,
  marginPagesDisplayed,
  onPageChange,
}) => {
  return (
    <Paginate
      nextLabel=">"
      onPageChange={onPageChange}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      pageCount={pageCount}
      previousLabel="<"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-nav"
      previousLinkClassName="page-nav-link"
      nextClassName="page-nav"
      nextLinkClassName="page-nav-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
    />
  );
};

const Paginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  .page-item {
    &.active {
      .page-link {
        color: #fff;
        background-color: #0d0d0d;
      }
    }

    .page-link {
      color: #000;
      background-color: inherit;
      border: none;
      font-size: 12px;
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0;
      box-shadow: none !important;
    }

    & + .page-item {
      margin-left: 4px;
    }
  }

  .page-nav {
    margin: 0px 8px;

    &.disabled {
      .page-nav-link {
        background: rgba(255, 255, 255, 0.15);
      }
    }

    &-link {
      color: inherit;
      background: rgba(255, 255, 255, 0.2);
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default Pagination;
