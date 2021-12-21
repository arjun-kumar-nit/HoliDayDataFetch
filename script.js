let yestarday = document.querySelector("#yestarday");
let lastWeek = document.querySelector("#lastweek");
let lastMonth = document.querySelector("#lastmonth");
let setData = document.querySelector(".data");
let Input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let str = "Sorry,...Data is Not Available!!!";

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const url = 'https://www.gov.uk/bank-holidays.json';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const res = data['england-and-wales'].events.concat(data['northern-ireland'].events).concat(data['scotland'].events);
            console.log(res);
            let fromDate = document.getElementById("fromdate").value;
            let toDate = document.getElementById("todate").value;
            const fildata = res.filter((obj) => obj.date >= fromDate && obj.date <= toDate);
            console.log(fildata.length);
            if (fildata.length === 0) {
                document.getElementById("empty").innerHTML = str;
                Input.innerHTML = "";
            } else {
                Input.innerHTML = fildata
                    .map((item) =>
                        `<tr>
                <td>${item.title}</td>
                <td>${item.date}</td>
                <td>${item.notes}</td>
                </tr>`

                    ).join("");
                document.getElementById("empty").innerHTML = "";
            }
        })

});


yestarday.addEventListener("click", () => {

    const url = 'https://www.gov.uk/bank-holidays.json';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const res = data['england-and-wales'].events.concat(data['northern-ireland'].events).concat(data['scotland'].events);
            console.log(res);
            var yesDate = new Date();
            let yestardayDate0 = yesDate.getFullYear() + "-" + (yesDate.getMonth() + 1) + "-" + yesDate.getDate();
            var firstDay = new Date(yesDate.getFullYear() + "/" + (yesDate.getMonth() + 1) + "/" + yesDate.getDate());
            var yestaedays = new Date(firstDay.getTime() - 1 * 24 * 60 * 60 * 1000);
            let yestardayDate1 = yestaedays.getFullYear() + "-" + (yestaedays.getMonth() + 1) + "-" + yestaedays.getDate();

            const fildata = res.filter((obj) => obj.date >= yestardayDate1 && obj.date <= yestardayDate0);
            console.log(fildata.length);
            if (fildata.length === 0) {
                document.getElementById("empty").innerHTML = str;
                Input.innerHTML = "";
            } else {

                Input.innerHTML = fildata
                    .map((item) =>
                        `<tr>
                <td>${item.title}</td>
                <td>${item.date}</td>
                <td>${item.notes}</td>
                </tr>`

                    ).join("");

                document.getElementById("empty").innerHTML = "";
            }


        })





})

lastWeek.addEventListener("click", (e) => {
    e.preventDefault();

    const url = 'https://www.gov.uk/bank-holidays.json';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const res = data['england-and-wales'].events.concat(data['northern-ireland'].events).concat(data['scotland'].events);
            console.log(res);


            var lstweek = new Date();
            let weekDate0 = lstweek.getFullYear() + "-" + (lstweek.getMonth() + 1) + "-" + lstweek.getDate();
            var firstDay = new Date(lstweek.getFullYear() + "/" + (lstweek.getMonth() + 1) + "/" + lstweek.getDate());
            var weeks = new Date(firstDay.getTime() - 7 * 24 * 60 * 60 * 1000);
            let weekDate1 = weeks.getFullYear() + "-" + (weeks.getMonth() + 1) + "-" + weeks.getDate();

            const fildata = res.filter((obj) => obj.date >= weekDate1 && obj.date <= weekDate0);
            console.log(fildata.length);
            if (fildata.length === 0) {
                document.getElementById("empty").innerHTML = str;
                Input.innerHTML = "";
            } else {
                Input.innerHTML = fildata
                    .map((item) =>
                        `<tr>
                 <td>${item.title}</td>
                 <td>${item.date}</td>
                 <td>${item.notes}</td>
                 </tr>`

                    ).join("");
                document.getElementById("empty").innerHTML = "";
            }

        })

})

lastMonth.addEventListener("click", (e) => {
    e.preventDefault();
    const url = 'https://www.gov.uk/bank-holidays.json';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const res = data['england-and-wales'].events.concat(data['northern-ireland'].events).concat(data['scotland'].events);
            console.log(res);


            var lstweek = new Date();
            let weekDate0 = lstweek.getFullYear() + "-" + (lstweek.getMonth() + 1) + "-" + lstweek.getDate();
            var firstDay = new Date(lstweek.getFullYear() + "/" + (lstweek.getMonth() + 1) + "/" + lstweek.getDate());
            var weeks = new Date(firstDay.getTime() - 30 * 24 * 60 * 60 * 1000);
            let weekDate1 = weeks.getFullYear() + "-" + (weeks.getMonth() + 1) + "-" + weeks.getDate();

            const fildata = res.filter((obj) => obj.date >= weekDate1 && obj.date <= weekDate0);
            console.log(fildata.length);
            if (fildata.length === 0) {
                document.getElementById("empty").innerHTML = str;
                Input.innerHTML = "";
            } else {
                Input.innerHTML = fildata
                    .map((item) =>
                        `<tr>
                 <td>${item.title}</td>
                 <td>${item.date}</td>
                 <td>${item.notes}</td>
                 </tr>`

                    ).join("");
                document.getElementById("empty").innerHTML = "";
            }

        })
})