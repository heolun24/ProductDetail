import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Dimensions } from 'react-native';
import Data from '../../services/data';
import Header from '../../Header/index'

function ProductDetail({ navigation, route }){
  const { idProduct } = route.params;
  const product = Data.filter((item) => item.id === idProduct)[0];
  
return(
          <View style={styles.container}>
		    	<Header
				      onBack={() => navigation.goBack()}
			      	title='Chi tiết công việc'></Header>
          <ScrollView>
				<View style={styles.wrapper}>
					<View style={styles.element}>
					    	<Text style={styles.title}>Tên công việc:</Text>
						    <Text style={styles.info}>{product.name}</Text>
					</View>
					<View style={styles.element}>
					    	<Text style={styles.title}>Ngày:</Text>
					    	<Text style={styles.info}>{product.date}</Text>
					</View>
					<View style={styles.element}>
						    <Text style={styles.title}>Thời gian:</Text>
					    	<Text style={styles.info}>{product.time}</Text>
					</View>
					<View style={styles.element}>
					      <Text style={styles.title}>Thời gian dự kiến:</Text>
					    	<Text style={styles.info}>{product.time2}</Text>
					</View>
				</View>
			</ScrollView>
    </View>
);
}
/*const { width, height } = Dimensions.get('window');*/
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    wrapper: {
		flex: 1,
	},
	element: {
		marginHorizontal: 16,
		marginVertical: 8,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	info: {
		fontSize: 15,
	},
})

export default ProductDetail