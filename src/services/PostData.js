export function PostData(userData){

    let BaseUrl="https://pehnaway78.000webhostapp.com/login/login.php";
   
 

    return new Promise((resolve, reject) => {
        fetch(BaseUrl,{
            method: 'POST',
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responseJson) =>{
           
           if(responseJson.email){
            resolve(responseJson);
            // console.log(responseJson);
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