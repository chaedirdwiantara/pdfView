export const source = {
  html: `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
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
      .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 8px;
        text-align: center;
      }

      @media only screen and (max-width: 768px) {
        #watermark {
          position: fixed;
          bottom: 50%;
          right: 45%;
          opacity: 0.5;
          z-index: 99;
          color: white;
          width: 200px;
        }
        #img-watermark {
          width: 180%;
        }
        #font {
          font-size: 8px;
        }
      }
    </style>
  </head>

  <body id="font">
    <div id="watermark">
      <img
        id="img-watermark"
        src="https://images.sinbad.co.id/ng-ecom-invoice/belum-dibayar.png"
        alt=""
      />
    </div>
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
          <p style="width: max-content">
            <span>Customer Service</span> <br /><span
              >WA: 0822-6010-6010 | Email: help@sinbad.co.id</span
            >
            <br /><span>Senin-Jumat: 08.00 – 18.00 | Sabtu: 09.00 - 17.00</span>
            <br /><span>(Libur di hari Minggu & hari libur nasional)</span>
          </p>
        </td>
      </tr>
    </table>
    <table border="0" style="width: 100%" class="content_detail_pembayaran">
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
          Graha Sucofindo Lantai 9, 13, 14, 15, D, Jl. Pasar Minggu, RT.4/RW.1,
          Pancoran, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota
          Jakarta 1278
        </td>
        <td colspan="3" style="width: 28%">
          Jl. M.H. Thamrin No. 1, Kb. Melati, Kec. Menteng, Kota Jakarta Pusat,
          Daerah Khusus Ibukota Jakarta 10310
        </td>
      </tr>
    </table>
    <p style="page-break-after: always">&nbsp;</p>
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
        <td colspan="3" style="width: 28%">Mandala Dharma Krida</td>
        <td colspan="3" style="width: 28%">Buyer Name</td>
      </tr>
      <tr>
        <td colspan="3" style="width: 28%; padding: 10px 10px 10px 0px">
          Jl. M.H. Thamrin No. 1, Kb. Melati, Kec. Menteng, Kota Jakarta Pusat,
          Daerah Khusus Ibukota Jakarta 10310
        </td>
        <td colspan="3" style="width: 28%">
          Jl. M.H. Thamrin No. 1, Kb. Melati, Kec. Menteng, Kota Jakarta Pusat,
          Daerah Khusus Ibukota Jakarta 10310
        </td>
      </tr>
    </table>

    <table border="0" style="width: 100%" class="footer">
      <tr>
        <td style="width: 28%; text-align: left">Order ID: SE1234567</td>
        <td style="width: 28%; text-align: right">Halaman 1 dari 1</td>
      </tr>
    </table>

    <p style="page-break-after: always">&nbsp;</p>
  </body>
</html>


`,
};
