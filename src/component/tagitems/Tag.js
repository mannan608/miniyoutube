import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagSelected, tagRemove } from "../../features/filter/FilterSlice";

const Tag = ({ title }) => {
  const dispatch = useDispatch();
  const { tags: selectedTag } = useSelector((state) => state.filter);
  const isSelected = selectedTag.includes(title) ? true : false;

  const style = isSelected ? `tag active` : `tag`;
  const filterHandle = () => {
    if (isSelected) {
      dispatch(tagRemove(title));
    } else {
      dispatch(tagSelected(title));
    }
  };
  return (
    <div className={style} onClick={filterHandle}>
      {title}
    </div>
  );
};

export default Tag;
