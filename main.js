const ctx = document.getElementById("myChart");
const getGradient = (ctx,ChartArea) =>{
  let gradient = ctx.createlineargradient(
    0, 
    ChartArea.bottom,
    0,
    ChartArea.top
  );
  gradient.addcolorstop(0.9,"rgba(21,123,243,0.2)");
  gradient.addcolorstop(0, "transparent");
  return gradient;
}
new Chart(ctx, {
  type:"line",
  data:{
    labels:["mar","april","may","june","july","aug","sep","oct"],
    datasets:[
      {
        data:[3,2,5,4,19,20,17,15,21],
        borderwidth:2,
        bordercolor:"#157bf8",
        linetension: 0.8,
        fill: true,
        backgroundcolor: (context)=> {
          const Chart = context.chart;
          const {ctx,ChartArea} = chart
          if (!chartArea) return;
          return getGradient(ctx, chartArea);
        },
      },
    ],
  },
  options: {
    Responsive:false,
    scales:{
      y:{beginatzero:true},
    },
    plugins:{
      legend:{display:false},
    },
  },
});



/* transactions */
const transactions = [
  {
    status:1,
    name:"emma eze",
    Image:"assets/flutterwave.jpg",
    email:"emmy@gmail.com",
    date:new Date().toLocaleDateString(),
    amount:"$230",
  },
  {
    status:2,
    name:"james",
    Image:"assets/paystack.png",
    email:"james@gmail.com",
    date:new Date().toLocaleDateString(),
    amount:"$50",
  },
  {
    status:1,
    name:"oluoma patience",
    Image:"assets/paypal.png",
    email:"oluoma@gmail.com",
    date:new Date().toLocaleDateString(),
    amount:"$100",
  },
  {
    status:0,
    name:"Daniel Kasi",
    Image:"assets/paypal.png",
    email:"daniel@gmail.com",
    date:new Date().toLocaleDateString(),
    amount:"$5",
  },
]

const shortenTextFormatter = (text,maxLength) => text.length > maxLength ?
"..." + text.slice(-maxLength) : text;
/* output transactions */
transactions.forEach((data)=> {
  let status = data.status === 1 ? "success" : data.status === 0 ? "failed": "processing";

  
  document.querySelector(".transactions table tbody").insertAdjacentHTML("beforeend",
     `
     <tr>
      <td class="minimize">
        <div class="profile">
         <img src="${data.Image}"/>
        </div>
       </td>
       <td title="${data.name}" class="minimize">${data.name}</td>
       <td class="minimize">${data.date}</td>
       <td title="${data.email}">${shortenTextFormatter(data.email,11)}</td>
       <td title="${data.amount}">${data.amount}</td>
       <td>
        <div class="${status}">${status}</div>
       </td>
     </tr>
    
    `
  );
});


/*--------theme-switch-------*/
const themeswitch = document.getElementById("theme-switch");
const html = document.firstElementChild;
themeswitch.onclick = () => {
  html.classList.toggle("dark");
};


