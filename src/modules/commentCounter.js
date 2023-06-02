function commentCounter(list) {
  if (list == null) {
    return 0;
  }
  const commentElements = Array.from(list).filter(
    (element) => !element.classList.contains('comment-counter'),
  );
  return commentElements.length;
}

module.exports = { commentCounter };
