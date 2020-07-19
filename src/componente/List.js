import React from "react";
import Item from "./Item";
const List = ({ list, onRemoveItem, Check }) =>
  list.map((item) => (
    // console.log(object)
    <Item
      key={item.objectID}
      item={item}
      onRemoveItem={onRemoveItem}
      Check={Check}
    />
  ));

export default List;
