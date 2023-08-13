import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Animated,
  Image,
  TextInput,
  SafeAreaView,

} from 'react-native';
import RadioButtonContainer from '../ui-componrts/RadioButton/RadioButtonContainer';
import Dropdown from '../ui-componrts/Dropdown';
import CheckBox from "expo-checkbox";
import Icon from 'react-native-vector-icons/Ionicons';
import {useDetectDevice} from '../toolkits';


type AccordionItemPros = PropsWithChildren<{
  title: string;
  expandble? : boolean,
  completed? : boolean
}>;

function AccordionItem({ children, title ,expandble,completed}: AccordionItemPros): JSX.Element {
  const [ expanded, setExpanded ] = useState(false);

 
  function toggleItem() {
    setExpanded(!expanded);
  }

  


  const body = <View style={styles.accordBody}>{ children }</View>;
  
  return (
    <View style={styles.accordContainer}>
      <TouchableOpacity style={styles.accordHeader} onPress={ toggleItem }>
       {
         (expandble) && <Image style={{width:20,height:20}} source={  require('../../assets/images/down.png')  } /> 
       }
      <Text style={styles.accordTitle}>{ title }</Text>
      {
       completed && <Icon style={{alignSelf:'flex-end',marginLeft:'auto',color:'#3f704d'}} name="checkmark-done-circle"  size={30} />
      }
      </TouchableOpacity>
      {  (expandble)  && body }
      


      
    </View>
  );
}

