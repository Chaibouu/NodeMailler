const { error } = require("console")
const nodemailer = require("nodemailer")
const transporteur = nodemailer.createTransport({
/*     host:"smtp-email.outlook.com",
    securConnection:false,
    port:587,
    tls:{
        ciphers:"SSLv3"
    }, */
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    service:"gmail",
    auth:{
        user:"chaibouabdoulwahab@gmail.com",
        pass:"ayka lfgt sndt sehz"
    }
})

const mailoptions = {
    from : "chaibouabdoulwahab@gmail.com",
    to: "chaibouabdoulwahab@gmail.com",
    subject: "E-mail automatique",
    text: "cet emai est automatique"
}
transporteur.sendMail(mailoptions,(error,info)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("E-mail envoyer" + info.res);
    }
})