let a1=document.querySelector('.a1');
  let a2=document.querySelector('.a2');
  let a3=document.querySelector('.a3');
  let a4=document.querySelector('.a4');
  let f1=document.querySelector('.first');
  let f2=document.querySelector('.sur');
  let f3=document.querySelector('.num');
  let f4=document.querySelector('.pass');
  let c1=document.querySelector('.check');
  let btn=document.querySelector('.btn');
  let text=document.querySelector('span');
  let s1=document.querySelector('.s1');
  let s2=document.querySelector('.s2');
  let s3=document.querySelector('.s3');
  let date=document.querySelector('.dob');
  let pass_hint=document.querySelector('.pass_hint');
  let pass_word=document.querySelector('.pass_word');
  let form=document.querySelector('form');
  let small=document.querySelector('small');
      

form.onsubmit=()=>{
  localStorage.setItem('Firstname',f1.value);
  localStorage.setItem('Surname',f2.value);
  localStorage.setItem('Phone no',f3.value);
  localStorage.setItem('Password',f4.value);
  localStorage.setItem('Date of Birth',date.value);

  if(s1.checked){
    localStorage.setItem('Gender',s1.value);
  }
  else if(s2.checked){
    localStorage.setItem('Gender',s2.value);
  }
  else if(s3.checked){
    localStorage.setItem('Gender',s3.value);
  }

  text.innerHTML=`${localStorage.getItem('Firstname')}<br> ${localStorage.getItem('Surname')}<br> ${localStorage.getItem('Phone no')}<br> ${localStorage.getItem('Password')}<br> ${localStorage.getItem('Gender')}<br> ${localStorage.getItem('Date of Birth')}`;

  let gender='';
  if(s1.checked){
    gender=s1.value;
  }
  else if(s2.checked){
    gender=s2.value;
  }
  else if(s3.checked){
    gender=s3.value;
  }
  alert(`${f1.value} ${f2.value} ${f3.value} ${f4.value} ${gender} ${date.value}`);
f1.value='';
f2.value='';
f3.value='';
f4.value='';
s1.checked=false;
s2.checked=false;
s3.checked=false;
date.value='';
return false;
}

let input_validation=(input,icon)=>{
  input.onblur=()=>{
     if(input.value==''){
    icon.style.opacity=1;
    input.style.border='1px solid red';
}
    else{
      icon.style.opacity=0;
      input.style.border='1px solid #ccc';
}
}    
  input.onclick=()=>{
  icon.style.opacity=0;
  }   
}

      input_validation(f1,a1);
      input_validation(f2,a2);
      input_validation(f3,a3);
      input_validation(f4,a4);

      // f1.onblur=()=>{
      //   if(f1.value==''){
      //     a1.style.opacity=1;
      //     f1.style.border='1px solid red';
      //   }
      //   else{
      //     a1.style.opacity=0;
      //     f1.style.border='1px solid #ccc';
      //   }
      // }

      // f1.onclick=()=>{
      //   a1.style.opacity=0;
      // }

      // f2.onblur=()=>{
      //   if(f2.value==''){
      //     a2.style.opacity=1;
      //     f2.style.border='1px solid red';
      //   }
      //   else{
      //     a2.style.opacity=0;
      //     f2.style.border='1px solid #ccc';
      //   }
      // }

      // f2.onclick=()=>{
      //   a2.style.opacity=0;
      // }

      // f3.onblur=()=>{
      //   if(f3.value==''){
      //     a3.style.opacity=1;
      //     f3.style.border='1px solid red';
      //   }
      //   else{
      //     a3.style.opacity=0;
      //     f3.style.border='1px solid #ccc';
      //   }
      // }

      // f3.onclick=()=>{
      //   a3.style.opacity=0;
      // }

      // f4.onblur=()=>{
      //    if(f4.value==''){
      //     a4.style.opacity=1;
      //     f4.style.border='1px solid red';
      //   }
      //   else{
      //     a4.style.opacity=0;
      //     f4.style.border='1px solid #ccc';
      //   }
      // }

      let upper=/[A-Z]/;
      let lower=/[a-z]/;
      let num=/[0-9]/;
      let symbol=/[@#$%^&*!]/;
      let a5=document.querySelector('.a5');
      

      f4.onclick=()=>{
      a4.style.opacity=0;
      pass_hint.style.display='block';
      small.style.display='none';
      }

      pass_word.onclick=()=>{
        f4.value=pass_word.innerText;
        pass_hint.style.display='none';
        a4.style.opacity=0;
      }

      f4.oninput=()=>{
        pass_hint.style.display='none';
        small.style.display='block';
        if(upper.test(f4.value) && lower.test(f4.value) && num.test(f4.value) && symbol.test(f4.value)){
          if(f4.value.length>=8){
            small.style.display='none';
            a5.style.opacity=1;
            a5.style.color='rgb(61, 244, 61)';
          }
          else{
            a5.style.opacity=0;
          }
        }
        else{
          a5.style.opacity=0;
        }
      }

let check_text=document.querySelector('.check_text');

c1.onchange=()=>{
  if(c1.checked){
   f4.type='text';
   check_text.innerHTML='Hide Password';
  }
  else{
    f4.type='password';
    check_text.innerHTML='Show Password';
  }
}