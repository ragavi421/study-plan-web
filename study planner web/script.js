document.getElementById('studyForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const subject = document.getElementById('subject').value;
    const time = document.getElementById('time').value;
  
    const li = document.createElement('li');
    li.innerHTML = `${subject} at ${time} <button onclick="markDone(this)">✔</button>`;
  
    document.getElementById('taskList').appendChild(li);
  
    document.getElementById('studyForm').reset();
  });
  
  function markDone(button) {
    const li = button.parentElement;
    li.classList.toggle('done');
  }
  