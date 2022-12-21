//dichiaro una variabile con un nuovo Vue
let app = new Vue({
    el : '#container',
    data: {
//array per le 10 email randomiche 
        emails: [],
    },

    mounted(){
        //creo un ciclo for per creare le 10 email randomiche
        for( let i = 0 ; i < 10 ; i++){
            //api
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((generatedEmail)=>{
                //pusho le email nell'array
                this.emails.push(generatedEmail.data.response);
            })
        }
        //visualizzo emails
        console.log(this.emails);
    }
})