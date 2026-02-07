import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const sessionsData = [
    { id: '1', name: 'Session 1', date: '2026-02-07' },
    { id: '2', name: 'Session 2', date: '2026-02-08' },
];

const SessionList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Session List</Text>
            <FlatList
                data={sessionsData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.sessionItem}>
                        <Text style={styles.sessionName}>{item.name}</Text>
                        <Text style={styles.sessionDate}>{item.date}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    sessionItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    sessionName: {
        fontSize: 18,
    },
    sessionDate: {
        fontSize: 14,
        color: '#777',
    },
});

export default SessionList;