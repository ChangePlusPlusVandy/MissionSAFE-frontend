
import React from "react";
import {Page, Text, Document, StyleSheet } from '@react-pdf/renderer';

const dataType = {
    Forms: "Forms",
    Youth: "Youth",
    Staff: "Staff"
}



// styles

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });


// Going to create a component that inherits from document that can store search result data 
// as a property ..? 

// implement class method that can parse through this data and return something the pdf can store? 



// document component 

class myDocuments extends Document {
    constructor() {
        super()

        // set equal to some function call to get array returned by search results? 
        this.state = {
            searchResults: []
        }
    }

    getResults() {
        let string = ""
        for (let result of this.searchResults) {
            string += result.name
        }

    }


}

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );


// Web. Render in DOM 

import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';

const App = () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
);



ReactDOM.render(<App />, document.getElementById('root'));



// Node. Save in a file
import ReactPDF from '@react-pdf/renderer';

ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
