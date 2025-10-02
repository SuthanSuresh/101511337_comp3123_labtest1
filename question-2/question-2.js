const resolvedPromise = () =>{
    setTimeout (() => {
        let success = {'message': 'delayed success!'}
        console.log(success);
    }, 500)
}

const rejectedPromise = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            try {
                throw new Error ('error: delayed exception!');
            } catch (Error) {
                reject(Error);
            }
        }, 500)
    });
}

resolvedPromise()
rejectedPromise().then(result=> console.log(result)).catch(error=> console.log("{ error: 'delayed exception!'}"));
