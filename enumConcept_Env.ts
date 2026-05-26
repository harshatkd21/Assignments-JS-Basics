
enum environment{
    "LOCAL"="https://local.com",
    "DEVELOPMENT" = "https://dev.com",
    "STAGING" = "https://stageing.com",
    "PRODUCTION" = "https://prod.com",
    "Empty" = ""
}
type envType = environment
function runTests(env : envType):void{
    if(env === environment.LOCAL){
        console.log("The current env is Local "+`${env}`);
    }else if(env === environment.DEVELOPMENT){
        console.log("The current env is Dev" +`${env}`)
    }else if(env === environment.STAGING){
        console.log("The current env is stage "+`${env}`);
    }else if(env === environment.PRODUCTION){
        console.log("The current env is prod "+`${env}`);        
    }else{
        console.log("No such env is found ")
    }
}
runTests(environment.DEVELOPMENT)
runTests(environment.LOCAL)
runTests(environment.STAGING)
runTests(environment.PRODUCTION)
runTests(environment.Empty)