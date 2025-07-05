
import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    FlatList,
    Image,
    Modal,
} from 'react-native';
import {
    IconButton,
    Card,
    RadioButton,
    Button,
    Checkbox,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const App = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTab, setSelectedTab] = useState('Sort');
    const [selectedSort, setSelectedSort] = useState('Popularity');
    const [checkboxValues, setCheckboxValues] = useState({});

    const openModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    const openModal2 = () => setModalVisible(true);
    const hideModal2 = () => setModalVisible(false);

    const data = [
        {
            t1: 'Railway New Colony,Visakhapatnam',
            t2: '48% off',
            t2col: 'yellow',
            t3: '1200',
            t4: 'Lakshmi Residency',
            t5: '₹619',
            t6: '*',
            t7: '+ ₹88 tax & fee',
            t8: '940 m from you',
            t9: 'Per night',
            card: 'HotelData3',
            imgs:
            {
                uri: 'https://tse3.mm.bing.net/th?id=OIP.Rie0vOrNsWpHO1IhjheHwAHaEY&pid=Api&P=0&h=220',
            },

        },
        {
            t1: 'Railway Colony,Visakhapatnam',
            t2: '26 % off',
            t2col: 'lightblue',
            t3: '₹750',
            t4: 'Hotel Manthralaya',
            t5: '₹556',
            t7: '+ ₹88 tax & fee',
            t8: '870 m from you',
            t9: 'per night',
            card: 'HotelData4',
            imgs:
            {
                uri: 'https://tse1.mm.bing.net/th?id=OIP.2QDDLDVVWfGtomjcRm6vjwHaE8&pid=Api&P=0&h=220',
            },

        },
        {
            t1: 'Dabagardens,Visakhapatnam',
            t2: '48% off',
            t2col: 'lightblue',
            t3: '₹1099',
            t4: 'Sree Surya Residency',
            t5: '₹570',
            t6: '*',
            t7: '+ ₹83 tax & fee',
            t8: '2.7 km drive to Ramakrishna Beach',
            t9: 'per night',
            card: 'HotelData1',
            imgs:
            {
                uri: 'https://tse4.mm.bing.net/th?id=OIP.2GUquy0lL24IoqhG77GXwQHaE7&pid=Api&P=0&h=220',
            },

        },
        {
            t1: 'Allipuram,Visakhapatnam',
            t2: '37% off',
            t2col: 'yellow',
            t3: '₹999',
            t4: 'Hotel Lakshmi Paradise',
            t5: '₹629',
            t8: '840 m from you',
            t7: '+ ₹92 tax & fee',
            t9: 'Per night',
            card: 'HotelData3',
            imgs:
                { uri: 'https://tse1.mm.bing.net/th?id=OIP.0xZqr5rv59ytlNRDGaMwRQHaEP&pid=Api&P=0&h=220' },

        },
        {
            t1: 'Jagadamba Junction,Visakhapatnam',
            t2: '26% off',
            t2col: 'lightblue',
            t3: '₹999',
            t4: 'Lakshmi INN Lodge',
            t5: '₹742',
            t6: '850 m from you',
            t7: '+ ₹108 tax & fee',
            t8: '2.2 km drive to Ramakrishna Beach',
            t9: 'Per night',
            card: 'HotelData2',
            imgs:
                { uri: 'https://tse4.mm.bing.net/th?id=OIP.7J2dR6mL5Elyd6lV8BTMVwHaEj&pid=Api&P=0&h=220' },

        },
        {
            t1: 'Simhachalam,Visakhapatnam',
            t2: '48% off',
            t2col: 'yellow',
            t3: '₹699',
            t4: 'Surya Residency',
            t5: '₹470',
            t6: '*',
            t7: '+ ₹63 tax & fee',
            t8: '2 km drive to Rushikonda Beach',
            t9: 'per night',
            card: 'HotelData3',
            imgs:
                { uri: 'https://tse4.mm.bing.net/th?id=OIP.qRJFBjNjwd6WeVwwgkcDDgHaE7&pid=Api&P=0&h=220' },

        },
        {
            t1: 'Gopalapatnam,Visakhapatnam',
            t2: '30 % off',
            t2col: 'lightblue',
            t3: '₹650',
            t4: 'Hotel Priya',
            t5: '₹565',
            t7: '+ ₹80 tax & fee',
            t8: '600 m from you',
            t9: 'per night',
            card: 'HotelData2',
            imgs:
                { uri: 'https://tse4.mm.bing.net/th?id=OIP.JbhsI6d_DpTV6QnMGzvO_wHaE8&pid=Api&P=0&h=220' },

        },
    ];

    const renderItem = ({ item }) => (
        <View style={{ flex: 1, marginVertical: 10, marginHorizontal: 15 }}>
            <Card onPress={() => navigation.navigate(item.card)} style={{ height: 200, borderRadius: 20, shadowColor: 'white' }}>
                <Image
                    source={item.imgs}
                    style={{ height: 200, width: '100%', borderRadius: 20 }}
                    resizeMode="cover"
                />
            </Card>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                }}>
                <Text style={{ fontSize: 15, color: 'grey' }}>{item.t1}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Text style={{ fontSize: 12, backgroundColor: item.t2col }}>
                        {item.t2}
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            color: 'grey',
                            textDecorationLine: 'line-through',
                        }}>
                        {item.t3}
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.t4}</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.t5}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 15, color: 'grey' }}>{item.t6}</Text>
                <Text style={{ fontSize: 15, color: 'grey' }}>{item.t7}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 15, color: 'grey' }}>{item.t8}</Text>
                <Text style={{ fontSize: 15, color: 'grey' }}>{item.t9}</Text>
            </View>
        </View>
    );
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(3000);
    const screenWidth = Dimensions.get('window').width;

    const presetRanges = [
        [0, 500],
        [500, 1000],
        [1000, 1500],
        [1500, 2000],
        [2000, 3000],
    ];

    const applyFilter = () => {
        alert("Selected range: ₹${ minPrice } to ₹${ maxPrice }");
    };

    const handlePreset = (min, max) => {
        setMinPrice(min);
        setMaxPrice(max);
    };
    const quickCards = [
        { title: 'Budget Brands', bg: 'lightgreen' },
        { title: 'Under ₹999', bg: 'violet' },
        { title: 'redBus Deals', bg: 'lightblue' },
    ];
    const labels = [
        'Filters',
        'Sort',
        'Price per night',
        'Star Rating',
        'Customer Rating',
        'Hotel Chains',
        'Localities',
    ];
    const tabs = [
        'Sort',
        'Price',
        'Star Rating',
        'Customer Rating',
        'Meal Preferences',
        'Property type',
        'Hotel Chains',
        'Locations',
    ];
    const sortOptions = [
        'Popularity',
        'Customer Rating: Highest First',
        'Price: Lowest First',
    ];
    const StarRating = [
        { t1: '4 star', t2: '* * * *' },
        { t1: '5 star', t2: '* * * * *' },
        { t1: '3 star', t2: '* * *' },
    ];
    const CustomerRating = [
        { t1: 'Excellent', t2: '4.2+ rating' },
        { t1: 'Very Good', t2: '3.5+ rating' },
        { t1: 'Good', t2: '3+ rating' },
    ];
    const MealPreferences = [
        { t1: 'Cooked Meals Available' },
        { t1: 'Self Cooking Available' },
    ];
    const Propertytype = [
        'Hotel',
        'Apartment',
        'Villa',
        'Cottage',
        'Homestay',
        'Resort',
        'Hostel',
        'Holiday Home',
        'Lodge',
    ];
    const HotelChains = ['OYO hotels', 'Treebo Hotels', 'Royal Orchid'];
    const Locations = [
        'Shree Jagannath Temple',
        'Swargadwar Beach',
        'Golden Beach',
        'Baliapanda',
        'New Marine Drive Road',
        'Chakra Tirtha Road',
        'Puri Lighthouse Point',
        'Penthakata',
    ];
    const cardData = [
        {
            title: 'Budget Brands',
            color: 'maroon',
            t1: '24 May - 25 May . 1 room .2 guests',
        },
    ];
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{}}>
                {cardData.map((item, index) => (
                    <View
                        key={index}
                        onPress={() => navigation.navigate(item.screen)}
                        style={{
                            width: '100%',
                            height: 180,
                            backgroundColor: item.color,

                        }}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Icon
                                name="close"
                                size={25}
                                color="grey"
                                onPress={() => navigation.navigate('HotelNear')}
                                style={{ padding: 8 }}
                            />
                        </View>
                        <Text style={{ color: 'white', fontSize: 30, marginTop: 20, fontWeight: 'bold', textAlign: 'center' }}>
                            {item.title}
                        </Text>
                        <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', marginTop: 15 }}>{item.t1}</Text>
                    </View>
                ))}
            </View>
            <View style={{ paddingVertical: 10 }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 10, gap: 10 }}>
                    {labels.map((label, idx) => (
                        <TouchableOpacity
                            key={idx}
                            onPress={() => openModal2()}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderColor: 'grey',
                                borderWidth: 1,
                                borderRadius: 8,
                                paddingHorizontal: 20,
                                height: 35,
                            }}>
                            {label === 'Filters' && (
                                <Icon
                                    name="select-search"
                                    size={20}
                                    color="black"
                                    style={{ marginRight: 5 }}
                                />
                            )}
                            {label === 'Sort' && (
                                <Icon
                                    name="sort-variant"
                                    size={20}
                                    color="black"
                                    style={{ marginRight: 5 }}
                                />
                            )}
                            <Text style={{ fontSize: 14 }}>{label}</Text>
                            {label === 'Sort' && (
                                <Icon
                                    name="menu-down"
                                    size={20}
                                    color="black"
                                    style={{ marginLeft: 5 }}
                                />
                            )}
                        </TouchableOpacity>
                    ))}

                </ScrollView>

            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingBottom: 30 }}
                ListFooterComponent={
                    <View style={{ borderStyle: 'dashed', borderTopWidth: 1, borderColor: 'lightgrey', margin: 15, padding: 10 }}>
                        <Text style={{ fontSize: 20, color: 'lightgrey' }}>This list ends here,</Text>
                        <Text style={{ fontSize: 45, color: 'lightgrey' }}>but your adventure awaits!</Text>
                    </View>
                }
            />


            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <View>
                    <View
                        style={{
                            borderRadius: 20,
                            marginTop: 50,
                            height: 600,
                            width: '100%',
                            backgroundColor: 'white',
                            borderRadius: 20,
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 20,
                                margin: 20,
                            }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Filter</Text>
                            <Icon
                                onPress={hideModal}
                                name="close"
                                size={30}
                                color="black"></Icon>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                height: '100%',
                            }}>
                            <View style={{ width: '35%', backgroundColor: 'lavender' }}>
                                {tabs.map((tab, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => setSelectedTab(tab)}
                                        style={{
                                            padding: 15,
                                            backgroundColor:
                                                selectedTab === tab ? 'white' : 'lavender',
                                        }}>
                                        <Text
                                            style={{
                                                fontWeight: selectedTab === tab ? 'bold' : 'normal',
                                                color: selectedTab === tab ? 'red' : 'black',
                                            }}>
                                            {tab}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
                                <ScrollView>
                                    {selectedTab === 'Sort' &&
                                        sortOptions.map((option, index) => (
                                            <TouchableOpacity
                                                key={index}
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    marginVertical: 10,
                                                }}
                                                onPress={() => setSelectedSort(option)}>
                                                <RadioButton
                                                    color="red"
                                                    status={
                                                        selectedSort === option ? 'checked' : 'unchecked'
                                                    }
                                                    onPress={() => setSelectedSort(option)}
                                                />
                                                <Text>{option}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    {selectedTab === 'Price' &&
                                        <View style={{ padding: 20 }}>
                                            <Text style={{ fontSize: 18, marginBottom: 20 }}>Price per night</Text>

                                            <Text>Min Price: ₹{minPrice}</Text>
                                            <Slider
                                                style={{ width: '100%', height: 40 }}
                                                minimumValue={0}
                                                maximumValue={3000}
                                                step={100}
                                                value={minPrice}
                                                onValueChange={setMinPrice}
                                                minimumTrackTintColor="#e53935"
                                                maximumTrackTintColor="#ccc"
                                            />

                                            <Text>Max Price: ₹{maxPrice}</Text>
                                            <Slider
                                                style={{ width: '100%', height: 40 }}
                                                minimumValue={0}
                                                maximumValue={3000}
                                                step={100}
                                                value={maxPrice}
                                                onValueChange={setMaxPrice}
                                                minimumTrackTintColor="#e53935"
                                                maximumTrackTintColor="#ccc"
                                            />

                                            <Text style={{ marginTop: 20, marginBottom: 10 }}>Quick Select</Text>
                                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                                {presetRanges.map(([min, max], index) => (
                                                    <TouchableOpacity
                                                        key={index}
                                                        onPress={() => handlePreset(min, max)}
                                                        style={{
                                                            backgroundColor: '#eee',
                                                            padding: 10,
                                                            borderRadius: 10,
                                                            margin: 5,
                                                        }}
                                                    >
                                                        <Text>${min} - ${max}</Text>
                                                    </TouchableOpacity>
                                                ))}
                                            </View>

                                            <View style={{ marginTop: 30 }}>
                                                <Button title="Apply" color="#e53935" onPress={applyFilter} />
                                            </View>
                                        </View>
                                    }
                                    {selectedTab === 'Star Rating' &&
                                        StarRating.map((item, index) => (
                                            <View
                                                key={index}
                                                style={{
                                                    flexDirection: 'row',
                                                    gap: 20,
                                                    marginVertical: 10,
                                                }}>
                                                <Checkbox
                                                    status={
                                                        checkboxValues[item.t1] ? 'checked' : 'unchecked'
                                                    }
                                                    onPress={() =>
                                                        setCheckboxValues({
                                                            ...checkboxValues,
                                                            [item.t1]: !checkboxValues[item.t1],
                                                        })
                                                    }
                                                />
                                                <View>
                                                    <Text style={{ fontSize: 16 }}>{item.t1}</Text>
                                                    <Text style={{ fontSize: 16 }}>{item.t2}</Text>
                                                </View>
                                            </View>
                                        ))}

                                    {selectedTab === 'Customer Rating' &&
                                        CustomerRating.map((item, index) => (
                                            <View
                                                key={index}
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    marginVertical: 10,
                                                }}>
                                                <Checkbox
                                                    status={
                                                        checkboxValues[item.t1] ? 'checked' : 'unchecked'
                                                    }
                                                    onPress={() =>
                                                        setCheckboxValues({
                                                            ...checkboxValues,
                                                            [item.t1]: !checkboxValues[item.t1],
                                                        })
                                                    }
                                                />
                                                <Text style={{ fontSize: 16 }}>{item.t1}</Text>
                                                <Text style={{ fontSize: 16 }}>{item.t2}</Text>
                                            </View>
                                        ))}

                                    {selectedTab === 'Meal Preferences' &&
                                        MealPreferences.map((item, index) => (
                                            <View
                                                key={index}
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    marginVertical: 10,
                                                }}>
                                                <Checkbox
                                                    status={
                                                        checkboxValues[item.t1] ? 'checked' : 'unchecked'
                                                    }
                                                    onPress={() =>
                                                        setCheckboxValues({
                                                            ...checkboxValues,
                                                            [item.t1]: !checkboxValues[item.t1],
                                                        })
                                                    }
                                                />
                                                <Text>{item.t1}</Text>
                                            </View>
                                        ))}

                                    {selectedTab === 'Property type' &&
                                        Propertytype.map((type, index) => (
                                            <View
                                                key={index}
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    marginVertical: 10,
                                                }}>
                                                <Checkbox
                                                    status={
                                                        checkboxValues[type] ? 'checked' : 'unchecked'
                                                    }
                                                    onPress={() =>
                                                        setCheckboxValues({
                                                            ...checkboxValues,
                                                            [type]: !checkboxValues[type],
                                                        })
                                                    }
                                                />
                                                <Text>{type}</Text>
                                            </View>
                                        ))}

                                    {selectedTab === 'Hotel Chains' &&
                                        HotelChains.map((chain, index) => (
                                            <View
                                                key={index}
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    marginVertical: 10,
                                                }}>
                                                <Checkbox
                                                    status={
                                                        checkboxValues[chain] ? 'checked' : 'unchecked'
                                                    }
                                                    onPress={() => {
                                                        setSelectedTab('Hotel Chains')
                                                        setCheckboxValues({
                                                            ...checkboxValues,
                                                            [chain]: !checkboxValues[chain],
                                                        })
                                                    }
                                                    }
                                                />
                                                <Text>{chain}</Text>
                                            </View>
                                        ))}

                                    {selectedTab === 'Locations' &&
                                        Locations.map((location, index) => (
                                            <View
                                                key={index}
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    marginVertical: 10,
                                                }}>
                                                <Checkbox
                                                    status={
                                                        checkboxValues[location] ? 'checked' : 'unchecked'
                                                    }
                                                    onPress={() => {
                                                        setSelectedTab('Locations');
                                                        setCheckboxValues({
                                                            ...checkboxValues,
                                                            [location]: !checkboxValues[location],
                                                        })
                                                    }
                                                    }
                                                />
                                                <Text>{location}</Text>
                                            </View>
                                        ))}
                                </ScrollView>

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginTop: 20,
                                    }}>
                                    <Button
                                        mode="outlined"
                                        onPress={() => {
                                            setCheckboxValues({});
                                            setSelectedSort('Popularity');
                                            hideModal2();
                                        }}>
                                        Reset
                                    </Button>
                                    <Button mode="contained" onPress={hideModal2}>
                                        Apply
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>


        </View >

    );
};

export default App;