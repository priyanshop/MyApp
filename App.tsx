import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, useWindowDimensions } from 'react-native';

const App: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>('Owner');
  const { width } = useWindowDimensions();

  const isTablet = width >= 768;

  const handleRoleSelection = (role: string) => {
    setSelectedRole(role);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>
      <Text style={styles.subtitle}>Please select your role to continue.</Text>
      <View style={[styles.roleContainer, isTablet ? styles.roleContainerTablet : {}]}>
        <TouchableOpacity
          style={[
            styles.roleCard,
            selectedRole === 'Owner' ? styles.selectedRoleCard : {},
            isTablet ? styles.roleCardTablet : {},
          ]}
          onPress={() => handleRoleSelection('Owner')}
        >
          <Text style={styles.roleText}>Owner</Text>
          <View style={styles.imageContainer}>
            {/* <Image source={require('./path/to/owner-icon.png')} style={styles.icon} /> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.roleCard,
            selectedRole === 'Operator' ? styles.selectedRoleCard : {},
            isTablet ? styles.roleCardTablet : {},
          ]}
          onPress={() => handleRoleSelection('Operator')}
        >
          <Text style={styles.roleText}>Operator</Text>
          <View style={styles.imageContainer}>
            {/* <Image source={require('./path/to/operator-icon.png')} style={styles.icon} /> */}
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  roleContainerTablet: {
    width: '60%',
  },
  roleCard: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
    width: '40%',
  },
  roleCardTablet: {
    width: '45%',
  },
  selectedRoleCard: {
    borderColor: '#FF4500',
    backgroundColor: '#FFF0E5',
  },
  roleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
  },
  icon: {
    width: 40,
    height: 40,
  },
  nextButton: {
    backgroundColor: '#FF4500',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 30,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
