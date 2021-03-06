import { useSelect } from '../../hooks';
import { classnames } from '../../functions';

const Dropdown = ({ placeholder, onSelect, children }) => {
  const {
    selectedItem,
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ children, onSelect });

  const showItems = ({ props: { value, children } }, index) => {
    const isHover = highlightedIndex === index;

    return (
      <li
        key={`${value}${index}`}
        className={classnames('py-1 px-3', isHover && 'bg-gray-400')}
        {...getItemProps({ value, index })}
      >
        {children}
      </li>
    );
  };

  return (
    <div className="relative">
      <div
        className={classnames('form-dropdown', isOpen && 'rounded-b-none')}
        {...getToggleButtonProps()}
      >
        <span>{(selectedItem && selectedItem.verbose) || placeholder}</span>
        <span>
          <i className="fas fa-chevron-down" />
        </span>
      </div>
      <ul
        className={classnames('outline-none my-0', isOpen && 'form-dropdown-list')}
        {...getMenuProps()}
      >
        {isOpen && children.map(showItems)}
      </ul>
    </div>
  );
};

export default Dropdown;
