// -- global --
const textareaEl = document.querySelector(".form__textarea");
const counterEl = document.querySelector(".counter");
const formEl = document.querySelector(".form");
const feedbackListEl = document.querySelector(".feedbacks");
const submitBtnEl = document.querySelector(".submit-btn");

// -- counter component --
const inputHandler = () => {
  const maxNrChars = 150;
  const nrCharsTyped = textareaEl.value.length;
  const charsLeft = maxNrChars - nrCharsTyped;
  counterEl.textContent = charsLeft;
};

textareaEl.addEventListener("input", inputHandler);

// -- submit component --
const submitHandler = (event) => {
  event.preventDefault();
  const text = textareaEl.value;
  if (text.includes("#")) {
    formEl.classList.add("form--valid");
    setTimeout(() => {
      formEl.classList.remove("form--valid");
    }, 2000);
  } else {
    formEl.classList.add("form--invalid");
    setTimeout(() => {
      formEl.classList.remove("form--invalid");
    }, 2000);
    textareaEl.focus();
  }

  const hashtag = text.split(" ").find((word) => word.includes("#"));
  const company = hashtag.substring(1);
  const badgeLetter = company.substring(0, 1).toUpperCase();
  const upvoteCount = 0;
  const daysAgo = 0;

  const feedbackItemHTML = `<li class="feedback">
    <button class="upvote">
        <i class="fa-solid fa-caret-up upvote__icon"></i>
        <span class="upvote__count">${upvoteCount}</span>
    </button>
    <section class="feedback__badge">
        <p class="feedback__letter">${badgeLetter}</p>
    </section>
    <div class="feedback__content">
        <p class="feedback__company">${company}</p>
        <p class="feedback__text">${text}</p>
    </div>
    <p class="feedback__date">${daysAgo === 0 ? "New" : `${daysAgo}d`}</p>
</li>`;

  feedbackListEl.insertAdjacentHTML("beforeend", feedbackItemHTML);

  textareaEl.value = "";

  submitBtnEl.blur();

  counterEl.textContent = "150";
};

formEl.addEventListener("submit", submitHandler);
