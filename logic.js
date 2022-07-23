let newsAccordion = document.getElementById('newsAccordion');
let apiKey = '94dd0f461eb847f48857b10460a7595c';
let source = 'the-hindu';
const xhr = new XMLHttpRequest;

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading${index}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">${element.title}
                            </button>
                            </h2>
                            <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}"
                            data-bs-parent="#newsAccordion">
                            <div class="accordion-body">${element.content}. <a href = "${element.url}" target = "_blank">Read more here.</a></div>
                            </div>
                            </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log(`Some error occured: ` + this.status);
    }
}

xhr.send();

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}