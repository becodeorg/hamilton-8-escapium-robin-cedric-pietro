// Récupérer tous les éléments de question
const questions = document.querySelectorAll('.faq__section__item__question');

// Ajouter un gestionnaire d'événement à chaque question
questions.forEach(question => {
  question.addEventListener('click', () => {
    // Récupérer l'élément réponse correspondant à la question
    const answer = question.nextElementSibling;

    // Vérifier si la réponse est déjà ouverte ou fermée
    const isOpen = answer.style.display === 'block';

    // Fermer toutes les autres réponses
    questions.forEach(q => {
      const a = q.nextElementSibling;
      q.classList.remove('active');
      a.style.display = 'none';
    });

    if (!isOpen) {
      // Ouvrir la réponse
      question.classList.add('active');
      answer.style.display = 'block';
    }
  });
});
