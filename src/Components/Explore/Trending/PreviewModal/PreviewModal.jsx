import React, { useEffect } from "react";
import styles from "./PreviewModal.module.css";
import classNames from "classnames";

function PreviewModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={classNames(styles.PreviewModalBgOverlay)}>
      <div className={classNames(styles.previewModal)}>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PreviewModal;
