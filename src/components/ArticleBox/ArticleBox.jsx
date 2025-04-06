import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { RemoveArticle } from "../../Redux/Store/Article";
import { useDispatch } from "react-redux";

export default function ArticleBox({_id, views, title, desc, category }) {

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
        dispatch(RemoveArticle(_id));
        Swal.fire({
          title: "حذف شد!",
          text: "مقاله با موفقیت خذف شد!!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="articles__item">
      <img
        src="../../img/store/products/product-img-1.jpg"
        alt="product-img-1"
        className="articles__img"
      />
      <div className="articles__details w-100">
        <div className="articles__info">
          <h3 className="articles__name">{title}</h3>
          <p className="articles__short-desc">{desc}</p>
        </div>
        <div className="articles__tags">
          <div className="articles__boxes">
            <div className="articles__category-box d-flex gap-2 align-items-center">
              <span className="fa fa-tags"></span>
              <p className="articles__tag-text articles__category my-0">
                <span>دسته بندی :</span>
                <span className="articles__category-value">{category}</span>
              </p>
            </div>
            <div className="articles__visited-box d-flex gap-2 align-items-center">
              <span className="fa fa-users"></span>
              <p className="articles__tag-text articles__visited my-0">
                <span>تعداد بازدید :</span>
                <span className="articles__visited-count">{views}</span>
              </p>
            </div>
          </div>
          <div className="articles__btns">
            <button
              className="op-btn btn btn-danger btn-lg"
              onClick={removeHandler}
            >
              حذف
            </button>
            <button className="op-btn btn btn-info btn-lg">ویرایش</button>
          </div>
        </div>
      </div>
    </div>
  );
}

ArticleBox.propTypes = {
  _id: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
