import React, { Fragment, useState } from 'react';
import Select from 'react-select';
import classNames from 'classnames';
import styles from './styles.module.scss';

const SelectOption = ({ items, height, width, setValue }) => {
  let defaultItem;

  if (navigator.appVersion.indexOf('Win') !== -1) {
    defaultItem = {
      label: 'Windows',
      value: '2',
      link: 'https://github.com/floxofficial/flox/releases/download/V0.0.2/flox-windows-v0.0.2.exe',
    };
  } else if (navigator.appVersion.indexOf('Mac') !== -1) {
    defaultItem = {
      label: 'Mac OS',
      value: '1',
      link: 'https://github.com/floxofficial/flox/releases/download/V0.0.2/flox-mac-v0.0.2.dmg',
    };
  } else {
    defaultItem = {
      label: 'Linux',
      value: '3',
      link: 'https://github.com/floxofficial/flox/releases/download/V0.0.2/flox-linux-v0.0.2.deb',
    };
  }

  const [selected, setSelected] = useState(defaultItem);

  const onChangeNetwork = (e) => {
    setSelected(e);
  };

  return (
    <>
      <div className={styles.select}>
        <Select
          classNamePrefix="search"
          separator={false}
          closeMenuOnSelect
          defaultValue={selected}
          options={items}
          hideSelectedOptions={false}
          backspaceRemovesValue={false}
          onChange={(e) => onChangeNetwork(e)}
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
      <a href={selected.link} className="group-link">
        Download
      </a>
    </>
  );
};

export default SelectOption;
