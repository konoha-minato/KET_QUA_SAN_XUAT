{
  // const sheetId = '1-X4iFWGHBIXGQkTXtrzWUU8F8xnRV2H-4fGmRDWKFeg';
  const sheetId = '1EFMIoKBJXv52lMpTFd4Mn3usEqTZAJmp';
  // const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
  // const sheetName = 'data';
  const sheetName = 'KetQua';
  const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

  // const query = encodeURIComponent('Select *')
  // const url = `${base}&sheet=${sheetName}&tq=${query}`
  const data = []
  document.addEventListener('DOMContentLoaded', init)
  // const output = document.querySelector('.output')
  
  function init() {
    var ar,i,j,row;
    var table = document.getElementById("bang_chinh");
    fetch(base)
        .then(res => res.text())
        .then(rep => {
          //Remove additional text and extract only JSON:
          // const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
          ar=rep.split("\n").map((n)=>{return n.split(",")})
          // console.log(string_data)
          // document.getElementById("bang_chinh").innerHTML=string_data

    console.log(ar)
    var cell='<td>value</td>'
    var line='<tr style="text-align: center;font-size: 1em;">cell</tr>'
    console.log(ar.length)
    var row_data, string_data;
    for (i=0;i<ar.length;i++){
      // console.log(ar[i])
      row = table.insertRow(-1);
      for(j=0;j<36;j++){
        // row_data+=cell.replace(ar[i][j],'value')
        if (ar[i][j]=='""'){ar[i][j]=''}
        row_data+=cell.replace('value',ar[i][j]).replace('"','').replace('"','')
      }
      row.innerHTML=line.replace('cell',row_data)
      row_data=''      
    }
        })
  }
  // function processRows(json) {
  //     json.forEach((row) => {
  //         const tr = document.createElement('tr');
  //         const keys = Object.keys(row);
      
  //         keys.forEach((key) => {
  //             const td = document.createElement('td');
  //             td.textContent = row[key];
  //             tr.appendChild(td);
  //         })
  //         output.appendChild(tr);
  //     })
  // }


  
  // //chia bùn
  // var table = document.getElementById("table_gam");
  // var row,i
  // for (i=0;i<ar_gam.length;i++){
  // var row = table.insertRow(-1);
  // row.innerHTML=
  // '<td><input class="f_size_tronmau" type="number" value="'+ar_gam[i]+'" id="gam'+(i+1)+'" onchange="chia_bun('+(i+1)+')"></td>'+
  // '<td><label class="f_size_tronmau_lb" type="text" id="g'+(i+1)+'-1" >0</label></td>'+
  // '<td><label class="f_size_tronmau_lb" type="text" id="g'+(i+1)+'-2" >0</label></td>'+
  // '<td><label class="f_size_tronmau_lb" type="text" id="g'+(i+1)+'-3" >0</label></td>'
  // }

}

// document.getElementById("defaultOpen").click();

// function set_luulg(num){
//   if (num!=undefined) {num_fix=num}
//   console.log(num_fix)
//   var V,ll,deli,sec
//     V= document.getElementById("V_thung").value
//     min= document.getElementById("V1").value
//     deli= parseFloat(document.getElementById("do_chia").value)
//     ll=min-deli
//     for (var i=1;i<=20;i++){
//       ll=ll+deli
//       sec=(3600/ll)*V
//       document.getElementById("c"+i+"_1").innerHTML =ll.toFixed(num_fix) 
//       document.getElementById("c"+i+"_2").innerHTML =sec.toFixed(2) 
//     }
// }

// function getsheet(){
//   // console.log(data)
//   document.getElementById("naoh").value =data[0][0]
//   document.getElementById("hso").value =data[1][0]
// }

// function set_mau_g(){
//   var m,mau,v,mb,d,bi,r,ttl_r
//     d= document.getElementById("d").value
//     mau= document.getElementById("mau_g").value
//     m= document.getElementById("m_g").value
//     v= document.getElementById("v_ml").value
//     mb= document.getElementById("m_binh").value
//     bi= parseInt(document.getElementById("m_bi").value)
//     r=((((d*v)/(m-mb)-d)/(1-d))*100).toFixed(2)
//     document.getElementById("r").innerHTML =r
//     document.getElementById("bun_can").innerHTML =Math.floor((mau*100)/r)
//     document.getElementById("bun_can3").innerHTML =Math.floor((mau*100)/r)+bi
//     chiphi_thuoc (mau)
// }

