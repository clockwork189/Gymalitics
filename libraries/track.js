$("nav section ul.left li").removeClass("active");
        $(function() {
            var availableWorkouts = [
                                "Ab Rollout",
                                "Crunches",
                                "Pushups",
                                "Pullups",
                                "Chin-ups",
                                "Barbell Push Press",
                                "Push Press",
                                "Bent Over Rows",
                                "Deadlift",
                                "Rack Pull",
                                "Medicine Ball Slams",
                                "Pull Through",
                                "Facepull",
                                "Squat",
                                "Back Squat",
                                "Front Squat",
                                "Barbell Overhead Press",
                                "Dumbbell Overhead Press",
                                "One Arm Dumbbell Overhead Press",
                                "Dips",
                                "Bulgarian Split Squat",
                                "Rear Foot Elevated Split Squat(RFESS)",
                                "Romanian Deadlift (RDL)",
                                "TRX Rows",
                                "Plank",
                                "Side Plank",
                                "Farmers Carry",
                                "Suitcase Carry",
                                "Walking Lunges",
                                "Lunges",
                                "Reverse Lunges",
                                "Jumping Lunges",
                                "Dumbbell Bench Press",
                                "Bench Press",
                                "Tricep Bench Press",
                                "Kettle Bell Swings(KB Swings)",
                                "Step Up",
                                "Bear Crawls",
                                "Medicine Ball Chest Pass",
                                "Barbell Rows",
                                "Dumbbell Rows",
                                "Single Arm Dumbbell Rows",
                                "Single Arm Dumbbell Chest Press(SA DB Chest Press)",
                                "Single Arm Dumbbell Bench Press(SA DB Bench Press)",
                                "Lat Pulldowns",
                                "Band Pull Apart",
                                "Box Jump",
                                "Single Arm Kettlebell Overhead Press(SA KB OHP)",
                                "TRX Y's",
                                "Burpees"
                            ];
                $( "input[name=workout_name]" ).autocomplete({
                    source: availableWorkouts
                });
            });