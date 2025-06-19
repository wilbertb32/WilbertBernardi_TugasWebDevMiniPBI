function showMore() {
  const extras = document.querySelectorAll('.project.extra');
  extras.forEach(el => el.style.display = 'block');
  document.getElementById('showMoreBtn').style.display = 'none';
  document.getElementById('showLessBtn').style.display = 'inline';
}

function showLess() {
  const extras = document.querySelectorAll('.project.extra');
  extras.forEach(el => el.style.display = 'none');
  document.getElementById('showMoreBtn').style.display = 'inline';
  document.getElementById('showLessBtn').style.display = 'none';
}