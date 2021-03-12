import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import Header from '../../Header/index';
import Data from '../../services/data';

function ItemList({ navigation,data }) {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetail',
       {idProduct: data.id})}>

        <View style={styles.container}>
            <Text style={styles.text}>
                      Công việc 
             <Text style={styles.id}>
                      {data.id}: 
            </Text> {data.name}</Text>
         <View style={styles.header}>
             <Text style={styles.date}>
                    Ngày: {data.date}
         </Text>
        <Text style={[styles.time,{textTransform:"uppercase",fontWeight:"bold"}]}>
                   Thời gian: {data.time}
        </Text>
              <Text style={[styles.time,]}>
                    Thời gian dự kiến: {data.time2}
              </Text>
            </View>
          
        </View>
      </TouchableOpacity>
    );
  }

function Products(naivgation) {
    return (
               <View style={styles.waper}>
               <Header title='Danh sách công việc'></Header>
            <FlatList
                data={Data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ItemList data={item}></ItemList>}
            ></FlatList>
            
        </View>
    );
}

const styles = StyleSheet.create({
    waper: {
        flex: 1,
        backgroundColor:"#fff"
    },
  
    text: {
        color:"#000000",
        fontSize: 20,
        fontWeight: "400",
    },
    container: {
        paddingVertical:40,
        paddingHorizontal:20,
        marginHorizontal: 15,
        backgroundColor: "#ffffff",
      
      
    },
  
})

export default Products;