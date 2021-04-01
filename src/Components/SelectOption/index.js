import React, { Fragment, useState } from 'react';
import Select from 'react-select';
import classNames from 'classnames';
import styles from './styles.module.scss';

const SelectOption = ({
  items, height, width, setValue,
}) => {
  const [selected, setSelected] = useState(items[0]);

  const onChangeNetwork = (e) => {
    setSelected(e);
    // setValue(e);
  };


  return (
    <div className={styles.select}>
      <Select
        classNamePrefix="search"
        separator={false}
        closeMenuOnSelect
        defaultValue={selected}
        options={items}
        hideSelectedOptions={false}
        backspaceRemovesValue={false}
        onChange={e => onChangeNetwork(e)}
        styles={{
          ...styles,
          control: (base, state) => ({
            ...base,
            borderColor: state.isFocused ? 'black' : 'black',
            boxShadow: state.isFocused ? 0 : 0,
            '&:hover': { borderColor: 'black' },
            width,
            height,
            minHeight: height,
          }),
        }}
      />
    </div>
  );
};

export default SelectOption;
