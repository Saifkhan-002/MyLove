 function calculateAge(){
                const birthDate = new Date('2004-03-04'); // Replace with your birth date
                const today = new Date();
                const diff = today - birthDate;
                const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); // Approximate age in years
                const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30)); // Approximate months
                const weeks = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24 * 7)); // Approximate weeks
                const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)); // Remaining days
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Remaining hours
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // Remaining minutes
                const seconds = Math.floor((diff % (1000 * 60)) / 1000); // Remaining seconds
            

            const timeUnits = [
                { label: 'Years', value: years },
                { label: 'Months', value: months },
                { label: 'Weeks', value: weeks },
                { label: 'Days', value: days },
                { label: 'Hours', value: hours },
                { label: 'Minutes', value: minutes },
                { label: 'Seconds', value: seconds }
            ];

            const container = document.getElementById("age-container");
            container.innerHTML = ''; // Clear previous content
            timeUnits.forEach(unit => {
                const div = document.createElement("div");
                div.classList.add("age-box");
                div.innerHTML = `${unit.value} <br> ${unit.label}`;
                container.appendChild(div);
            });
        }
            setInterval(calculateAge, 1000); // Update every second
            calculateAge();       