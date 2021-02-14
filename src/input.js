import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Input, AutoComplete, Dropdown, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";

const renderTitle = (title) => {
  return <span>{title}</span>;
};

const renderItem = (item) => {
  let name;
  if (item.name == null) name = item.title;
  else name = item.name;
  return {
    value: name,
    item: item,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {name}
        <span>{item.type}</span>
      </div>
    ),
  };
};

const options = (arr) => {
  if (arr !== 0) {
    const array = [];
    arr.map((item) => array.push(renderItem(item)));
    //console.log(array);
    return [
      {
        label: renderTitle("searching results"),
        options: array,
      },
    ];
  } else {
    return [{}];
  }
};

const Complete = (props) => (
  <AutoComplete
    dropdownClassName="certain-category-search-dropdown"
    dropdownStyle={{
      borderColor: "rgb(228, 228, 16)",
      borderWidth: "2px",
      borderStyle: "solid",
      borderRadius: "10px",
      backgroundColor: "transparent",
    }}
    listHeight="30vh"
    dropdownMatchSelectWidth={400}
    id="input"
    options={options(props.arr)}
    onChange={(text) => props.onChange(text)}
  >
    <Input size="large" placeholder="input here" />
  </AutoComplete>
);

export default Complete;
