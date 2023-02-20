
    function firstChecking()
    {
        let str = document.getElementById('url').value.trim();
        let email = document.getElementById('email').value.trim();

        regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
            if(!regexp.test(str))
                {
                alert("Please provide any valid URL");
                }
            
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!email.match(mailformat))
                {
                    alert("Please provide your valid emailId");
                }
    }

    function secondChecking() {
        let name = document.getElementById('name').value.trim();
<<<<<<< HEAD
        let mail = document.getElementById('mail').value.trim();
        
            if (name === null || name === '')
                alert("name can't be blank");
        
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!mail.match(mailformat))
                {
                    alert("Please provide your valid emailId");
                }
=======
        let email = document.getElementById('mail').value.trim();
        
        if (name === null || name === '')
            alert("name can't be blank");
>>>>>>> ed5fd9c4a733fc7da9ff0b0c65c54e41fcf161cf

    }