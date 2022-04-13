
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

import { Logo } from './Logo';
import photo from '../../static/img/Frame.png'

const styles = StyleSheet.create({
  page: {
    padding: '33px 20px 36px 20px',
    
  },
  header: {
    flexDirection: 'row',
  },
  details: {
    width: 170,
    height: 85,
    border:'none',
    borderLeft: '1px solid #A1A9B2',
    fontSize: '8px', 
    lineHeight: '130%',
    padding: '2px 0 0 30px',
  },
  firstBlock: {
      marginTop: 50,
  },
  firstTitle:{
      fontSize: '18px',
  },
  littleFont: {
    fontSize: '8px',
    color:'#556069',
    lineHeight: '160%'
  },
  BoldFont: {
    fontSize: '8px',
    color:'#20252B',
  },
  tableResult: {
    width: 555,
    height: 'auto',
    border: '0.5px solid #A1A9B2',
    marginTop:10
  },
  headerResult: {
    width: '100%',
    borderBottom: '0.5px solid #A1A9B2',
    flexDirection: 'row',
    padding: '5px 10px 5px 10px',
    boxSizng: 'border-box',
  },
  emailText: {
    color:'#2F80ED',
    fontSize:8,
    textDecoration: 'underline'

  },
  backgorindPhoto: {
    position:'absolute',
    left:0,
    bottom:0,
    zIndex:1,
    width: 321,
     height: 352
  }
});

const data = [{}, {}, {}, {}, {}, {}, {}, {}]
const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
        <View style={styles.header}>
            <Logo/>
            <View style={styles.details}>
                <Text>Hertener Str. 100A</Text>
                <Text style={{marginTop: '4px'}}>45657 Recklinghausen, Deutschland</Text>
                <Text style={{marginTop: '12px'}}>( +49 800 ) 18 99 250</Text>
                <Text style={{marginTop: '4px'}}>( +49 800 ) 18 99 250</Text>
                <Text style={{marginTop: '12px'}}>info@hbz.training</Text>
            </View>
        </View>
      <View style={styles.firstBlock}>
        <Text style={styles.firstTitle}>
            The result of the completed questionnaire
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text style={styles.littleFont}>Subject:</Text>
          <Text style={{...styles.BoldFont, marginLeft:5}}>Subject 1</Text>
          <Text style={{...styles.littleFont, marginLeft:98}}>Date:</Text>
          <Text style={{...styles.BoldFont, marginLeft:5}}>01.05.2021</Text>
        </View>
        <View style={{marginTop: 20, width: 420}}>
          <Text style={styles.littleFont}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus magna, porta rutrum turpis sit amet,
            porta pulvinar tellus. Vivamus a augue sit amet lectus pulvinar facilisis. Curabitur sodales, magna at
            mollis blandit, justo magna malesuada enim, et pulvinar dui lorem porta est. Etiam sit amet vestibulum massa.
            Cras commodo est leo, ut dictum ligula fringilla sed. Suspendisse interdum massa elit, a eleifend tortor vulputate eget. 
          </Text>
        </View>
        {
          data.map((item) => (
            <View style={styles.tableResult}>
              <View style={styles.headerResult}>
                <Text style={{...styles.BoldFont}}>
                  Criterion:
                  <Text style={{color:'#556069'}}>
                    &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </Text>
              </View>
              <View style={styles.headerResult}>
                <Text style={{...styles.BoldFont}}>
                  Answer:
                  <Text style={{color:'#556069'}}>
                    &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus magna, porta rutrum turpis sit amet,
                    porta pulvinar tellus. Vivamus a augue sit amet lectus pulvinar facilisis.
                  </Text>
                </Text>
              </View>
              <View style={{...styles.headerResult, border:'none'}}>
                <Text style={{...styles.BoldFont}}>
                  Recomendation: 
                  <Text style={{color:'#556069'}}>
                    &nbsp; Recomendation: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus magna, porta rutrum turpis sit amet,
                    porta pulvinar tellus. Vivamus a augue sit amet lectus pulvinar facilisis. Curabitur sodales, magna at mollis blandit,
                    justo magna malesuada enim, et pulvinar dui lorem porta est. Etiam sit amet vestibulum massa. Cras commodo est leo,
                    ut dictum ligula fringilla sed. Suspendisse interdum massa elit, a eleifend tortor vulputate eget.
                  </Text> 
                </Text>
              </View>
            </View>
          ))
        }
      </View>
      <View style={{marginTop: 30}}>
        <Text style={styles.littleFont}>
          Name:<Text style={{...styles.BoldFont}}> &nbsp; Wade Warren</Text>
        </Text>
        <Text style={{...styles.littleFont, marginTop: 5}}>
          Phone number:<Text style={{...styles.BoldFont}}> &nbsp; ( +49 800 ) 12 34 567</Text>
        </Text>
        <Text style={{...styles.littleFont, marginTop: 5}}>
          E-mail:  &nbsp;<Text style={styles.emailText}>bill.sanders@example.com</Text>
        </Text>
      </View>
      
      <Text  style={{position: 'absolute',bottom:14,right:20}}render={({ pageNumber, totalPages }) => totalPages > 1 &&(
        <Text style={{fontSize: 8,color:'#556069'}}>
          Page:<Text style={{fontSize: 8,color: '#20252B'}}>&nbsp;{pageNumber}</Text> / {totalPages}
        </Text>
      )} fixed />
       <Image style={styles.backgorindPhoto}  src={photo ?? '../../../docs/Frame.22ec601a.png'} fixed/>
    </Page>
  </Document>
);

export default PDFDocument;