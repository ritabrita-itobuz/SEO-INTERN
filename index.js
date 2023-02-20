

    function checking() {
        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('mail').value.trim();
        
        if (name === null || name === '')
            alert("name can't be blank");

        if (email === '' || email === null)
            alert("Please provide your your email id");
    }