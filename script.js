document.getElementById('poopForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const notes = document.getElementById('notes').value;

    if (date && time) {
        const routine = {
            date: date,
            time: time,
            notes: notes
        };

        let routines = localStorage.getItem('routines') ? JSON.parse(localStorage.getItem('routines')) : [];
        routines.push(routine);
        localStorage.setItem('routines', JSON.stringify(routines));

        displayRoutines();
    }
});

function displayRoutines() {
    const routines = localStorage.getItem('routines') ? JSON.parse(localStorage.getItem('routines')) : [];
    const routineList = document.getElementById('routineList');
    routineList.innerHTML = '';

    routines.forEach((routine, index) => {
        const routineItem = document.createElement('div');
        routineItem.classList.add('routine-item');
        routineItem.innerHTML = `
            <p><strong>Date:</strong> ${routine.date}</p>
            <p><strong>Time:</strong> ${routine.time}</p>
            <p><strong>Notes:</strong> ${routine.notes}</p>
            <button onclick="deleteRoutine(${index})">Delete</button>
        `;
        routineList.appendChild(routineItem);
    });
}

function deleteRoutine(index) {
    let routines = localStorage.getItem('routines') ? JSON.parse(localStorage.getItem('routines')) : [];
    routines.splice(index, 1);
    localStorage.setItem('routines', JSON.stringify(routines));
    displayRoutines();
}

window.onload = displayRoutines;
