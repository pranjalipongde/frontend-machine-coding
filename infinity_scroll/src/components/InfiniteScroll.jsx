import { useEffect, useRef, useState } from "react";

const InfiniteScroll = (props) => {
  const { renderListItem, getData, listData, query } = props;

  const pageNumber = useRef(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData(query, pageNumber.current).finally(() => {
      setLoading(false);
    });
  }, [query]);

  return <div>infinityScroll</div>;
};

export default InfiniteScroll;