// function set_pt(num){
//   var ten, naoh,hso,res
//     k_naoh=document.getElementById("naoh").value
//     k_hso=document.getElementById("hso").value
//     ten= document.getElementById("pt_name_" +num).value
//     naoh= document.getElementById("pt_xut_" +num).value      
//     hso= document.getElementById("pt_axit_" +num).value
//     res=Math.floor(k_naoh*naoh*100)-Math.floor(k_hso*hso*0.1*100)
//     res=res/100
//     // console.log(k_naoh+"_"+k_hso)
//     document.getElementById("pt_res_" +num).innerHTML = (0.01*parseInt(k_naoh*naoh*100)).toFixed(2)+","+(0.01*parseInt(k_hso*hso*0.1*100)).toFixed(2) +"_"+res
//     // if (ten!=""){google.script.run.addEvent([ten,"P2O5",res])};
// }

// function set_caphat(num){
//   var am,tong,res,ten
//     ten= document.getElementById("ch_name_" +num).value
//     am= document.getElementById("ch_am_"+num).value
//     tong= document.getElementById("ch_tong_"+num).value      
//     console.log(am+"_"+tong)
//     res=Math.floor((am/tong)*10000)/100
//     console.log(res)
//     document.getElementById("ch_res_"+num).innerHTML=res
//     // if (ten!=""){google.script.run.addEvent([ten,"CH",res])};

// }
// function check(){ //mode tth
//   var log= document.getElementById("tth").checked
//   if (log==true){
//     document.getElementById('tth_mode').innerHTML = "TTH PHA"
//     document.getElementById('tth_r').innerHTML = "1"
//   } else {
//     document.getElementById('tth_mode').innerHTML = "TTH SX"
//     document.getElementById('tth_r').innerHTML = "1.2"
//   }
//   //tinh thuoc
//   chiphi_thuoc (document.getElementById("kl_bun").value)

// }

// function check_ll(a){ //mode luu luong
//   var num_fix=0
//   if (a==1){
//     document.getElementById('md_pilot').checked = false
//     document.getElementById('V_thung').value = "5"
//     document.getElementById('V1').value = "100"
//     document.getElementById('do_chia').value = "100"
//   }
//   if (a==2){
//     document.getElementById('md_sx').checked = false
//     document.getElementById('V_thung').value = "0.05"
//     document.getElementById('V1').value = "1"
//     document.getElementById('do_chia').value = "0.1"
//     num_fix=2
//   }
//   set_luulg(num_fix)

// }
// function chiphi_sx(){
//   var tth,ttl,xut,tth_r,ttl_r,xut_r,th_ml,ttl_ml,xut_ml,mau,ns
//     ns= document.getElementById("ns").value
//     mau= document.getElementById("mau_g").value
//     ttl= document.getElementById("ttl_ll").value
//     xut= document.getElementById("xut_ll").value
//     tth= document.getElementById("tth_ll").value
//     ttl_r= Number(document.getElementById("ttl_r").textContent)
//     xut_r= Number(document.getElementById("xut_r").textContent)
//     tth_r= Number(document.getElementById("tth_r").textContent)
//     ttl_ml= (ttl*ttl_r*10)/ns
//     xut_ml= (xut*xut_r*10)/ns
//     tth_ml= (tth*tth_r*10)/ns
//     document.getElementById("ttl_sx").innerHTML =Math.floor(ttl_ml)
//     document.getElementById("xut_sx").innerHTML =Math.floor(xut_ml)
//     document.getElementById("tth_sx").innerHTML =Math.floor(tth_ml)
// }

// function mode_sx(){
//   var tth,ttl,xut,mau
//     mau= document.getElementById("kl_bun").value
//     ttl= Number(document.getElementById("ttl_sx").textContent)
//     xut= Number(document.getElementById("xut_sx").textContent)
//     tth= Number(document.getElementById("tth_sx").textContent)
//     document.getElementById("ttl_gt").value =(Math.floor(ttl/10)+1)*10
//     document.getElementById("xut_gt").value =(Math.floor(xut/5)+1)*5
//     document.getElementById("tth_gt").value =(Math.floor(tth/10)+1)*10
//     chiphi_thuoc(mau)

// }
// function cptn(){
//   var mau
//     mau= document.getElementById("kl_bun").value
//     document.getElementById("ttl_gt").value =500
//     document.getElementById("xut_gt").value =200
//     document.getElementById("tth_gt").value =300
//     chiphi_thuoc(mau)
// }
// function chiphi_thuoc(mau_g){
//   var tth,ttl,xut,tth_r,ttl_r,xut_r,th_ml,ttl_ml,xut_ml
//     ttl= document.getElementById("ttl_gt").value
//     xut= document.getElementById("xut_gt").value
//     tth= document.getElementById("tth_gt").value
//     ttl_r= Number(document.getElementById("ttl_r").textContent)
//     xut_r= Number(document.getElementById("xut_r").textContent)
//     tth_r= Number(document.getElementById("tth_r").textContent)
//     ttl_ml= (ttl*0.000001*mau_g)/(ttl_r/100)
//     xut_ml= (xut*0.000001*mau_g)/(xut_r/100)
//     tth_ml= (tth*0.000001*mau_g)/(tth_r/100)
//     document.getElementById("ttl_ml").innerHTML =ttl_ml.toFixed(2)
//     document.getElementById("xut_ml").innerHTML =xut_ml.toFixed(2)
//     document.getElementById("tth_ml").innerHTML =tth_ml.toFixed(2)
// }

