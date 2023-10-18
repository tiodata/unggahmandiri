import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

const Bantuan = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionHeader}>Alur Unggah Mandiri</Text>
      <Text>1. Masuk ke aplikasi unggah mandiri</Text>
      <Text>2. Isikan username dan password anda</Text>
      <Text>3. Unggah semua dokumen:</Text>
      <Text style={styles.subHeader}>- Abstrak (format pdf)</Text>
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
      <Text style={styles.subHeader}>
        - Kelengkapan Bukti (gabung jadi satu file format pdf)
      </Text>
      <Text style={styles.subHeader}>
        - Surat Keterangan Hasil Cek Plagiarisme dari Fakultas/Prodi *contoh
        surat (link drive)
      </Text>
      <Text style={styles.subHeader}>
        - Persetujuan Publikasi Tugas Akhir.pdf / Panduan Publikasi Tugas
        Akhir.docx (link drive)
      </Text>
      <Text>4. Proses validasi</Text>
      <Text>5. Selesai</Text>
      <Text style={styles.sectionHeader}>Dokumen Panduan:</Text>
      <Text>- Panduan unggah mandiri tugas akhir (link drive)</Text>
      <Text>- Lembar penyerahan dan persetujuan (link drive)</Text>
      <Text>- Panduan menambah watermark (link drive)</Text>
      <Text>- Watermark Unikama (link drive)</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
  },
  subHeader: {
    marginLeft: 16,
  },
});

export default Bantuan;
