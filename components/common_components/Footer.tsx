import React, { FC, ReactElement } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import StyleSheet from 'react-native-media-query';

export const Footer: FC<{}> = ({ }): ReactElement => {

    const data=[
        {key: "Not Insured by the FDIC or Any Federal Government Agency"},
        {key: "Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiliate"},
        {key: "Subject to Investment Risks, Including Possible Loss of the Principal Amount Invested"}
        ];

    const { ids, styles } = StyleSheet.create({
        container: {
            flexDirection: "column",
            backgroundColor: '#f4f0ed',
        },
        end_bar: {            
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontFamily: "Georgia, serif",
            fontSize: 25,
            color: "#fff",
            textAlign: "center",
            textAlignVertical: "center",
            verticalAlign: "middle",
            lineHeight: 1,
            backgroundColor: '#946e3a',
            height: 40,
            '@media (max-width: 1600px) and (min-width: 800px)': {
              width: 400,
              height: 100
            }
          },
          bar_text: {
              width: 150,
              color: "#fff"
          },
    });
    return (
        <>
            <View style={styles.container}>
                <View style={{ borderWidth: 1, marginLeft: 20, marginRight: 20, padding: 5 }}>
                    <Text style={{ fontSize: 10, paddingBottom: 10 }}>Investment and Insurance Products are:</Text>
                    {/* <FlatList data={[
                                {key: "Not Insured by the FDIC or Any Federal Government Agency"},
                                {key: "Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiliate"},
                                {key: "Subject to Investment Risks, Including Possible Loss of the Principal Amount Invested"}
                                ]} 
                            renderItem={({item})=><Text style={{ fontSize: 10}}>{'\u2B24'+' '}{item.key}</Text>}/> */}
                    {data.map((item)=> <Text key={item.key} style={{ fontSize: 10}}>{'\u2B24'+' '}{item.key}</Text>)}
                </View>

                <View style={{ marginLeft: 20, marginRight: 20, paddingTop: 10 }}>
                    <Text style={{ fontSize: 10 }}>2023 General Bank CLearing Services, LLC.</Text>
                    <Text style={{ fontSize: 10, paddingTop: 10 }}>General Bank Advisors is a trade name used by General Bank Clearing Services, LLC (WFCS), Member SIPC, a registered broker-dealer and non-bank affiliate of General Bank & Company. The WellsTrade and II services are offered through WFCS.</Text>
                    <Text style={{ fontSize: 10, paddingTop: 10 }}>Links to third-party websites are provided for your convenience and informational purpose only. General Bank advisors is not responsible for the information contained on third-party websites.</Text>
                    <Text style={{ fontSize: 10, paddingTop: 10, paddingBottom: 10 }}>CAR 0423-04987</Text>
                </View>

                <View style={styles.end_bar}>
                    <TouchableOpacity style={{marginLeft: 20}}>
                        <Text style={{color:"#fff"}}>Security</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{color:"#fff"}}>Privacy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight: 20}}>
                        <Text style={{color:"#fff"}}>Legal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};