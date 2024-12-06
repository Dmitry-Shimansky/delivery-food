import {db} from './db';

const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay'),
        cartBtn = document.getElementById('cart-button');

    const openModal = () => {
        modal.classList.add('open');
    };

    const closeModal = () => {
        modal.classList.remove('open')
    };

    cartBtn.addEventListener('click', () => {
        openModal();
    })

    modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('cart-modal__overlay') ||
            event.target.closest('.cart-modal__header--close')
        ) {
            closeModal();
        }
    });
};

const restsFunc = () => {
    const container = document.getElementById('rests-container');

    const restArray = db.rests;

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center">Загрузка</p>';
    }

    const renderRests = (array) => {
        container.innerHTML = '';

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <a href="./goods.html?id=${card.id}" class="products-card">
                    <div class="products-card__image">
                        <img src="./images/rests/${card.image}.jpg" alt="${card.image}">
                    </div>
                    <div class="products-card__description">
                        <div class="products-card__description-row">
                            <h4 class="products-card__description--title">${card.title}</h4>
                            <div class="products-card__description--badge">${card.time}</div>
                        </div>
                        <div class="products-card__description-row">
                            <div class="products-card__description-info">
                                <div class="products-card__description-info--raiting">
                                    <img src="./images/icons/star.svg" alt="star">
                                    ${card.rating}
                                </div>
                                <div class="products-card__description-info--price">От ${card.price} ₽</div>
                                <div class="products-card__description-info--group">${card.type}</div>
                            </div>
                        </div>
                    </div>
                </a>
            `);
        });
    }

    if (container) {
        loading();
        setTimeout(() => {
            renderRests(restArray);
        }, 2000)
    }
};

const goodsFunc = () => {
    const container = document.getElementById('goods-container');

    const goodsArray = db.goods;

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center">Загрузка</p>';
    }

    const renderGoods = (array) => {
        container.innerHTML = '';

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <div class="products-card">
                    <div class="products-card__image">
                        <img src="./images/goods/${card.image}.jpg" alt="${card.image}">
                    </div>
                    <div class="products-card__description">
                        <div class="products-card__description-row">
                            <h5 class="products-card__description--name">
                                ${card.title}
                            </h5>
                        </div>
                        <div class="products-card__description-row">
                            <p class="products-card__description--text">
                                ${card.description}
                            </p>
                        </div>
                        <div class="products-card__description-row">
                            <div class="products-card__description-controls">
                                <button class="btn btn-primary">
                                    В корзину
                                    <img src="./images/icons/shopping-cart-white.svg" alt="shopping-cart-white">
                                </button>
                                <span class="products-card__description-controls--price">
                                    ${card.price} ₽
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    if (container) {
        loading();
        setTimeout(() => {
            renderGoods(goodsArray);
        }, 2000)
    }
};

modalFunc();
restsFunc();
goodsFunc();