// function change_thuoc(name){
//   var gam_tan,r,ml,m_bun
//     m_bun= document.getElementById("kl_bun").value
//     gam_tan= document.getElementById(name+"_gt").value
//     r= Number(document.getElementById(name+"_r").textContent)
//     ml= (gam_tan*0.000001*m_bun)/(r/100)
//     document.getElementById(name+"_ml").innerHTML =ml.toFixed(2)
// }
// function set_tab(name_tab) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabs");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tb1");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(name_tab).style.display = "block";
//   // evt.currentTarget.className += " active";
// }


// function save_bun(){
//   var name,vl,str_mau
//   var i,j
//   str_mau="<option selected disabled>tên mẫu</option>"
//   name = document.getElementById("ten_mau").value;
//   vl= document.getElementById("r").textContent;
//   data_mau[name]=vl
//   // console.log(data_mau)
//   for (i=1;i<4;i++){
//     for (j in data_mau){
//       str_mau=str_mau +'<option value="'+data_mau[j]+'">'+j+'</option>'
//       document.getElementById("mau" +i).innerHTML= str_mau
//     }
//     // console.log(i)
//     document.getElementById("mau" +i).value= Object.values(data_mau)[i-1]
//     str_mau="<option selected disabled>tên mẫu</option>"
//     set_nd(i)
//   }

// }
// function set_nd(num) {
//   document.getElementById("r"+num).value=document.getElementById("mau"+num).value
//   chia_mau(num)
// }

// function chia_mau(num) {
//   var j,gam,r
//   for (j=1;j<=ar_gam.length;j++){
//     gam = document.getElementById("gam"+j).value;
//     // console.log(gam)
//     r= document.getElementById("mau"+num).value
//     if (r){
//       document.getElementById("g"+j+"-"+num).innerHTML=((gam*100)/r).toFixed(0)
//       // console.log(gam+"_"+r+"_"+(gam*100)/r)
//     }
//   }
// }

// function chia_bun(num) {
//   var gam,r;
//   var i,j
//   if (num==""){num=ar_gam.length+1}
//   // console.log(num)
//   for (j=1;j<=num;j++){
//     gam = document.getElementById("gam"+j).value;
//     // console.log(gam)
    
//     for (i = 1; i < 4; i++) {
//       r= document.getElementById("mau"+i).value
//       if (r!=""){
//         // console.log(r)
//         document.getElementById("g"+j+"-"+i).innerHTML=((gam*100)/r).toFixed(0)
//         // console.log((gam*100)/r)
//       }
//     }
//   }
// }
// function add_tn(){
//   var table = document.getElementById("table_hc");
//   var row,ar_cp=[],ten_thuoc,r_tron
//   var row = table.insertRow(-1);
//   ten_thuoc=document.getElementById("loai_thuoc").value.toUpperCase();
//   r_tron=document.getElementById("r_tron").value.toUpperCase();

//   ar_cp.push("TN"+document.getElementById("tn_num").value+"_"+document.getElementById("kl_bun").value +"g")
//   ar_cp.push(document.getElementById("ttl_gt").value)
//   ar_cp.push(document.getElementById("xut_gt").value)
//   ar_cp.push(document.getElementById("tth_gt").value)
//   ar_cp.push(document.getElementById("ttl_ml").textContent)
//   ar_cp.push(document.getElementById("xut_ml").textContent)
//   ar_cp.push(document.getElementById("tth_ml").textContent)
//   ar_cp.push(document.getElementById("tth_r").textContent)
//   row.innerHTML=
//   '<tr>'+
//     '<th rowspan="2" style=" border-style: groove; border-width: 2px;border-color: brown;" >'+ar_cp[0]+"&#13"+ten_thuoc+" "+r_tron+'</th>'+
//     '<th colspan="3">'+[ar_cp[1],ar_cp[2],ar_cp[3]].join("_")+" | " +ar_cp[7]+"%"+'</th>'+
//   '</tr>'
//   row = table.insertRow(-1)
//   row.innerHTML=
//   '<tr>'+
//     '<td style="color:red;">'+ar_cp[4]+'</td>'+
//     '<td style="color:red;">'+ar_cp[5]+'</td>'+
//     '<td style="color:red;">'+ar_cp[6]+'</td>'+
//   '</tr>'
// }
