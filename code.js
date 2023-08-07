const sheetId = '1-710ftScS9_1iyfHAPEedO_vrqTNOf7B';
// const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const time = new Date()
const sheetName = 'T' + (time.getMonth()+1);
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

  // const query = encodeURIComponent('Select *')
  // const url = `${base}&sheet=${sheetName}&tq=${query}`
  const data = []
  document.addEventListener('DOMContentLoaded', init)
  // const output = document.querySelector('.output')
  
  function init() {
    var ar,i,j,row,thang,ngay;
    var table = document.getElementById("bang_chinh");
    ngay= new Date
    document.getElementById("hom_truoc").innerText=ngay.getDate()-1
    document.getElementById("hom_truoc1").innerText=ngay.getDate()-1
    document.getElementById("hom_nay").innerText=ngay.getDate()
    
    fetch(base)
      .then(res => res.text())
      .then(rep => {
        //Remove additional text and extract only JSON:
        // console.log(rep)
        rep=rep.replace(/","/g,'|').replace(/"/g,'|')
        ar=rep.split("\n").map((n)=>{return n.split("|")})
        // ar[6][5]= '13,26±0,5'
        // ar[8][5]='≤ 7,0'
        // ar[9][5]='≥ 25,64'
        // ar[10][5]='≥ 58,98'
        var cell='<td style="text-align: center;padding-top: 6px;padding-bottom: 6px;padding-left: 2px;padding-right: 2px;">value</td>'
        var line='<tr style="text-align:center;font-size: 0.5em;font-weight: bolder;">cell</tr>'
        var row_data=''
        for (i=1;i<ar.length;i++){
          // console.log(ar[i])
          row = table.insertRow(-1);
          for(j=1;j<15;j++){
            if (j==2 || j==11){
              row_data+=cell.replace('value',ar[i][j]).replace('center','left')
            }
            else {
              row_data+=cell.replace('value',ar[i][j])
            }
          }
          row.innerHTML=line.replace('cell',row_data)
          row_data=''      
        }
      })
  }
