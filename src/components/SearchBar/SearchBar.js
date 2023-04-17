import "./SearchBar.scss";
import React from "react";
import { TextInput, Select, Group } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconSearch } from "@tabler/icons-react";

const SearchBar = ({ searchState, setSearchState }) => {
  const searchByData = {
    Youth: [
      { value: "Email", label: "Email" },
      { value: "Program", label: "Program" },
      { value: "ID", label: "Youth ID" },
    ],
    Form: [
      { value: "ID", label: "Youth ID" },
      { value: "Event-Code", label: "Event Code" },
    ],
    Event: [
      { value: "ID", label: "Youth ID" },
      { value: "Event-Code", label: "Event Code" },
    ],
  };
  return (
    <div className="search-container">
      <TextInput
        placeholder="Search"
        icon={<IconSearch size="0.8rem" />}
        value={searchState.text}
        onChange={(e) =>
          setSearchState({ ...searchState, text: e.target.value })
        }
        radius="lg"
      />
      <Group>
        <Select
          w="140px"
          label="Search for"
          id="dropdown"
          size="xs"
          width={20}
          value={searchState.category}
          onChange={(value) =>
            setSearchState({
              ...searchState,
              category: value,
            })
          }
          data={[
            { value: "Youth", label: "Youth" },
            { value: "Form", label: "Form" },
            { value: "Event", label: "Event" },
          ]}
        />
        <Select
          w="140px"
          id="search-by-dropdown"
          label="Search by"
          size="xs"
          value={searchState.criteria}
          onChange={(value) =>
            setSearchState({ ...searchState, criteria: value })
          }
          data={searchByData[searchState.category]}
        />
      </Group>
      {(searchState.category === "Form" ||
        searchState.category === "Event") && (
        <Group align="center" justify="center">
          <DatePickerInput
            w="140px"
            size="xs"
            label="From"
            value={searchState.startDate}
            onChange={(date) => {
              setSearchState({
                ...searchState,
                startDate: date,
              });
            }}
          />
          <DatePickerInput
            w="140px"
            size="xs"
            label="To"
            value={searchState.endDate}
            onChange={(date) => {
              setSearchState({
                ...searchState,
                endDate: date,
              });
            }}
          />
        </Group>
      )}
    </div>
  );
};
export default SearchBar;
