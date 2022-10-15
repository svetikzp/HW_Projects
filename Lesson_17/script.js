const form = document.getElementById('formCreation');
   
   form.onsubmit = function submit(event) 
   {
     // Preventing page reload
     event.preventDefault();
     // Creating special object, so that we can get input values
     const formData = new FormData(form);
     // Getting input values by input names (NOT ids)
     const name = formData.get('name') || '';
     const debtor = formData.get('nameDebtor') || '';
     const amount = formData.get('amountMoney') || '';
     const date = formData.get('dueDate') || '';
     
     console.log(name, debtor, amount, date);
     alert(name);
     alert(debtor); 
     alert(amount); 
     alert(date);

     
   };

  
/*async function postRefund(name, debtor, amount, dueDate) {
  const response = await fetch(
    "https://oijv97k0l6.execute-api.eu-central-1.amazonaws.com/test/refunds",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name: name,
        debtor: debtor,
        amount: amount,
        dueDate: dueDate
      })
    }
  );

  console.log(response);
   
   const json = await response.json();
  if (response.status == 200) {
    return json;
  } else {
    return Promise.reject(response);
  }
}*/
async function postRefund(name, debtor, amount, dueDate) {
    try {
        const resp = await fetch('https://oijv97k0l6.execute-api.eu-central-1.amazonaws.com/test/refunds', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
       name: name,
        debtor: debtor,
        amount: amount,
        dueDate: dueDate
            })
        });
      
  if (resp.status >= 400) {
            getStatus(`Error ${resp.status} ${resp.message}`);
            return Promise.reject(resp);
        }
        else if (resp.status = 200) {
            getStatus(`${resp.status} Success`);
        }
        return await resp.json();
    }
    catch (err) {
        console.log('Error: ', err);
    }
}
  const createRefundButton = document.getElementById('createRefund');
  
 createRefundButton.onclick = async function createRefund() {
    const name = document.getElementById('name').value;
    const debtor = document.getElementById('nameDebtor').value;
    const amount = document.getElementById('amountMoney').value;
    const date = document.getElementById('dueDate').value;
    console.log(name);
    console.log(debtor);
    console.log(amount);
    console.log(date);
    createRefund(name, debtor, amount, date);
    const result = await createRefund(name, debtor, amount, date);

  };
  const postButton = document.getElementById("createRefund");
postButton.onclick = postRefund();