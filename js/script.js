////バリデーション
//各フォームの要素を取得
const form = document.querySelector('#form');
const formName = document.querySelector('#name');
const formCompany = document.querySelector('#company');
const formEmail = document.querySelector('#email');
const formDetail = document.querySelector('#detail');
const formUrl = document.querySelector('#url');
const formBudget = document.querySelector('#budget');
const formDeadline = document.querySelector('#deadline');
const btnSubmit = document.querySelector('#submit');

//エラー用のHTMLを生成
let errorName = document.createElement('div');
errorName.classList.add('js-form-error-text', 'text-sm', 'text-red-600');
let errorCompany = document.createElement('div');
errorCompany.classList.add('js-form-error-text', 'text-sm', 'text-red-600');
let errorEmail = document.createElement('div');
errorEmail.classList.add('js-form-error-text', 'text-sm', 'text-red-600');
let errorDetail = document.createElement('div');
errorDetail.classList.add('js-form-error-text', 'text-sm', 'text-red-600');
let errorBudget = document.createElement('div');
errorBudget.classList.add('js-form-error-text', 'text-sm', 'text-red-600');
let errorDeadline = document.createElement('div');
errorDeadline.classList.add('js-form-error-text', 'text-sm', 'text-red-600');

//各フォームの入力有無のステータスを定義
let successName = false;
let successCompany = false;
let successEmail = false;
let successDetail = false;
let successBudget = false;
let successDeadline = false;

//メールアドレスの正規表現
const emailRegex = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;


//送信ボタンの有効化条件
btnSubmit.disabled = true; // デフォルトでSubmitボタンを無効化
const formCheck = ()=> {
  if(successName === true && successCompany === true && successEmail === true && successDetail === true && successBudget === true && successDeadline === true){
    btnSubmit.disabled = false;
    btnSubmit.classList.remove('btn-disabled');
    btnSubmit.classList.add('btn-primary');
  } else {
    btnSubmit.disabled = true;
    btnSubmit.classList.remove('btn-primary');
    btnSubmit.classList.add('btn-disabled');
  }
}

//名前の入力チェック
formName.addEventListener('blur', ()=> {
  if(formName.value === ''){ //入力フォームが空になってないかチェック
    errorName.textContent = 'お名前を入力してください';
    formName.parentNode.appendChild(errorName);
    formName.classList.add('error-input');
    successName = false;
  } else {
    formName.classList.remove('error-input');
    errorName.textContent = '';
    successName = true;
  }
  formCheck();
});

//会社名・屋号名の入力チェック
formCompany.addEventListener('blur', ()=> {
  if(formCompany.value === ''){ //入力フォームが空になってないかチェック
    errorCompany.textContent = '会社名・屋号名を入力してください';
    formCompany.parentNode.appendChild(errorCompany);
    formCompany.classList.add('error-input');
    successCompany = false;
  } else {
    formCompany.classList.remove('error-input');
    errorCompany.textContent = '';
    successCompany = true;
  }
  formCheck();
});

//メールアドレスの入力チェック
formEmail.addEventListener('blur', ()=> {
  if(formEmail.value === ''){ //入力フォームが空になってないかチェック
    errorEmail.textContent = 'メールアドレスを入力してください';
    formEmail.parentNode.appendChild(errorEmail);
    formEmail.classList.add('error-input');
    successEmail = false;
  } else if(!emailRegex.test(formEmail.value)) { //メールアドレスが正規表現に基づいた記述になっているかチェック
    errorEmail.textContent = '有効なメールアドレスを入力してください';
    formEmail.parentNode.appendChild(errorEmail);
    formEmail.classList.add('error-input');
    successEmail = false;
  } else {
    formEmail.classList.remove('error-input');
    errorEmail.textContent = '';
    successEmail = true;
  }
  formCheck();
});

//相談内容の入力チェック
formDetail.addEventListener('blur', ()=> {
  if(formDetail.value === ''){ //入力フォームが空になってないかチェック
    errorDetail.textContent = 'ご相談内容を入力してください';
    formDetail.parentNode.appendChild(errorDetail);
    formDetail.classList.add('error-input');
    successDetail = false;
  } else {
    formDetail.classList.remove('error-input');
    errorDetail.textContent = '';
    successDetail = true;
  }
  formCheck();
});

//予算の入力チェック
formBudget.addEventListener('change', ()=> {
  if(formBudget.options[0].selected === true){ //値が空になってないかチェック
    errorBudget.textContent = 'ご予算を選択してください';
    formBudget.parentNode.appendChild(errorBudget);
    formBudget.classList.add('error-input');
    successBudget = false;
  } else {
    formBudget.classList.remove('error-input');
    errorBudget.textContent = '';
    successBudget = true;
  }
  formCheck();
});

//納期の入力チェック
formDeadline.addEventListener('blur', ()=> {
  if(formDeadline.value === ''){ //入力フォームが空になってないかチェック
    errorDeadline.textContent = 'ご希望納期を入力してください。ない場合は「ない」と入力してください';
    formDeadline.parentNode.appendChild(errorDeadline);
    formDeadline.classList.add('error-input');
    successDeadline = false;
  } else {
    formDeadline.classList.remove('error-input');
    errorDeadline.textContent = '';
    successDeadline = true;
  }
  formCheck();
});
