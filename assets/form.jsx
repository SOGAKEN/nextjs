import React from 'react'

const Form =()=>{
	return(
		<div className="form-wrap">
			<h1>お問い合わせ</h1>
			<form action="https://www.elformo.com/forms/be852d17-03a9-4524-a640-579037d1a11c" method="post" accept-charset="UTF-8">
			<input id="elformo_honeypot" name="elformo_honeypot" />
				<ul>
					<li>
						<h3>お名前<span>*</span></h3>
						<input id="name" name="名前" type="text" placeholder='お名前' required/>
					</li>
					<li>
						<h3>会社名（任意）</h3>
						<input id="comname" name="会社名" placeholder='会社名' type="text"/>
					</li>
					<li>
						<h3>メールアドレス<span>*</span></h3>
						<input id="email" name="メールアドレス" type="email" required/>
					</li>
					<li>
						<h3>お問い合わせ<span>*</span></h3>
						<textarea id="comment" name="お問い合わせ内容" wrap="hard" cols="30" placeholder='内容を入力してください' required></textarea>
					</li>
				</ul>
				<div className='btn'><input id="submit" name="submit" type="Submit" /></div>
			</form>
		</div>
	)
}

export default Form;