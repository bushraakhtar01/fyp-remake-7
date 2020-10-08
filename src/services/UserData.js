export function UserData(userCredential){

    let BaseUrl="http://localhost/user_authentication/api/login.php";
   
 

    return new Promise((resolve, reject) => {
        fetch(BaseUrl,{
            method: 'POST',
            body: JSON.stringify(userCredential)
        })
        .then((response) => 
            
         response.json())
        .then((responseJson) =>{
           
           if(responseJson.email){
            resolve(responseJson);
        
           }
           else{
            reject("Invalid Credentials, Incorrect Username or Password")
           }
        })
        // .catch((error) => {
        //     reject(error);
          
        
        // });
    });
}