const UserProfile = ({navigation}: {navigation: any}) => {
  const [personalSection,expandPersonalSection] = useState(true)
  const [employmentSection,expandEmploymentSection] = useState(false)
  const [financialSection,expandFinancialSection] = useState(false)
  const [regulateSection,expandregulateSection] = useState(false)
  const [designateBenSection,expandDesignateBenSection] = useState(false)
  const [trustedContactSection,expandTrustedCintactection] = useState(false)

  const [personalSectionCompleted,setPersonalSectionCompleted] = useState(false)
  const [employmentSectionCompleted,setEmploymentSectionCompleted] = useState(false)
  const [financialSectionCompleted,setFinancialSectionCompleted] = useState(false)
  const [regulateSectionCompleted,setRegulateSectionCompleted] = useState(false)
  const [designateBenSectionCompleted,setdesignateBenSectionCompleted] = useState(false)
  const [trustedContactSectionCompleted,settrustedContactSectionCompleted] = useState(false)

  const [maritalStatus, setMaritalStatus] = React.useState(null);
  const [citizensgip, setCitizensgip] = React.useState(null);
  const [isFocus, setIsFocus] = React.useState(false);
  const [agree, setAgree] = useState(false);
  const [toolTipVisible, setToolTipVisible] = useState(false);

  const isMobile =useDetectDevice.isAndroid || useDetectDevice.isIOS;

  
  const matiralStatusdata= [
    {label:'Single', value:'Single'},
    {label:'Married', value:'Married'},
    {label:'Diverce', value:'Diverce'},
    {label:'Widow', value:'Widow'}, 
 ]

 const citizenshipdata= [
  {label:'Albania', value:'ALB'},
  {label:'Algeria', value:'DZA'},
  {label:'Bahrain', value:'BHR'},
  {label:'United States', value:'USA'}, 
]
  const data = [
    {
        text: "I want to add atrusted contact.",
    },
    {
      text: "I do not want to add atrusted contact.",
    }
  ]

  const data1 = [
    {
        text: "Yes",
    }
  ]

  const data2 = [
    {
        text: "No, I,ll do it later",
    }
  ]


  const handleButtonClick = (sectionName:String) => {
      if(sectionName==='Personal' || sectionName==='TrustedContact') {
        expandEmploymentSection(true);
        expandPersonalSection(false);
        setPersonalSectionCompleted(true);
      } 
  }
 
  const handleFinancialButtonClick = () => {
    expandFinancialSection(false); 
    expandregulateSection(true);
    setFinancialSectionCompleted(true);
  } 

  const handleEmploymentButtonClick = () => {
    expandEmploymentSection(false);
    expandFinancialSection(true); 
    setEmploymentSectionCompleted(true);
  } 

  const expandRegulateSection = () => {
    expandDesignateBenSection(true);
    expandregulateSection(false);
    setRegulateSectionCompleted(true);
  }


  const handleDesinateClick = () => {
    expandDesignateBenSection(false);
    expandTrustedCintactection(true);
    setdesignateBenSectionCompleted(true);
  }

  const handleTrustedButtonClick = () => {
    expandTrustedCintactection(!trustedContactSection);
    expandPersonalSection(false)
    navigation.navigate('TermsAlert');
  } 

 
 
  return (
    <>
    <View style={{backgroundColor: "#e2dede"}}>
        <Text>{'\n'}</Text>
        <Text style={{marginLeft: 20, fontSize: 25}}>Welcome, ABCDEF</Text>
        <Text>{'\n'}</Text>
        <Text style={{marginLeft: 20, fontSize: 15}}>{'This information will be used for yourModerate Growth and income portfolio'}</Text>
        <Text>{'\n'}</Text>
        <View style={styles.progressBar}>
            <Animated.View style={styles.absoluteFill}/>
        </View>
        <Text>{'\n'}</Text>
    </View>
    <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <AccordionItem title="Personal & Contact information"
        completed={personalSectionCompleted}
        expandble={personalSection}>
          <View style={styles.InputContainer}>
            <View style={styles.InnerContainer}>
              <Text style={styles.labelFont}>First name</Text>
              <Text style={styles.textValColor}> Aleander</Text>
             </View> 
              <View style={styles.InnerContainer}>
              <Text style={styles.labelFont}>Last name</Text>
              <Text style={styles.textValColor}>Peter</Text>
             </View>
          </View>
          <View style={styles.InputContainer}>
          <View style={styles.InnerContainer}>
              <Text style={styles.labelFont}>Middle name (or initial)</Text>
              <Text style={styles.textValColor}> Aleander</Text>
            </View>
            <View style={styles.InnerContainer}>
            <Text style={styles.labelFont}>Suffix (Optional)</Text>
            <Text style={styles.textValColor}>{'Mr'}</Text>
            </View>
          </View>
          <View style={styles.InputContainer}>
            <View>
            <Text style={styles.labelFont}>Social Security Number</Text>
            <Text style={styles.textValColor}> ****2345</Text>
            </View>
            <View style={styles.InnerContainer}>
              <Text></Text>
              <Text>{''}</Text>
            </View>
          </View>

          <View style={styles.InputContainer}>
          <View style={styles.InnerContainer}>
             <Text style={styles.labelFont}>Emial address</Text>
             <Text style={styles.textValColor}>test@mail.com</Text>
            </View>
            <View style={styles.InnerContainer}>
            <Text style={styles.labelFont}>Residential address</Text>
            <Text style={styles.textValColor}>{'801 CHESTNUT STST. \nLOUIS, MO 63101'}</Text>
            </View>
          </View>
          <View style={styles.InputContainer}>
          <View style={styles.InnerContainer}>
              <Text style={styles.labelFont}>Phone number</Text>
              <Text style={styles.textValColor}>(707) 766-1757</Text>
            </View>
      
            <View style={styles.InnerContainer}>
              <Text style={styles.labelFont}>Residential address</Text>
              <TextInput style={[styles.textInput,styles.textValColor]}></TextInput>
            </View>
          </View>
          <View style={styles.InputContainer}>
            <View style={styles.InnerContainer}>
              <Text style={styles.labelFont}>Phone number</Text>
              <Text style={styles.textValColor}>(707) 766-1757</Text>
            </View>
            <View style={styles.InnerContainer}>
            <Text style={styles.labelFont}>Add a mailing address</Text>
              <Text>{''}</Text>
            </View>
          </View>

          <View style={styles.InputContainer}>
            <View style={styles.InnerContainer}>
              <Text style={styles.labelFont}>Birthdate</Text>
              <TextInput value={'12/09/1986'} style={[styles.textInput,styles.textValColor]}></TextInput>
            </View>
            <View style={styles.InnerContainer}>
              <Text style={styles.labelFont}>No of Dependents</Text>
              <TextInput style={[styles.textInput,styles.textValColor]}></TextInput>
            </View>
          </View>

          <View style={styles.InputContainer}>
            <View style={styles.InnerContainer}>
             <Text style={styles.labelFont}>Marital status</Text>
              <View>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={matiralStatusdata || 'Select'}
                    search={false}
                    maxHeight={300}
                    minHeight={100}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select' : ''}
                    searchPlaceholder="Search..."
                    value={maritalStatus}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                    setMaritalStatus(item.value);
                    setIsFocus(true);
                    }}/>
                </View>

            </View>
            <View style={styles.InnerContainer}>
              <Text style={styles.labelFont}>Citizenship</Text>
              <View>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={citizenshipdata || 'Select'}
                    search={false}
                    maxHeight={300}
                    minHeight={100}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select' : ''}
                    searchPlaceholder="Search..."
                    value={citizensgip}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                    setCitizensgip(item.value);
                    setIsFocus(true);
                    }}/>
                </View>

            </View>
          </View>
          
          <View style={styles.multiButtonContainer}>
          <TouchableOpacity style={styles.continue_button} onPress={()=> handleButtonClick('Personal')}>
          <Text style={styles.continue_button_text}>Continue</Text>
          </TouchableOpacity>
      </View> 
        </AccordionItem>
        <AccordionItem  expandble={employmentSection} 
         completed={employmentSectionCompleted}
        title="Employment" >
        <View style={{justifyContent:'center',alignItems:'center'}}>
             <Text style={styles.labelFont}>Employment Status</Text>
              <View style={{width:'40%'}}>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={matiralStatusdata || 'Select'}
                    search={false}
                    maxHeight={300}
                    minHeight={100}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select' : ''}
                    searchPlaceholder="Search..."
                    value={maritalStatus}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                    setMaritalStatus(item.value);
                    setIsFocus(true);
                    }}/>
                </View>
          </View>
          
          <View style={styles.InputContainer}>
          <View style={styles.InnerContainer}>
              <Text style={styles.labelFont}>Occupation</Text>
              <View>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={citizenshipdata || 'Select'}
                    search={false}
                    maxHeight={300}
                    minHeight={100}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select' : ''}
                    searchPlaceholder="Search..."
                    value={citizensgip}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                    setCitizensgip(item.value);
                    setIsFocus(true);
                    }}/>
                </View>
            </View>
            <View style={styles.InnerContainer}>
              <Text style={styles.labelFont}>Employee street address</Text>
              <TextInput style={[styles.textInput,styles.textValColor]}></TextInput>
            </View>
          </View>

          <View style={styles.InputContainer}>
            <View style={styles.InnerContainer}>
              <Text style={styles.labelFont}>Employer name</Text>
              <TextInput value={'12/09/1986'} style={[styles.textInput,styles.textValColor]}></TextInput>
            </View>
            <View style={styles.InnerContainer}>
              <Text style={styles.labelFont}>Address line1(optional)</Text>
              <TextInput style={[styles.textInput,styles.textValColor]}></TextInput>
            </View>
          </View>

          <View style={styles.InputContainer}>
            <View style={styles.InnerContainer}>
              <Text style={styles.labelFont}>Job title</Text>
              <TextInput value={'12/09/1986'} style={[styles.textInput,styles.textValColor]}></TextInput>
            </View>
            <View style={styles.InnerContainer}>
              <Text style={styles.labelFont}>Address line2(optional)</Text>
              <TextInput style={[styles.textInput,styles.textValColor]}></TextInput>
            </View>
          </View>

          <View style={styles.InputContainer}>
            <View style={styles.InnerContainer}>
              <Text style={styles.labelFont}>Years with employer</Text>
              <TextInput value={'12/09/1986'} style={[styles.textInput,styles.textValColor]}></TextInput>
            </View>
            <View style={styles.InnerContainer}>
              <Text style={styles.labelFont}>Zip code</Text>
              <TextInput style={[styles.textInput,styles.textValColor]}></TextInput>
            </View>
          </View>

          <View style={styles.InputContainer}>
            <View style={styles.InnerContainer}>
              <Text>{''}</Text>
             
            </View>
            <View style={styles.InnerContainer}>
              <Text style={styles.labelFont}>Business phone(optionak)</Text>
              <TextInput style={[styles.textInput,styles.textValColor]}></TextInput>
            </View>
          </View>
          <TouchableOpacity style={[{marginTop:10},styles.continue_button]} onPress={()=> handleEmploymentButtonClick()}>
          <Text style={styles.continue_button_text}>Continue</Text>
          </TouchableOpacity>
         </AccordionItem>
        <AccordionItem expandble={financialSection}  completed={financialSectionCompleted} title="Finances" >
        <View style={{justifyContent:'flex-start',alignItems:'flex-start'}}>
             <Text style={styles.labelFont}>Source of initial investment 
             <Icon name="information-circle-outline" style={{display:'flex',marginLeft:'90%',marginTop:'-15%',color:'grey'}} size={30} />
             </Text>
              <View style={{width:'70%'}}>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={matiralStatusdata || 'Select'}
                    search={false}
                    maxHeight={300}
                    minHeight={100}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select' : ''}
                    searchPlaceholder="Search..."
                    value={maritalStatus}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                    setMaritalStatus(item.value);
                    setIsFocus(true);
                    }}/>
                </View>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={agree}
              onValueChange={() => setAgree(!agree)}
              color={agree ? "#946e3a" : undefined}
            />
            <Text style={styles.checkBoxText} >
              I have experience buying or selling stocks, bonds, options, annuities, life insurence or mutual funds,
            </Text>
          </View>
          <View style={{marginTop:10,justifyContent:'flex-start',alignItems:'flex-start'}}>
             <Text style={styles.labelFont}>Annual gross income <Icon name="information-circle-outline" style={{display:'flex',marginLeft:'100%',marginTop:'-17%',color:'grey'}} size={30} /></Text>
              <View style={{width:'70%'}}>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={matiralStatusdata || 'Select'}
                    search={false}
                    maxHeight={300}
                    minHeight={100}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select' : ''}
                    searchPlaceholder="Search..."
                    value={maritalStatus}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                    setMaritalStatus(item.value);
                    setIsFocus(true);
                    }}/>
                </View>
          </View>
          <View style={{marginTop:10,justifyContent:'flex-start',alignItems:'flex-start'}}>
             <Text style={styles.labelFont}>Net worth <Icon name="information-circle-outline" style={{display:'flex',marginLeft:'100%',marginTop:'-40%',color:'grey'}} size={30} /></Text>
              <View style={{width:'70%'}}>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={matiralStatusdata || 'Select'}
                    search={false}
                    maxHeight={300}
                    minHeight={100}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select' : ''}
                    searchPlaceholder="Search..."
                    value={maritalStatus}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                    setMaritalStatus(item.value);
                    setIsFocus(true);
                    }}/>
                </View>
          </View>
          <View style={{marginTop:10,justifyContent:'flex-start',alignItems:'flex-start'}}>
             <Text style={styles.labelFont}>Liquid net worth <Icon name="information-circle-outline" style={{display:'flex',marginLeft:'100%',marginTop:'-25%',color:'grey'}} size={30} /> </Text>
              <View style={{width:'70%'}}>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={matiralStatusdata || 'Select'}
                    search={false}
                    maxHeight={300}
                    minHeight={100}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select' : ''}
                    searchPlaceholder="Search..."
                    value={maritalStatus}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                    setMaritalStatus(item.value);
                    setIsFocus(true);
                    }}/>
                </View>
          </View>
          <View style={{marginTop:10,justifyContent:'flex-start',alignItems:'flex-start'}}>
             <Text style={styles.labelFont}>Other investments <Icon name="information-circle-outline" style={{display:'flex',marginLeft:'100%',marginTop:'-20%',color:'grey'}} size={30} /></Text>
              <View style={{width:'70%'}}>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={matiralStatusdata || 'Select'}
                    search={false}
                    maxHeight={300}
                    minHeight={100}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select' : ''}
                    searchPlaceholder="Search..."
                    value={maritalStatus}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                    setMaritalStatus(item.value);
                    setIsFocus(true);
                    }}/>
                </View>
          </View>
          <View style={{marginTop:10,justifyContent:'flex-start',alignItems:'flex-start'}}>
             <Text style={styles.labelFont}>Tax bracket <Icon name="information-circle-outline" style={{display:'flex',marginLeft:'100%',marginTop:'-30%',color:'grey'}} size={30} /></Text>
              <View style={{width:'70%'}}>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={matiralStatusdata || 'Select'}
                    search={false}
                    maxHeight={300}
                    minHeight={100}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select' : ''}
                    searchPlaceholder="Search..."
                    value={maritalStatus}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                    setMaritalStatus(item.value);
                    setIsFocus(true);
                    }}/>
                </View>
          </View>
          <TouchableOpacity style={[{marginTop:10},styles.continue_button]} onPress={()=> handleFinancialButtonClick()}>
          <Text style={styles.continue_button_text}>Continue</Text>
          </TouchableOpacity>
        </AccordionItem>
        <AccordionItem expandble={regulateSection} completed={regulateSectionCompleted} title="Regulatory/Afflitiation">
         <Text>Any of these regulatory statements that apply to you</Text>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={agree}
              onValueChange={() => setAgree(!agree)}
              color={agree ? "#946e3a" : undefined}
            />
            <Text style={styles.checkBoxText} >
              I am a XXXXX Employee
            </Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={agree}
              onValueChange={() => setAgree(!agree)}
              color={agree ? "#946e3a" : undefined}
            />
            <Text style={styles.checkBoxText} >
              I am the spouse or dependent family member of a XXXXX Employee
            </Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={agree}
              onValueChange={() => setAgree(!agree)}
              color={agree ? "#946e3a" : undefined}
            />
            <Text style={styles.checkBoxText} >
              I am, a memer of my immidiate family is or abussiness associate is current or former senior forgin politicol figure
            </Text>
          </View>
          <TouchableOpacity style={[{marginTop:10},styles.continue_button]} onPress={()=> expandRegulateSection()}>
          <Text style={styles.continue_button_text}>Continue</Text>
          </TouchableOpacity>
        </AccordionItem>
        <AccordionItem expandble={designateBenSection} completed={designateBenSectionCompleted} title="Designate beneficiciries" >
        <View style={{flexDirection:'row',marginLeft:5}}>
        <Text>Would you like to designate beneficiciries now? <Icon name="information-circle-outline"  size={30} /></Text>
        </View>
         <View style={[{ flexWrap:"wrap"},styles.InputContainer]}>
         <RadioButtonContainer values={data1} onPress={()=>console.log('')} />
         <RadioButtonContainer values={data2} onPress={()=>console.log('')} />
         </View>
         <View style={{flexDirection:'row',backgroundColor:"#DCDCDC",borderRadius:30,padding:5}}>
         <Icon name="information-circle-outline"  size={10} />
         <Text style={{fontSize:10,marginLeft:2}}>If you haven't choosen a beneficiary at the time of your deth, your assets will be distributed as outlined in the beneficiary section of the IRA custodial Agreement</Text>
         </View>
         <TouchableOpacity style={[{marginTop:10},styles.continue_button]} onPress={()=> handleDesinateClick()}>
          <Text style={styles.continue_button_text}>Continue</Text>
          </TouchableOpacity>
        </AccordionItem>
        <AccordionItem title="Trusted Contact" 
         expandble={trustedContactSection}>
        <Text>Would you like to add a trusted contact now?</Text>
        <Text>{'\n'}</Text>
        <Text>For an extra layer of security, you can name someone you trust as an additional contact for your account. To complete this step, you'll need to provide atleast one piece of their contact information - email, phone numer or address</Text>
        <Text>{'\n'}</Text>
        <Text>By adding a trusted contact, you authorize our team to contact your trusted contact and inquire about your health or welfare if we cannot reach you directly. We may also disclose information about you or any of your accounts or ask your trusted contact to confirm your contact information or the identify of a legal guardian, executor, trustee or holder of a power of attorney.</Text>
        <SafeAreaView>
            <RadioButtonContainer values={data} onPress={()=>console.log('')} />
         </SafeAreaView>
         <TouchableOpacity style={styles.continue_terms_button} onPress={()=> handleTrustedButtonClick()}>
          <Text style={styles.continue_button_text}>Continue to Terms</Text>
          </TouchableOpacity>
        </AccordionItem>
      </ScrollView>
    </>
  );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "#f4f0ed",
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    heading: {
        width: "100%",
        height: 40,
        fontFamily: "Georgia, serif",
        fontSize: 20,
        marginLeft: 20,
        '@media (max-width: 1600px) and (min-width: 800px)': {
            width:400,
        },
    },
    multiButtonContainer: {
        margin: 20,
        display: "flex",
        flexDirection: 'row',
      },
    button: {
        width: 30
    },
    progressBar: {
        height: 7,
        flexDirection: "row",
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: 20
      },
      absoluteFill : {
        backgroundColor: "purple",
        width: 210
      },
      rowContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        marginTop: 1,
        color:"grey",
        marginBottom: 20,
        textAlign:'justify',
        flexWrap:"wrap",
    },
  accordContainer: {
    paddingBottom: 4,
    marginTop:20,
    paddingTop:10,
    backgroundColor:'white',
    borderRadius:10
  },
  accordHeader: {
    padding: 12,
    backgroundColor: '#fff',
    color: '#eee',
    flex: 1,
    flexDirection: 'row',
    
  },
  accordTitle: {
    fontSize: 14,
  },
  accordBody: {
    padding: 12
  },
  textSmall: {
    fontSize: 16
  },
  seperator: {
    height: 12
  },
  InputContainer : {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15,
    alignItems:'flex-start'
  },
 InnerContainer : {
    justifyContent:'flex-start',
    width:'40%',
    wordBreak:'break-word'
  },
  labelFont : {
    fontSize:14,
    fontWeight:'bold',
    maxHeight:60,
  },
