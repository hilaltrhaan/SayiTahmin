const randomInput = document.getElementById('randomNum');
const predictedInput = document.getElementById('predictedNum');
const modalOpacity = document.querySelector('.modal-opacity');
const modalMessage = document.querySelector('.modal-message');
const title = document.querySelector('.Title');
const subtitle = document.querySelector('.Subtitle');
const close = document.querySelector('.close');


const handlePrediction = () => {
  const limitNumber = randomInput.value;
  var randomNumber = Math.ceil(Math.random() * limitNumber);
  var pretictedNumber = predictedInput.value;
  if (!randomInput.value) {
    message(
      'Hata!',
      'Bu alanın doldurulması zorunludur.'
    );
    return;
  }

  if (!predictedInput.value) {
    message('Hata!',
      'Tahmin alanının doldurulması zorunludur.'

    );

    return;
  }
  if (parseInt(pretictedNumber) > parseInt(limitNumber)) {
    message('Hata!!!! ',
      'Tahmin değeri' + ' ' + parseInt(limitNumber) + '  ' + 'değerinden büyük olamaz!'
    );
    return;
  }

  parseInt(randomNumber) == parseInt(pretictedNumber)
    ? message('Tebrikler' ,'doğru tahmin ettiniz')
    : message('Olmadı,  aranılan sayı' , ' '+parseInt(randomNumber));
}


  close.addEventListener('click', () => {

    modalMessage.style.visibility = 'hidden';
    modalOpacity.style.visibility = 'hidden';
    modalMessage.style.top = '-180px';

  });
  const message = (titleMessage, subtitleMessage) => {
    title.innerText = titleMessage;
    subtitle.innerHTML = subtitleMessage;
    modalMessage.style.visibility = 'visible';
    modalMessage.style.top = '10px';
    modalOpacity.style.visibility = 'visible'


  }
  randomInput.addEventListener("keyup",function(event){
    if(event.keyCode===13){
      document.getElementById('btn').click();
    }
  });

  predictedInput.addEventListener("keyup",function(event){
    if(event.keyCode===13){
      document.getElementById('btn').click();
    }
  });














