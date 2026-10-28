// Correct answers
const correctAnswers = {
    q1: 'B', q2: 'A', q3: 'B', q4: 'C', q5: 'A',
    q6: 'B', q7: 'B', q8: 'A', q9: 'C', q10: 'A',
    q11: 'B', q12: 'A', q13: 'C', q14: 'B', q15: 'A',
    q16: 'A', q17: 'B', q18: 'A', q19: 'C', q20: 'B'
};

function handleLogin(e) {
    e.preventDefault();
    const name = document.getElementById('student-name').value.trim();
    const id = document.getElementById('id-card').value.trim();

    let valid = true;

    if (!name) {
        document.getElementById('name-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('name-error').style.display = 'none';
    }

    if (!id || id.length < 4) {
        document.getElementById('id-error').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('id-error').style.display = 'none';
    }

    if (!valid) return false;

    // Show portal
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-id').textContent = id;
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('portal-screen').style.display = 'block';
    window.scrollTo(0, 0);
    return false;
}

function logout() {
    document.getElementById('login-form').reset();
    document.getElementById('exam-form').reset();
    document.getElementById('result-box').style.display = 'none';
    document.getElementById('portal-screen').style.display = 'none';
    document.getElementById('login-screen').style.display = 'flex';
}

function submitExam() {
    let score = 0;
    let attempted = 0;

    for (let i = 1; i <= 20; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            attempted++;
            if (selected.value === correctAnswers[`q${i}`]) {
                score++;
            }
        }
    }

    const resultBox = document.getElementById('result-box');
    resultBox.style.display = 'block';

    if (score >= 10) {
        resultBox.className = 'result-box pass';
        resultBox.innerHTML = `✅ Score: ${score} / 20<br><small style="font-weight:400;font-size:14px">Attempted: ${attempted} questions • Congratulations!</small>`;
    } else {
        resultBox.className = 'result-box fail';
        resultBox.innerHTML = `📋 Score: ${score} / 20<br><small style="font-weight:400;font-size:14px">Attempted: ${attempted} questions • Keep practicing!</small>`;
    }

    resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
}