import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { RemoveUser } from "../../Redux/Store/Users";

export default function UserItem({
  _id,
  firstname,
  lastname,
  email,
  age,
  city,
  username,
}) {
  const [isShowModal, setIsShowModal] = useState(false);
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
        dispatch(RemoveUser(_id));
        Swal.fire({
          title: "حذف شد!",
          text: "کاربر با موفقیت حذف شد!!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <>
      <div
        className={`modal ${isShowModal ? "show-modal" : null}`}
        id="show-info-modal"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">جزئیات</h4>
              <button
                type="button"
                className="btn-close py-0"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body position-relative">
              <form action="#" className="form row mx-0">
                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-user form__icon icon-name-article"></span>
                  <input
                    type="text"
                    name=""
                    id="firstname"
                    value={`نام: ${firstname}`}
                    className="form-control form__input input-user-firstname"
                    readOnly
                  />
                  <label htmlFor="firstname" className="form__label my-0">
                    نام{" "}
                  </label>
                </div>

                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-users form__icon"></span>
                  <input
                    type="text"
                    name=""
                    value={`نام خانوادگی: ${lastname}`}
                    id="lastname"
                    className="form-control form__input input-user-lastname"
                    readOnly
                  />
                  <label htmlFor="lastname" className="form__label my-0">
                    نام خانوادگی
                  </label>
                </div>

                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-user form__icon"></span>
                  <input
                    lang="en"
                    type="text"
                    name=""
                    value={`نام کاربری: ${username}`}
                    id="username"
                    className="form-control form__input input-user-username"
                    readOnly
                  />
                  <label htmlFor="username" className="form__label my-0">
                    نام کاربری
                  </label>
                </div>

                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-globe form__icon"></span>
                  <input
                    lang="en"
                    type="email"
                    name=""
                    value={`ایمیل: ${email}`}
                    id="email"
                    className="form-control form__input input-user-email"
                    readOnly
                  />
                  <label htmlFor="email" className="form__label my-0" lang="en">
                    ایمیل
                  </label>
                </div>

                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-key form__icon"></span>
                  <input
                    type="text"
                    name=""
                    id="text"
                    value={`شهر: ${city}`}
                    className="form-control form__input input-user-password"
                    readOnly
                  />
                  <label htmlFor="password" className="form__label my-0">
                    {" "}
                    شهر
                  </label>
                </div>
                <div className="form__box-input col-12 px-2">
                  <span className="fa fa-wallet form__icon"></span>
                  <input
                    type="text"
                    name=""
                    value={`سن: ${age}`}
                    id="count-product"
                    className="form-control form__input input-user-product"
                    readOnly
                  />
                  <label htmlFor="count-product" className="form__label my-0">
                    سن
                  </label>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-danger btn-lg"
                data-bs-dismiss="modal"
                onClick={() => setIsShowModal(false)}
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="uesrs__item">
        <div className="users__info">
          <img
            src="../../img/admin/profile/banana.png"
            alt="photo user"
            className="users__img"
          />
          <div className="users__details">
            <p className="users__name my-0">
              {firstname} {lastname}
            </p>
            <p lang="en" className="users__email">
              {email}
            </p>
          </div>
        </div>
        <div className="users__btns">
          <button className="btn-custome btn-custome--gray">پیام ها</button>
          <button
            className="btn-custome btn-custome__blue"
            onClick={() => setIsShowModal(true)}
          >
            جزئیات
          </button>
          <button
            className="btn-custome btn-custome__red"
            onClick={removeHandler}
          >
            حذف
          </button>
        </div>
      </div>
    </>
  );
}
UserItem.propTypes = {
  _id: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  city: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
