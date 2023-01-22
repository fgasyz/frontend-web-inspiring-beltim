const counter1 = document.getElementById("counter1");
const counter2 = document.getElementById("counter2");
const counter3 = document.getElementById("counter3");

function makeActivityCard(newActivity) {
    let temp = [];
    const cards = document.getElementsByClassName('activity-card')[0];
    for(let i=0; i<newActivity.length; i++) {
        temp.push(`<div class="card d-flex flex-xl-column flex-sm-column border-0 mx-2 my-2 activity-item" style="width: 16rem;">
        <img src=${newActivity[i].img} class="img-fluid card-img-top" style="height: 200px; object-fit: cover; border-radius: 10px"/>
        <div class="card-body overflow-hidden p-2">
          <h5>${newActivity[i].title}</h5>
          <div class="d-flex flex-row time">
            <i class="fa-solid fa-calendar me-2" style="font-size: 20px; color: #2f3270;"></i>
            <p class="small mb-2">${newActivity[i].time}</p>
          </div>
          <div class="description mb-1">
            <p class="small card-description mb-0">${newActivity[i].body}</p>
          </div>
            <button type="button" class="button border-0" style="text-decoration: none; color: #ffff;"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                Lanjut Membaca
            </button>
        </div>
      </div>`)
    }
    cards.innerHTML = temp.join('');
}

function showModal() {}

function makeEllipseText() {
    let temp = [];
    let text = [];
    let textElipsis = [];
    const cardDescription = document.getElementsByClassName('card-description');
    const description = document.getElementsByClassName('description');
    for(let i=0; i<cardDescription.length; i++) {
       temp.push(cardDescription[i].innerHTML);
    }
    temp.map((item, i) => {
     text.push(item.substring(0, 150));
     textElipsis.push(text[i].replace(/\W*\s(\S)*$/, '...'));
     cardDescription[i].innerText = textElipsis[i];
    })
}

const tourist = {
    totalTouristVisits: 0,
    localTouristVisits: 0,
    foreignTouristVisits: 0,
    interval1: null,
    interval2: null,
    interval3: null,
    countTotalTouristVisits: function () {
        this.interval1 = setInterval(() => {
            this.totalTouristVisits++;
            counter1.innerText = this.totalTouristVisits;
            if(this.totalTouristVisits >= 100) {
                clearInterval(this.interval1);
            }
        }, 100)
        return;
    },
    countLocalTouristVisits: function () {
        this.interval2 = setInterval(() => {
            this.localTouristVisits++;
            counter2.innerText = this.localTouristVisits;
            if(this.localTouristVisits >= 50) {
                clearInterval(this.interval2);
            }
        }, 30)
        return;
    },
    countForeignTouristVisits: function () {
        this.interval3 = setInterval(() => {
            this.foreignTouristVisits++;
            counter3.innerText = this.foreignTouristVisits;
            if(this.foreignTouristVisits >= 50) {
                clearInterval(this.interval3);
            }
        }, 30)
        return;
    },
}

function makeCounter() {
    tourist.countTotalTouristVisits();
    tourist.countLocalTouristVisits();
    tourist.countForeignTouristVisits();
}

function showTourismCard() {
    const card = document.getElementsByClassName('tour-card');
    for(let i=0; i<card.length; i++) {
        window.addEventListener('scroll', () => {
            if(window.scrollY > (window.innerHeight / 4 * 2) ) {
                card[i].classList.add('show-card');
            }
        })
    }
}

function showActivityModal(newActivity) {
    const activityCard = document.getElementsByClassName('activity-card')[0];
    let title = null;
    let img = null;
    let time = null;
    let body = null;
    const activityItem = document.querySelectorAll('.activity-item .card-body button');
    for(let i=0; i<activityItem.length; i++) {
        activityItem[i].addEventListener('click', () => {
            if(activityItem[i] != newActivity[i].id) {
                title = document.querySelectorAll('.activity-item .card-body h5')[i].innerText;
                img = document.querySelectorAll('.activity-item img')[i].src;
                time = document.querySelectorAll('.activity-item .card-body .time p')[i].innerText;
                body = document.querySelectorAll('.activity-item .card-body .description .card-description')[i].innerText;
                document.querySelector('.modal-header .modal-title').innerText = title;
                document.querySelector('.modal-body img').src = img;
                document.querySelector('.modal-body  p').innerText = time;
                document.querySelector('.modal-body h6').innerText = newActivity[i].body;
            }
        })
    }
}

function backToTop() {
    const backTop = document.getElementById('back-to-top');
    backTop.addEventListener('click', () => {
        document.documentElement.classList.add('scroll-behavior');
        document.documentElement.scrollTop = 0
    })
}
