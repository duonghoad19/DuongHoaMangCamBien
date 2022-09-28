var valueTemp = 0;
function hamdoimau(evt){
    var backgroundDiv = document.getElementById("content");
    var arr = ['black', 'brown', 'gray','yellow','orange',"red",
    "pink","purple","#cc0171","green",'darkgreen'];
    backgroundDiv.style.background = arr[evt.target.value]
}
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Temperature',
      backgroundColor: 'red',
      borderColor: 'red',
      data: [20, 22, 24, 28 , 23, 30, 34],
      tension: 0.4,
    },
    {
      label: 'Humidity',
      backgroundColor: 'blue',
      borderColor: 'blue',
      data: [40, 70, 57, 100, 59, 70,89],
      tension: 0.4,
    },
    {
      label: 'Light',
      backgroundColor: 'yellow',
      borderColor: 'yellow',
      data: [79, 32, 82, 55, 93, 52, 53 ],
      tension: 0.4,
    },
  ],
}
const config = {
  type: 'line',
  data: data,
}

const canvas = document.getElementById('canvas')
const chart = new Chart(canvas, config)
/**********************************************************************************************************/
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');
  var holder2 = document.getElementById('led1')
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      holder2.style.backgroundImage = "url('anhbatdien.jpg')";
    } else {
      holder2.style.backgroundImage = "url('anhtatdien.png')";
    }
  });
});
/***************************** */
function changeColor(e) {
  let holder1= document.getElementById("led2")
    if (e.target.value === "On") {
      if (confirm("Do you want to turn off the light?") == true) {
        e.target.style.background = "grey"
        e.target.value= "Off"
        holder1.style.backgroundImage =  "url('anh2.jpg')";
      }
       else {
        e.target.style.background = "blue"
          e.target.value = "On"
          holder1.style.backgroundImage =  "url('anh1.jpg')";
      }

    }
    else {
        if (confirm("Do you want to turn on the light?") == true) {
          e.target.style.background = "blue"
          e.target.value = "On"
          holder1.style.backgroundImage = "url('anh1.jpg')";
        }
         else {
          e.target.style.background = "grey"
          e.target.value= "Off"
          holder1.style.backgroundImage =  "url('anh2.jpg')";
        }
      }
}