  const sheetId = '1GOSlI2StWgksh4xyB3_ppPtFtepYJZeCZkA9asNjOx8';
  // const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
  const sheetName = 'Trang tính1';
  const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

  // const query = encodeURIComponent('Select *')
  // const url = `${base}&sheet=${sheetName}&tq=${query}`
  const data = []
  document.addEventListener('DOMContentLoaded', init)
  // const output = document.querySelector('.output')
  
  function init() {
    var ar,i,j,row,thang;
    var table = document.getElementById("bang_chinh");
    thang= (new Date()).getMonth()+1
    if (thang >=1 && thang<4){thang=1}
    if (thang >=4 && thang<8){thang=4}
    if (thang >=8 && thang<11){thang=7}
    if (thang >=11){thang=10}
    for (i=1; i<4 ;i++){
      document.getElementById("T"+i).innerHTML='THÁNG '+ (thang+i-1);
    }
    fetch(base)
      .then(res => res.text())
      .then(rep => {
        //Remove additional text and extract only JSON:
        // const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
        ar=rep.split("\n").map((n)=>{
          return n.split(",").map((n)=>{
            if (n=='""'){return n=''}
            return n.replace('"','').replace('"','')
          })
        })
        // console.log(string_data)
        console.log(ar)
        var cell='<td style="text-align: center;">value</td>'
        var line='<tr style="text-align: center;font-size: 1em;">cell</tr>'
        var row_data=''
        for (i=1;i<ar.length;i++){
          // console.log(ar[i])
          row = table.insertRow(-1);
          for(j=0;j<21;j++){
            if (j!=1){row_data+=cell.replace('value',ar[i][j])}
            else{row_data+=cell.replace('value',ar[i][j]).replace('center','left')}
          }
          row.innerHTML=line.replace('cell',row_data)
          row_data=''      
        }
      })
  }
