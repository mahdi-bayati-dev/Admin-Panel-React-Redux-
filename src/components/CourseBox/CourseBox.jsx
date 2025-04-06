import PropTypes from "prop-types";
import { RemoveCourses } from "../../Redux/Store/Courses";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function CourseBox({
  title,
  registersCount,
  price,
  discount,
  desc,
  category,
  _id,
}) {
  const dispatch = useDispatch();

  const removeHandler = () => {
    Swal.fire({
      title: "آیا از حذف مطمئن هستید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله، حذف کن",
      cancelButtonText: "نه، بی‌خیال",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(RemoveCourses(_id));
        Swal.fire({
          title: "حذف شد!",
          text: "دوره با موفقیت حذف شد!!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };
  return (
    <div className="products__item">
      <img
        src="../../img/store/redux.png"
        alt="product-img-1"
        className="products__img"
      />
      <div className="products__details w-100">
        <div className="products__info">
          <h3 className="products__name">{title}</h3>
          <p className="products__short-desc">{desc}</p>
        </div>
        <div className="products__tags">
          <div className="products__boxes">
            <div className="products__price-box">
              <span className="fa fa-wallet"></span>
              <span className="product__teg-text">قیمت : </span>
              <span className="product__teg-text products__price-value">
                {price === 0 ? "رایگان " : price.toLocaleString()}
              </span>
            </div>
            <div className="products__category-box">
              <span className="fa fa-folder"></span>
              <span className="product__teg-text">دسته بندی:</span>
              <span className="product__teg-text products__category">
                {category}
              </span>
            </div>
            <div className="products__shop-box">
              <span className="fa fa-users"></span>
              <span className="product__teg-text">تعداد فروش :</span>
              <span className="product__teg-text products__sell">
                {registersCount}
              </span>
            </div>
          </div>
          <div className="products__btns">
            <button className="btn btn-danger btn-lg" onClick={removeHandler}>
              حذف
            </button>
            <button className="btn btn-info btn-lg">ویرایش</button>
          </div>
        </div>
      </div>
      <div className="product__discount-Box">{discount}%</div>
    </div>
  );
}

CourseBox.propTypes = {
   _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  registersCount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
