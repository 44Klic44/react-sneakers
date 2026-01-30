import styles from './ProductPopup.module.scss';

function ProductPopup({ product, onClose }) {
  if (!product) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.popup}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button className={styles.close} onClick={onClose}>
          ✕
        </button>

        <div className={styles.content}>
          {/* Левая часть — картинка */}
          <div className={styles.imageWrapper}>
            <img
              src={product.imageUrl}
              alt={product.title}
            />
          </div>

          {/* Правая часть — текст */}
          <div className={styles.info}>
            <h2>{product.title}</h2>

            <b className={styles.price}>
              {product.price} ₽
            </b>

            <p className={styles.description}>
              {product.description}
            </p>

            {/* <button className={styles.buy}>
              Купить
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPopup;
