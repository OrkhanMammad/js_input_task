
function groupName() {
    let input = document.getElementById('input');
    let value1 = input.value;
    if (value1.length < 4) {
        document.getElementById('group').innerHTML = "Minimum 4 simvol olmalidir";
    }
    else if (value1.length > 5) {
        document.getElementById('group').innerHTML = "Maksimum 5 simvol olmalidir";
    }
    else {
        if (!isNaN(value1[0])) {
            document.getElementById('group').innerHTML = "Qrup novu herfle baslamalidir";
        }
        else {
            if (isNaN(value1.slice(-3))) {
                document.getElementById('group').innerHTML = "Qrup nomresi minimum 3 reqemden ibaret olmalidir";
            }
            else {

                if (value1[value1.length - 3] == 1) {
                    document.getElementById('group').innerHTML = value1;
                    document.getElementById('group').style.color = 'yellow';
                }
                else if (value1[value1.length - 3] == 2) {
                    document.getElementById('group').innerHTML = value1;
                    document.getElementById('group').style.color = 'red';

                }
                else if (value1[value1.length - 3] == 3) {
                    document.getElementById('group').innerHTML = value1;
                    document.getElementById('group').style.color = 'black';
                }
                else {
                    document.getElementById('group').style.color = 'black';
                    document.getElementById('group').innerHTML = "Bu qrup movcud deyil"
                }

            }


        }
















    }




}