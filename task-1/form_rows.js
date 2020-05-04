function main() {
    // event handlers and other code here
    const add = document.getElementById('add_row');
    const container = document.querySelector('.container');
    // let counter = 1;
    let listRows = [1];
    add.addEventListener('click', function() {

        if(listRows.length === 10){
            alert('ONLY 10 ROWS!');
        }else{
        const form = document.createElement('form');
        listRows.push(form);
        form.method = "GET";
        const label = document.createElement('label');
        label.htmlFor = "item_"+(listRows.length);
        label.textContent = "Item " + (listRows.length)+ ':';
        form.appendChild(label);
        const input = document.createElement('input');
        input.type = "text";
        input.name = "item_"+(listRows.length+1);
        input.id = "item_"+(listRows.length+1);
        form.appendChild(input);
        const cancel = document.createElement('button');
        cancel.textContent = "BUTTON";
        cancel.addEventListener('click', function() {
            container.removeChild(form);
            listRows.pop(form);
        });
        form.appendChild(cancel);
        container.appendChild(form);

        }
    });
}

main();
