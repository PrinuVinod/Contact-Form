const scriptURL = 'https://script.google.com/macros/s/AKfycbyFnWPvHvkZxDdnIKBRzky_kLSFvf7dD5YwlZx8IKC2UPplHtBg4lceVijupOlwYLL7/exec'
			const form = document.forms['contactForm']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Thank you! your form is submitted successfully." ))
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
			})