
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { Logo } from './Logo';
import photo from '../../static/img/Frame.png';
import { IPdfResult } from './types';

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

const PDFDocument:React.FC<IPdfResult> = ({
    clientName, 
    completionDate, 
    email, 
    name, 
    phone, 
    subject, 
    answers 
  }) => {
    console.log(clientName, 
      completionDate, 
      email, 
      name, 
      phone, 
      subject, 
      answers )

      const checkZero = (num: number) => {
        if(num <10){
          return `0${num}`
        }
        return num
      }
      const generateData = (data: string) => {
        const dataObj = new Date(data);
        return `${checkZero(dataObj.getDate())}.${checkZero(dataObj.getMonth() + 1)}.${dataObj.getFullYear()}`
      }

    return  (
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
              Das Ergebnis des ausgefüllten Fragebogens
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.littleFont}>Thema:</Text>
              <Text style={{...styles.BoldFont, marginLeft:5}}>{subject}</Text>
              <Text style={{...styles.littleFont, marginLeft:98}}>Datum:</Text>
              <Text style={{...styles.BoldFont, marginLeft:5}}>{generateData(completionDate ?? '')}</Text>
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
              [...answers ?? []].map((item) => (
                <View style={styles.tableResult}>
                  <View style={styles.headerResult}>
                    <Text style={{...styles.BoldFont}}>
                        Kriterium:
                      <Text style={{color:'#556069'}}>
                        &nbsp; {item.question}
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.headerResult}>
                    <Text style={{...styles.BoldFont}}>
                      Answer:
                      <Text style={{color:'#556069'}}>
                        &nbsp; {item.answer.length !== 0 ? item.answer : item.comment}
                      </Text>
                    </Text>
                  </View>
                  <View style={{...styles.headerResult, border:'none'}}>
                    <Text style={{...styles.BoldFont}}>
                      Ergebnis Empfehlungen: 
                      <Text style={{color:'#556069'}}>
                        &nbsp; {item.recommendation ?? `Bitte setzen Sie sich mit uns in Verbindung, um sich in dieser Angelegenheit beraten zu lassen.`}
                      </Text> 
                    </Text>
                  </View>
                </View>
              ))
            }
          </View>
          <View style={{marginTop: 30}}>
            <Text style={styles.littleFont}>
              Name:<Text style={{...styles.BoldFont}}> &nbsp; {clientName}</Text>
            </Text>
            <Text style={{...styles.littleFont, marginTop: 5}}>
              Telefon-Nummer<Text style={{...styles.BoldFont}}> &nbsp; {phone}</Text>
            </Text>
            <Text style={{...styles.littleFont, marginTop: 5}}>
              E-mail:  &nbsp;<Text style={styles.emailText}>{email}</Text>
            </Text>
          </View>
          
          <Text  style={{position: 'absolute',bottom:14,right:20}}render={({ pageNumber, totalPages }) => totalPages > 1 &&(
            <Text style={{fontSize: 8,color:'#556069'}}>
              Page:<Text style={{fontSize: 8,color: '#20252B'}}>&nbsp;{pageNumber}</Text> / {totalPages}
            </Text>
          )} fixed />
           <Image style={styles.backgorindPhoto}  src={"https://yuriybodnarivanovich.github.io/widget-hdz-ts/Frame.22ec601a.png"} fixed/>
        </Page>
      </Document>
    );
  }

export default PDFDocument;