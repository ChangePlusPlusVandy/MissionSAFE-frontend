import React from 'react';

import {
  Document,
  Page,
  View,
  Text,
  Link,
  Font,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

const Subtitle = ({ children, ...props }) => (
  <Text style={styles.subtitle} {...props}>
    {children}
  </Text>
);

class ReportGenerator extends React.Component {


  render() {return <Document>
    <Page>
      <Text style={styles.header} fixed>
        ~ Created with react-pdf ~
      </Text>
      <Text style={styles.title}>Report:</Text>

      <Text style={styles.text}>
        Your search results:
      </Text>

      <Text style={styles.text}>
      {this.props.youthResults.length} Youth 
      </Text>

      <Text style={styles.text}>
      {this.props.formResults.length} Forms 
      </Text>

      <Text style={styles.text}>
      {this.props.eventResults.length} Events 
      </Text>

      <Text style={styles.text}>
        Youth Results: 
      </Text>

      <Text style={styles.text}>
      {this.props.youthResults} 
      </Text>

      <Text style={styles.text}>
        Form Results: 
      </Text>

      <Text style={styles.text}>
      {this.props.formResults} 
      </Text>

      <Text style={styles.text}>
        Event Results: 
      </Text>

      <Text style={styles.text}>
      {this.props.eventResults} 
      </Text>


      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>}

};

export default ReportGenerator;