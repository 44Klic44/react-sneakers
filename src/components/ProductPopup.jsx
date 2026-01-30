import styles from './ProductPopup.module.scss';

function ProductPopup({ product, onClose }) {
  if (!product) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <img src={product.imageUrl} alt={product.title} />
        <h2>{product.title}</h2>
        <b>{product.price} ₽</b>

        <p className={styles.description}>
          {product.description}
        </p>

        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}

export default ProductPopup;
