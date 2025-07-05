import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const sampleVideos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Redbus App Review & Booking Tutorial',
    channel: 'Travel Guide',
  },
  {
    id: '3fumBcKC6RE',
    title: 'How to Book Bus Tickets on Redbus',
    channel: 'Bus Booking Expert',
  },
  {
    id: 'LXb3EKWsInQ',
    title: 'Top 5 Redbus Features You Must Know',
    channel: 'Tech Reviews',
  },
  {
    id: 'C0DPdy98e4c',
    title: 'Redbus – Tips & Tricks for Bus Travel',
    channel: 'Travel Hacks',
  },
];

const { width } = Dimensions.get('window');
const videoWidth = width * 0.9;
const videoHeight = videoWidth * (9 / 16);

const TrendingVideos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trending Redbus Videos on YouTube</Text>
      <FlatList
        data={sampleVideos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.videoCard}>
            <YoutubePlayer
              height={videoHeight}
              width={videoWidth}
              play={false}
              videoId={item.id}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.channel}>{item.channel}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingHorizontal:15
  },
  videoCard: {
    marginBottom: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    width: videoWidth + 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  channel: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
    textAlign: 'center',
  },
});

export default TrendingVideos;
