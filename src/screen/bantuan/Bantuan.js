import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Linking,
  Image,
} from 'react-native';
import RNFS from 'react-native-fs';
import Pdf from 'react-native-pdf';
import {writeFile, exists, readDir} from 'react-native-fs';
import Share from 'react-native-share';
import {Platform} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import Latar from '../../../assets/latar.png';

const Bantuan = () => {
  // const handleOpenPDF = async pdfFilename => {
  //   try {
  //     const pdfPath = await getAssetURI(pdfFilename);

  //     const options = {
  //       title: 'Pilih Aplikasi',
  //       message: 'Buka dengan:',
  //       url: `file://${pdfPath}`,
  //       type: 'application/pdf',
  //     };

  //     Share.open(options)
  //       .then(res => console.log(res))
  //       .catch(err => console.error(err));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const getAssetURI = async filename => {
  //   const path = RNFS.DocumentDirectoryPath + `/${filename}`;
  //   const exists = await RNFS.exists(path);

  //   if (!exists) {
  //     try {
  //       await RNFS.copyAssetsFile(`assets/${filename}`, path);
  //     } catch (error) {
  //       console.error('Error copying asset file:', error);
  //       throw error;
  //     }
  //   }
  //   return path;
  // };

  // const [pdfSource, setPdfSource] = useState(null);

  // const handleOpenPDF = pdfFileName => {
  //   const uri = `file://android_asset/pdf/${pdfFileName}`;
  //   console.log('')
  //   setPdfSource({uri});
  // };

  // const [pdfPath, setPdfPath] = useState(null);

  // const handleOpenPDF = async pdfFileName => {
  //   const destPath = `${RNFS.DocumentDirectoryPath}/pdf/${pdfFileName}`;
  //   const sourcePath = `bundle-assets://pdf/${pdfFileName}`;

  //   try {
  //     await RNFS.copyFile(sourcePath, destPath);
  //     setPdfPath(destPath);
  //   } catch (error) {
  //     console.error('Error copying file:', error);
  //   }
  // };

  // useEffect(() => {
  //   return () => {
  //      Cleanup copied files when the component unmounts
  //     if (pdfPath) {
  //       RNFS.unlink(pdfPath)
  //         .then(() => console.log('File deleted'))
  //         .catch(err => console.log(err.message || err));
  //     }
  //   };
  // }, [pdfPath]);

  // const pdfFileName = 'panduanmenambahwatermark.pdf'; // Nama file PDF yang ada di folder assets/pdf/

  // const pdfPath =
  //   Platform.OS === 'android'
  //komen     ? `asset:/pdf/${pdfFileName}`
  //     : `bundle-assets://pdf/${pdfFileName}`;

  // const handleOpenPDF = () => {
  //   const options = {
  //     title: 'Pilih Aplikasi',
  //     message: 'Buka dengan:',
  //     url: pdfPath,
  //     type: 'application/pdf',
  //   };

  //   Share.open(options)
  //     .then(res => console.log(res))
  //     .catch(err => console.error(err));
  // };

  const [pdfLinks, setPdfLinks] = useState([
    'https://drive.google.com/file/d/1A4NkQ_yfGY8FVeIAypeT8MSf8KMwp17h/view',
    'https://drive.google.com/file/d/12VdmCVwD3PGXLDEvme_2ahPMQHyuTWuS/view',
    'https://drive.google.com/file/d/1A4NkQ_yfGY8FVeIAypeT8MSf8KMwp17h/view',
    'https://drive.google.com/file/d/1A4NkQ_yfGY8FVeIAypeT8MSf8KMwp17h/view',
    'https://drive.google.com/file/d/1A4NkQ_yfGY8FVeIAypeT8MSf8KMwp17h/view',
    'https://drive.google.com/file/d/1A4NkQ_yfGY8FVeIAypeT8MSf8KMwp17h/view',
    // Add other PDF links here
  ]);
  const handleDownloadPdf = async link => {
    try {
      const response = await RNFetchBlob.config({
        fileCache: true,
        appendExt: 'pdf',
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          title: 'File Downloaded',
          description: 'File downloaded by download manager.',
          mime: 'application/pdf',
        },
      }).fetch('GET', link);

      const filePath = response.path();
      const options = {
        type: 'application/pdf',
        url: filePath,
        saveToFiles: true,
      };

      if (Platform.OS === 'ios') {
        Share.open(options);
      }
    } catch (error) {
      console.error('Download error:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={Latar} style={styles.backgroundImage} />
      <View style={styles.container1}>
        <Text style={styles.sectionHeader}>Alur Unggah Mandiri</Text>
        <Text style={styles.subHeader}>
          1. Isikan username dan password anda
        </Text>
        <Text style={styles.subHeader}>2. Unggah semua dokumen:</Text>
        <Text style={styles.subHeader}>
          - Laporan – Bagian Awal (Cover s/d Daftar Lampiran format pdf)
        </Text>
        <Text style={styles.subHeader}>
          - Laporan – Bagian Inti (Pendahuluan s/d Penutup format pdf)
        </Text>
        <Text style={styles.subHeader}>
          - Laporan – Bagian Akhir (Daftar Pustaka dan Lampiran)
        </Text>
        <Text style={styles.subHeader}>- Artikel (format docx)</Text>

        {/*///sub kelengkapan bukti */}

        <Text style={styles.subHeader}>
          - Kelengkapan Bukti (gabung jadi satu file format pdf)
        </Text>
        <Text style={styles.subHeader}>
          - Surat Keterangan Hasil Cek Plagiarisme dari Fakultas/Prodi *contoh
          surat (link drive)
          <TouchableOpacity onPress={handleDownloadPdf}>
            <Text style={styles.link}>klik disini</Text>
          </TouchableOpacity>
        </Text>
        <Text style={styles.subHeader}>
          - Persetujuan Publikasi Tugas Akhir.pdf / Panduan Publikasi Tugas
          Akhir.docx (link drive)
          <TouchableOpacity onPress={handleDownloadPdf}>
            <Text style={styles.link}>klik disini</Text>
          </TouchableOpacity>
        </Text>
        <Text style={styles.subHeader}>3. Proses validasi</Text>
        <Text style={styles.subHeader}>4. Selesai</Text>

        {/*///dokumen panduan */}
        <Text style={styles.sectionHeader}>Dokumen Panduan:</Text>
        <Text style={styles.subHeader}>
          - Panduan unggah mandiri tugas akhir
          <TouchableOpacity onPress={() => handleDownloadPdf(pdfLinks[0])}>
            <Text style={styles.link}>klik disini</Text>
          </TouchableOpacity>
        </Text>
        <Text style={styles.subHeader}>
          - Lembar penyerahan dan persetujuan
          <TouchableOpacity onPress={() => handleDownloadPdf(pdfLinks[1])}>
            <Text style={styles.link}>klik disini </Text>
          </TouchableOpacity>
        </Text>
        <Text style={styles.subHeader}>
          - Panduan menambah watermark
          <TouchableOpacity onPress={() => handleDownloadPdf}>
            <Text style={styles.link}>klik disini </Text>
          </TouchableOpacity>
        </Text>
        <Text style={styles.subHeader}>
          - Watermark Unikama
          <TouchableOpacity onPress={() => handleDownloadPdf}>
            <Text style={styles.link}>klik disini </Text>
          </TouchableOpacity>
        </Text>
      </View>

      {/* PDF Viewer */}
      {/* {pdfSource && <Pdf source={pdfSource} />} */}

      {/* PDF Viewer */}
      {/* {pdfPath && (
        <Pdf
          source={{uri: pdfPath, cache: true}}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
        />
      )} */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    padding: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    color: 'white',
  },
  subHeader: {
    marginLeft: 16,
    color: 'white',
  },
  link: {
    right: 0,
    color: 'lightblue',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default Bantuan;
