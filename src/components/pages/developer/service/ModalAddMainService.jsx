import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  setError,
  setMessage,
  setSuccess,
} from "../../../../../store/StoreAction";
import { queryData } from "../../../helper/queryData";
import { InputText, InputTextArea } from "../../../custom-hooks/FormInputs";
import ModalWrapperSide from "../../../partials/modal/ModalWrapperSide";
import { StoreContext } from "../../../../../store/StoreContext";

const ModalAddMainService = ({ itemEdit, setIsModal }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/rest/v1/controllers/developer/service/service.php?mainserviceid=${itemEdit.mainservice_aid}`
          : `/rest/v1/controllers/developer/service/service.php`,
        itemEdit ? "PUT" : "POST",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["mainservice"] });

      if (!data.success) {
        dispatch(setMessage(data.error));
        dispatch(setError(true));
      } else {
        setIsModal(false);
        dispatch(setMessage(`Successfully ${itemEdit ? "updated" : "added"}.`));
        dispatch(setSuccess(true));
      }
    },
  });

  const initVal = {
    mainservice_title: itemEdit ? itemEdit.mainservice_title : "",
    mainservice_description: itemEdit ? itemEdit.mainservice_description : "",
    mainservice_category: itemEdit ? itemEdit.mainservice_category || "" : "",
    mainservice_title_old: itemEdit ? itemEdit.mainservice_title : "",
  };

  const yupSchema = Yup.object({
    mainservice_title: Yup.string().required("required"),
    mainservice_description: Yup.string().required("required"),
    mainservice_category: Yup.string().required("required"),
  });

  const handleClose = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      setIsModal(false);
    }, 200);
  };

  React.useEffect(() => {
    setAnimate();
  }, []);

  return (
    <ModalWrapperSide handleClose={handleClose} className={`moodal ${animate}`}>
      <div className="modal__header">
        <h3>{itemEdit ? "Update" : "Add"} Services</h3>
        <button
          type="button"
          className="absolute top-0 right-0"
          onClick={handleClose}
        >
          <FaTimesCircle className="text-lg" />
        </button>
      </div>

      <div className="modal__body">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={(values) => {
            mutation.mutate(values);
          }}
        >
          {(props) => (
            <Form>
              <div className="forms_wrapper">
                <div className="forms">
                  <div className="relative mt-3 mb-5">
                    <InputText
                      label="Title"
                      type="text"
                      name="mainservice_title"
                      disabled={false}
                    />
                  </div>

                  {/* Category Dropdown */}
                  <div className="relative mt-3 mb-5">
                    <label
                      htmlFor="mainservice_category"
                      className="form-label"
                    >
                      Category
                    </label>
                    <select
                      id="mainservice_category"
                      name="mainservice_category"
                      value={props.values.mainservice_category}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      className="form-input"
                    >
                      <option value="" label="Select category" />
                      <option value="Consulting" label="Consulting" />
                      <option value="Development" label="Development" />
                      <option value="Design" label="Design" />
                      <option value="Marketing" label="Marketing" />
                    </select>
                    {props.touched.mainservice_category &&
                    props.errors.mainservice_category ? (
                      <div className="form-error">
                        {props.errors.mainservice_category}
                      </div>
                    ) : null}
                  </div>

                  <div className="relative mt-3 mb-5">
                    <InputTextArea
                      label="Description"
                      type="text"
                      name="mainservice_description"
                      disabled={false}
                    />
                  </div>
                </div>

                <div className="actions">
                  <button
                    type="submit"
                    className="btn-modal-submit"
                    disabled={!props.dirty}
                  >
                    {itemEdit ? "Save" : "Add"}
                  </button>
                  <button
                    type="reset"
                    className="btn-modal-cancel"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </ModalWrapperSide>
  );
};

export default ModalAddMainService;
