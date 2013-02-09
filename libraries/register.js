
        $("input#sign_up").click(function() {
            var firstname = $("input[name=firstname]").val();
            var lastname = $("input[name=lastname]").val();
            var twitter_id = $("input[name=twitter_id]").val();
            var email = $("input[name=email]").val();
            var username = $("input[name=username]").val();
            var height_feet = $("input[name=height_feet]").val();
            var height_inches = $("input[name=height_inches]").val();
            var weight = $("input[name=weight]").val();
            var password = $("input[name=password]").val();
            var confirmPassword = $("input[name=confirmPassword]").val();
            
            $.ajax({
                type: "POST",
                url: "/checkuser",
                dataType: "json",
                data: {user: username},
                success: function(data) {
                    if(data.userExists) {
                        $("div.username label, div.username input").addClass("error");
                        $("div.username small").remove();
                        $("<small />").addClass("error").text("Username Exists!").insertAfter("div.username input");
                    } 
                },
                error: function() {
                    console.log('process error');
                }
            });

            $.ajax({
                type: "POST",
                url: "/checkemail",
                dataType: "json",
                data: {email: email},
                success: function(data) {
                    console.log(data);
                    if(data.emailExists) {
                        $("div.email label, div.email input").addClass("error");
                        $("div.email small").remove();
                        $("<small />").addClass("error").text("Email Exists!").insertAfter("div.email input");
                    }
                },
                error: function() {
                    console.log('process error');
                },
            });

                
            
            if(!ValidateText(firstname)) {
                $("div.first_name label, div.first_name input").addClass("error");
                $("div.first_name small").remove();
                $("<small />").addClass("error").text("Invalid First Name").insertAfter("div.first_name input");
            } else {
                $("div.email label, div.email input").addClass("error");
                $("div.email small").remove();
                $("<small />").addClass("error").text("This Email Address Already Exists").insertAfter("div.email input");
            }

            if(!ValidateText(lastname)) {
                $("div.last_name label, div.last_name input").addClass("error");
                $("div.last_name small").remove();
                $("<small />").addClass("error").text("Invalid Last Name").insertAfter("div.last_name input");
            } else {
                $("div.last_name label, div.last_name input").removeClass("error");
                $("div.last_name small").remove();
            }

            if(!ValidateText(username)) {
                $("div.username label, div.username input").addClass("error");
                $("div.username small").remove();
                $("<small />").addClass("error").text("Invalid Username").insertAfter("div.username input");
            } else {
                $("div.username label, div.username input").removeClass("error");
                $("div.username small").remove();
            }

            if(!ValidateText(email)) {
                $("div.email label, div.email input").addClass("error");
                $("div.email small").remove();
                $("<small />").addClass("error").text("Invalid Email").insertAfter("div.email input");
            } else {
                $("div.email label, div.email input").removeClass("error");
                $("div.email small").remove();
            }

            if(password.length < 5) {
                $("div.password label, div.password input").addClass("error");
                $("div.password small").remove();
                $("<small />").addClass("error").text("Password too short").insertAfter("div.password input");
            } else if(password !== confirmPassword) {
                $("div.password label, div.password input").addClass("error");
                $("div.password small").remove();
                $("<small />").addClass("error").text("Passwords dont match").insertAfter("div.password input");
            } else {
                $("div.password label, div.password input").removeClass("error");
                $("div.password small").remove();
            }

            if(!ValidateNumbers(height_feet)) {
                $("div.height label, div.height input").addClass("error");
                $("div.height small").remove();
                $("<small />").addClass("error").text("Invalid Height").insertAfter("div.height input");
            } else {
                $("div.height label, div.height input").removeClass("error");
                $("div.height small").remove();
            }

            if(!ValidateNumbers(height_inches)) {
                $("div.height label, div.height input").addClass("error");
                $("div.height small").remove();
                $("<small />").addClass("error").text("Invalid Height").insertAfter("div.height input");
            } else {
                $("div.height label, div.height input").removeClass("error");
                $("div.height small").remove();
            }

            if(!ValidateNumbers(weight)) {
                $("div.weight label, div.weight input").addClass("error");
                $("div.weight small").remove();
                $("<small />").addClass("error").text("Invalid Weight").insertAfter("div.weight input");
            } else {
                $("div.weight label, div.weight input").removeClass("error");
                $("div.weight small").remove();
            }

            if($(".fields > .error").length <= 0) {
                $("form#signup").submit();
            }
            
        });

        function ValidateText(text) {
            if(isNaN(text) && text.length > 0) {
                console.log("fname", text);
                return true;
            } else {
                return false;
            }
        }

        function ValidateNumbers(number) {
            if(!isNaN(number) && number.length > 0) {
                return true;
            } else {
                return false;
            }
        }