//its just a pseudo Code in react native

    const [data,setData] = React.useState({
        email: '',
        password: '',
        secureTextEntry: true,
        emailTextInput: false
    });

  const textInputChange=(value1)=>{
      if(value1.length != 0){
          setData({
                            // here we are doing array destructuring operator  to get excisting state
            ...data,   
            email:value1,
            emailTextInput:true
          })          
      } else{
        setData({
            ...data,
            email:value1,
            emailTextInput:false
          }) 
      }
  }
 
 <View>
                <TextInput
                    placeholder='Enter your Email'
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(value1)=>textInputChange(value1)}
                />
                {data.emailTextInput?   
                                    // checking data by eye icon,if its true
                    <Animatable.View  animation="bounceIn">
                        <Feather 
                        name='check-circle'
                        color='darkgreen'
                        size={20}
                        />
                    </Animatable.View>
                 :null}   
                                     {/* other it give null */} 
</View>
