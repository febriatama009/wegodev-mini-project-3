import classnames from "classnames";
import PropTypes from "prop-types";

import { formatDate } from "../utils/formatDate";

const NewsCard = ({
  src,
  title,
  publishedAt,
  author,
  sourceName,
  description,
  url,
  notLastChild,
}) => {
  return (
    <>
      <div
        className={classnames("p-6 shadow-slate-500 bg-white rounded-md", {
          ["font-sans"]: notLastChild,
        })}
      >
        <div className="">
          <img
            className="rounded-md shadow-xl shadow-slate-200"
            src={src}
            alt={`${title} thumbnail img`}
          />
          <div className="my-6 text-sm text-gray-300 flex justify-between">
            <p className="text-slate-700">{`${author} | ${sourceName}`}</p>
            {formatDate(publishedAt)}
          </div>
          <p className="font-bold my-4 text-2xl truncate">{title}</p>
        </div>

        <div className="leading-loose">
          <p className="truncate">{description}</p>

          <button className="my-6 px-4 py-2 rounded-lg border border-slate-700 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring hover:animate-pulse">
            <a href={url} target="_blank" rel="noreferrer noopener">
              Go to website
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

NewsCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  publishedAt: PropTypes.string,
  author: PropTypes.string,
  sourceName: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  notLastChild: PropTypes.bool,
};

export default NewsCard;
