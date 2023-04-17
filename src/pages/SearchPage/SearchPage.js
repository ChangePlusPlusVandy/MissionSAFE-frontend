import React, { useState } from "react";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./SearchPage.scss";
import dateFormat from "dateformat";
import * as youthServerUtils from "../../util/ServerInterfaceYouth";
import * as eventServerUtils from "../../util/ServerInterfaceEvents";
import { getEvent } from "../../util/ServerInterfaceEvents";
import {
  getFormsByEventCode,
  getAllForms,
} from "../../util/ServerInterfaceForm";
import { Button, Divider, Box } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import HeaderResponsive from "../../components/Header/Header";
// import ReportGenerator from "../../components/ReportGenerator";
// import { PDFDownloadLink } from "@react-pdf/renderer";

const SearchPage = () => {
  const [youthResults, setYouthResults] = useState([]);
  const [formResults, setFormResults] = useState([]);
  const [eventResults, setEventResults] = useState([]);
  const [searchSummary, setSearchSummary] = useState("");
  const date = dateFormat(new Date(), "fullDate");

  const [searchState, setSearchState] = useState({
    category: "Youth",
    criteria: "",
    text: "",
    startDate: null,
    endDate: null,
  });

  const onSearchButtonClick = () => {
    switch (searchState.category) {
      case "Youth":
        updateYouthResults(searchState.criteria, searchState.text);
        break;
      case "Form":
        updateFormResults(
          searchState.criteria,
          searchState.text,
          searchState.startDate,
          searchState.endDate
        );
        break;
      case "Event":
        updateEventResults(
          searchState.criteria,
          searchState.text,
          searchState.startDate,
          searchState.endDate
        );
        break;
      default:
        console.log("Error: Invalid category");
        break;
    }
  };

  const dateFilter = (result, startDate, endDate) => {
    function isWithinDateRange(givenDate) {
      const isAfterStartDate =
        startDate === null || givenDate.getTime() >= startDate.getTime();
      const isBeforeEndDate =
        endDate === null || givenDate.getTime() <= endDate.getTime();

      return isAfterStartDate && isBeforeEndDate;
    }

    return result.filter((item) => {
      const itemDate = new Date(item.date);
      return isWithinDateRange(itemDate);
    });
  };

  const updateFormResults = (criteria, text, startTime, endTime) => {
    const summary = getSummary("Form", criteria, text);

    let promise;
    switch (criteria) {
      case "":
        promise = getAllForms();
        break;
      case "ID":
        promise = youthServerUtils.getFormsByFireID(text);
        break;
      case "Event-Code":
        promise = getFormsByEventCode(text);

        break;
      default:
        console.log("Unexpected search criteria");
        break;
    }
    if (promise) {
      promise.then(
        (result) => {
          console.dir(result);

          //add results to eventResults
          setFormResults(dateFilter(result, startTime, endTime));
          setSearchSummary(summary);
          // everything else should be empty
          setYouthResults([]);
          setEventResults([]);
        },
        (error) => {
          //log error on failure
          console.error(`Error: ${error.message}`);
        }
      );
    }
  };

  const updateYouthResults = (criteria, text) => {
    const summary = getSummary("Youth", criteria, text);

    let promise;
    switch (criteria) {
      case "":
        promise = youthServerUtils.getAllYouth();
        break;
      case "Email":
        promise = youthServerUtils.getYouthByEmail(text);
        break;
      case "Program":
        promise = youthServerUtils.getAllYouthInProgram(text);
        break;
      case "ID":
        promise = youthServerUtils.getYouthByFireID(text);
        break;
      default:
        console.log("unrecognized path");
        break;
    }

    if (promise) {
      promise.then(
        (result) => {
          //add results to youthResults
          setYouthResults(result);
          setSearchSummary(summary);
          // everything else should be empty
          setFormResults([]);
          setEventResults([]);
        },
        (error) => {
          //log error on failure
          console.error(`Error: ${error.message}`);
        }
      );
    }
  };

  const updateEventResults = (criteria, text, startTime, endTime) => {
    const summary = getSummary("Event", criteria, text);

    let promise;
    switch (criteria) {
      case "":
        promise = eventServerUtils.getAllEvents();
        break;
      case "ID":
        promise = youthServerUtils.getEventsByFireID(text);
        break;
      case "Event-Code":
        promise = getEvent(text);
        break;
      default:
        console.log("Unexpected search criteria");
        break;
    }
    if (promise) {
      promise.then(
        (result) => {
          //add results to eventResults
          setEventResults(dateFilter(result, startTime, endTime));
          setSearchSummary(summary);
          // everything else should be empty
          setFormResults([]);
          setYouthResults([]);
        },
        (error) => {
          //log error on failure
          console.error(`Error: ${error.message}`);
        }
      );
    }
  };

  const getSummary = (category, criteria, text) => {
    var summary = "Showing results";
    if (text.length > 0) {
      summary += ' for "' + text + '"';
    }
    if (criteria.length > 0) {
      summary += " by " + criteria;
    }
    summary += " within " + category;
    return summary;
  };

  return (
    <>
      <div className="column-container">
        <HeaderResponsive />
        <div className="bar-container">
          <div className="date">{date}</div>
          <SearchBar
            searchState={searchState}
            setSearchState={setSearchState}
          />
          <Button size="sm" onClick={onSearchButtonClick} mt="xs">
            Search
          </Button>
        </div>
        <Divider
          w={"95%"}
          my="xs"
          variant="dashed"
          color="gray"
          labelPosition="center"
          label={
            <>
              <IconSearch size={12} />
              <Box ml={5}>{searchSummary}</Box>
            </>
          }
        />
        <div className="results-container">
          <SearchResults
            youthResults={youthResults}
            formResults={formResults}
            eventResults={eventResults}
          />
        </div>

        {/* In Progress */}

        {/* <PDFDownloadLink document={<ReportGenerator youthResults={[1, 2, 3, 4]} formResults={formResults} eventResults={eventResults} />} fileName="FORM">
          {({ loading }) =>
            loading ? (
              <button>Loading Document ...</button>
            ) : (
              <button>Download</button>
            )
          }
      </PDFDownloadLink> */}
      </div>
    </>
  );
};

export default SearchPage;