continue_button: {
    backgroundColor: '#white',
    width: "35%", height: 30,
    borderWidth: 2,
    borderColor: '#87190a',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign:'middle',
    marginLeft:'35%'

},
continue_terms_button: {
  backgroundColor: 'white',
  width: "45%", height: 30,
  borderWidth: 2,
  borderColor: '#87190a',
  borderRadius: 30,
  justifyContent: 'center',
  alignItems: 'center',
  verticalAlign:'middle',
  marginLeft:'30%'

},
continue_button_text: {
  color: '#87190a',
  fontWeight: "bold"
},
next_button_text: {
    color: '#fff',
    fontWeight: "bold"
},
dropdown: {
  height: 45,
  borderColor: 'gray',
  borderTopWidth: 0,
  borderBottomWidth:1,
  paddingHorizontal: 2,
  paddingBottom:1
},
icon: {
  marginRight: 5,
},
label: {
  position: 'absolute',
  backgroundColor: 'white',
  left: 22,
  top: 0,
  zIndex: 999,
  paddingHorizontal: 8,
  fontSize: 14,
},
placeholderStyle: {
  fontSize: 16,
},
selectedTextStyle: {
  fontSize: 16,
},
iconStyle: {
  width: 20,
  height: 20,
},
inputSearchStyle: {
  height: 40,
  fontSize: 16,
},
textInput: {
  height:40,
  borderBottomColor:'#eee',
  margin:5,
 borderBottomWidth: 2    
},
textValColor:{
 color:'#A9A9A9'
},
checkboxWrapper: {
  display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 15,
},
checkBoxText: {
  lineHeight: 20,
  marginLeft: 10,
},
IconContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#F5FCFF",
  flexDirection: "column"
},
fonticon: {
  fontSize: 40,
  marginTop: 30
}
});

export default UserProfile;