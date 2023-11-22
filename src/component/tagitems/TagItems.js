import Tag from "./Tag";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/TagsSlice";

const TagItems = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tags);
  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return tags?.length > 0 ? (
    <div className="taglist mb-4 d-flex gap-3 mt-4">
      {tags.map((tag) => (
        <Tag key={tag.id} title={tag.title} />
      ))}
    </div>
  ) : null;
};

export default TagItems;
