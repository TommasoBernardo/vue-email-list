//dichiaro una variabile con un nuovo Vue
let app = new Vue({
    el : '#container',
    data: {
        email:{},
//array per le 10 email randomiche 
        emails: [],
    },

    mounted(){
        //uso una variabile per contenere this
        const cont = this;

        //creo un ciclo for per creare le 10 email randomiche
        for( let i = 0 ; i < 10 ; i++){
            //api
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(generatedEmail){
                cont.email = generatedEmail.data.response;
                //visualizzo 
                console.log(cont.email);
                //pusho le email nell'array
                cont.emails.push(cont.email);
            })
        }
        //visualizzo emails
        console.log(cont.emails);
    }
})