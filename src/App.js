import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';

export default function App() {
  const users = [
    { image: 'https://wallpapers-clan.com/wp-content/uploads/2024/03/batman-rain-gif-preview-desktop-wallpaper.gif', name: 'Batman', email: 'batman.sad@email.com' },
    { image: 'https://i.pinimg.com/originals/61/2c/93/612c93bbae9bfbcb7df33fd88d2b78d9.gif', name: 'Omnitrix', email: 'ben10@email.com' },
    { image: 'https://media.tenor.com/0dkegeJTiuMAAAAM/sense-life-life-sense.gif', name: 'Kaleb', email: 'SenseLife@email.com' }
  ];

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {users.map((user, index) => (
          <Card
            key={index}
            image={user.image}
            name={user.name}
            email={user.email}
          />
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
