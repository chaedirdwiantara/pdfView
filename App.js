// Example to Make PDF in React Native from HTML Text
// https://aboutreact.com/make-pdf-in-react-native-from-html-text/

// Import React
import React, {useState} from 'react';
// Import required components
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import {source} from './src/source';
// Import HTML to PDF
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const App = () => {
  const [filePath, setFilePath] = useState('');

  const isPermitted = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs access to Storage data',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        alert('Write permission err', err);
        return false;
      }
    } else {
      return true;
    }
  };

  const createPDF = async () => {
    if (await isPermitted()) {
      let options = {
        //Content to print
        html: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
        
          <body id="main">
            <div id="container">
              <div id="invoice_container">
                <!-- Header Component -->
                <div id="invoice_header">
                  <table border="0" style="width: 100%" class="header">
                    <tr>
                      <td style="width: 50%">
                        <img
                          src="https://images.sinbad.co.id/ng-ecom-invoice/sinbad-logo.png"
                          width="20%"
                          alt=""
                        />
                      </td>
                      <td style="text-align: right">
                        <p id="header_data">
                          <span>Customer Service</span> <br /><span
                            >WA: 0822-6010-6010 | Email: help@sinbad.co.id</span
                          >
                          <br /><span
                            >Senin-Jumat: 08.00 ??? 18.00 | Shabtu: 09.00 - 17.00</span
                          >
                          <br /><span
                            >(Libur di hari Minggu & hari libur nasional)</span
                          >
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>
                <!-- Body Component -->
                <div id="invoice_body">
                  <table
                    border="0"
                    style="width: 100%"
                    class="content_detail_pembayaran"
                  >
                    <tr>
                      <td colspan="3">Detail Pembayaran</td>
                    </tr>
                    <tr>
                      <td style="width: 2%">1</td>
                      <td>PT. Tigaraksa Satria Tbk</td>
                      <td id="invoicePrice">Rp. 800.000</td>
                    </tr>
                    <tr>
                      <td style="width: 2%">2</td>
                      <td>Mandala Dharma Krida</td>
                      <td id="invoicePrice">Rp. 800.000</td>
                    </tr>
                    <tr>
                      <td colspan="2" style="text-align: right">Diskon Voucher</td>
                      <td id="invoicePrice">Rp. 50000</td>
                    </tr>
                    <tr>
                      <td colspan="2" style="text-align: right">Biaya Layanan</td>
                      <td id="invoicePrice">Rp. 0</td>
                    </tr>
                    <tr>
                      <td colspan="2" style="text-align: right">TOTAL TAGIHAN</td>
                      <td id="invoicePrice">Rp. 1650000</td>
                    </tr>
                  </table>
                  <div>
                    <table border="0" style="width: 100%" class="invoice_header">
                      <tr style="text-align: center; background-color: #e6e6e6">
                        <td colspan="6">Invoice</td>
                      </tr>
                      <tr>
                        <td style="width: 28%">Parcel ID:</td>
                        <td>:</td>
                        <td style="width: 20%">SE1234567</td>
                        <td style="width: 28%">Order ID</td>
                        <td>:</td>
                        <td style="width: 20%">SNE-1234567</td>
                      </tr>
                      <tr>
                        <td style="width: 28%">Tanggal Terbit</td>
                        <td>:</td>
                        <td style="width: 20%">01/01/2022</td>
                        <td style="width: 28%">Metore Pembayaran</td>
                        <td>:</td>
                        <td style="width: 20%">Mandiri Virtual Account</td>
                      </tr>
                      <tr>
                        <td style="width: 28%">Tanggal Pesanan</td>
                        <td>:</td>
                        <td style="width: 20%">01/01/2022</td>
                        <td style="width: 28%">Tanggal Pembayaran</td>
                        <td>:</td>
                        <td style="width: 20%">01/01/2022</td>
                      </tr>
                      <tr>
                        <td style="width: 28%">Diterbitkan Mewakili :</td>
                        <td>:</td>
                        <td>&nbsp;</td>
                        <td style="width: 28%">Penerima :</td>
                        <td>:</td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td colspan="3" style="width: 28%">PT. Tigaraksa Satria Tbk</td>
                        <td colspan="3" style="width: 28%">Buyer Name</td>
                      </tr>
                      <tr>
                        <td colspan="3" style="width: 28%; padding: 10px 10px 10px 0px">
                          Graha Sucofindo Lantai 9, 13, 14, 15, D, Jl. Pasar Minggu,
                          RT.4/RW.1, Pancoran, Kec. Pancoran, Kota Jakarta Selatan,
                          Daerah Khusus Ibukota Jakarta 1278
                        </td>
                        <td colspan="3" style="width: 28%">
                          Jl. M.H. Thamrin No. 1, Kb. Melati, Kec. Menteng, Kota Jakarta
                          Pusat, Daerah Khusus Ibukota Jakarta 10310
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <!-- Footer Component -->
                <div id="invoice_footer">
                  <table border="0" style="width: 100%">
                    <tr>
                      <td style="width: 28%; text-align: left">Order ID: SE1234567</td>
                      <td style="width: 28%; text-align: right">Halaman 1 dari 1</td>
                    </tr>
                  </table>
                </div>
              </div>
              <p style="page-break-after: always">&nbsp;</p>
              <!-- PAGE 2 EXAMPLE -->
              <div id="invoice_container">
                <!-- Header Component -->
                <div id="invoice_header">
                  <table border="0" style="width: 100%" class="header">
                    <tr>
                      <td>
                        <img
                          src="https://images.sinbad.co.id/ng-ecom-invoice/sinbad-logo.png"
                          width="20%"
                          alt=""
                        />
                      </td>
                      <td style="text-align: right">
                        <p id="header_data">
                          <span>Customer Service</span> <br /><span
                            >WA: 0822-6010-6010 | Email: help@sinbad.co.id</span
                          >
                          <br /><span
                            >Senin-Jumat: 08.00 ??? 18.00 | Shabtu: 09.00 - 17.00</span
                          >
                          <br /><span
                            >(Libur di hari Minggu & hari libur nasional)</span
                          >
                        </p>
                      </td>
                    </tr>
                  </table>
                </div>
                <!-- Body Component -->
                <div id="invoice_body">
                  <div>
                    <table border="0" style="width: 100%" class="invoice_header">
                      <tr style="text-align: center; background-color: #e6e6e6">
                        <td colspan="6">Invoice</td>
                      </tr>
                      <tr>
                        <td style="width: 28%">Parcel ID:</td>
                        <td>:</td>
                        <td style="width: 20%">SE1234567</td>
                        <td style="width: 28%">Order ID</td>
                        <td>:</td>
                        <td style="width: 20%">SNE-1234567</td>
                      </tr>
                      <tr>
                        <td style="width: 28%">Tanggal Terbit</td>
                        <td>:</td>
                        <td style="width: 20%">01/01/2022</td>
                        <td style="width: 28%">Metore Pembayaran</td>
                        <td>:</td>
                        <td style="width: 20%">Mandiri Virtual Account</td>
                      </tr>
                      <tr>
                        <td style="width: 28%">Tanggal Pesanan</td>
                        <td>:</td>
                        <td style="width: 20%">01/01/2022</td>
                        <td style="width: 28%">Tanggal Pembayaran</td>
                        <td>:</td>
                        <td style="width: 20%">01/01/2022</td>
                      </tr>
                      <tr>
                        <td style="width: 28%">Diterbitkan Mewakili :</td>
                        <td>:</td>
                        <td>&nbsp;</td>
                        <td style="width: 28%">Penerima :</td>
                        <td>:</td>
                        <td>&nbsp;</td>
                      </tr>
                      <tr>
                        <td colspan="3" style="width: 28%">PT. Tigaraksa Satria Tbk</td>
                        <td colspan="3" style="width: 28%">Buyer Name</td>
                      </tr>
                      <tr>
                        <td colspan="3" style="width: 28%; padding: 10px 10px 10px 0px">
                          Graha Sucofindo Lantai 9, 13, 14, 15, D, Jl. Pasar Minggu,
                          RT.4/RW.1, Pancoran, Kec. Pancoran, Kota Jakarta Selatan,
                          Daerah Khusus Ibukota Jakarta 1278
                        </td>
                        <td colspan="3" style="width: 28%">
                          Jl. M.H. Thamrin No. 1, Kb. Melati, Kec. Menteng, Kota Jakarta
                          Pusat, Daerah Khusus Ibukota Jakarta 10310
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <!-- Footer Component -->
                <div id="invoice_footer">
                  <table border="0" style="width: 100%; height: 100%">
                    <tr>
                      <td style="width: 28%; text-align: left">Order ID: SE1234567</td>
                      <td style="width: 28%; text-align: right">Halaman 1 dari 1</td>
                    </tr>
                  </table>
                </div>
              </div>
              <!-- END OF PAGE 2 EXAMPLE -->
              <!-- <p style="page-break-after: always">&nbsp;</p> -->
            </div>
          </body>
        
          <!-- STYLE -->
          <style>
            #container {
              padding: 0px 16px 0px 16px;
            }
            #invoice_container {
              width: 100%;
              height: 95vh;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            #invoice_header {
              flex: 1.5;
              /* background-color: beige; */
            }
            #invoice_body {
              flex: 7;
              background-image: url('https://images.sinbad.co.id/ng-ecom-invoice/belum-dibayar.png');
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center;
              /* background-color: rgb(162, 243, 56); */
            }
            #invoice_footer {
              flex: 1;
              /* background-color: rgb(24, 87, 66); */
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
            }
        
            #watermark {
              position: fixed;
              bottom: 5px;
              right: 5px;
              opacity: 0.5;
              z-index: 99;
              color: white;
            }
            #invoicePrice {
              width: 20%;
              text-align: right;
            }
        
            @media only screen and (max-width: 768px) {
              #watermark {
                position: fixed;
                bottom: 60%;
                right: 45%;
                opacity: 0.5;
                z-index: 99;
                color: white;
                width: 200px;
              }
              #img-watermark {
                width: 160%;
              }
              #main {
                /* background-color: beige; */
                font-size: 8px;
              }
              #header_data {
                width: max-content;
              }
            }
          </style>
        </html>
        `,
        //File Name
        fileName: 'test',
        //File directory
        directory: 'docs',
      };
      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      setFilePath(file.filePath);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.titleText}>
        Example to Make PDF in React Native from HTML Text
      </Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={createPDF}>
          <View>
            <Image
              //We are showing the Image from online
              source={{
                uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/pdf.png',
              }}
              style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>Create PDF</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.textStyle}>{filePath}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    fontSize: 18,
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  imageStyle: {
    width: 150,
    height: 150,
    margin: 5,
    resizeMode: 'stretch',
  },
});
