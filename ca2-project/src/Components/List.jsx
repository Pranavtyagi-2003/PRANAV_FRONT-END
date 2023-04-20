import React, { useState, useEffect, memo } from 'react';
import './List.css'
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {
  return (
    <li
      className='li'
      style={{ backgroundColor: isSelected ? 'green' : 'red'}}
      onClick={()=>onClickHandler(index)}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({
  items
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(0);
  }, [items]);

  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: 'left' }}>
      {
        items && items.map((item, index) => (
            <SingleListItem
              key={index}
              onClickHandler={() => handleClick(index)}
              text={item.text}
              index={index}
              isSelected={index === selectedIndex}
            />
          ))
      }
    </ul>
  )
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })).isRequired,
};

WrappedListComponent.defaultProps = {
  items:  [
    { text: "Pranav"},
    { text: "Tyagi"},
    {text:"12014487"},
    {text:"B.Tech CSE"}
    ],
};

const List = memo(WrappedListComponent);

export default List;
