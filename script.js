
let app = new Vue({
    el : '#container',
    data: {
        email:{},

        emails: [],
    },

    getRandomEmail(){
        const cont = this;

        for( let i = 0 ; i < 10 ; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(generatedEmail){
                cont = email =
            })
        }
    }
})