import styles from "../Paragraph/Paragraph.module.css";
import classnames from "classnames";

function Paragraph() {
  return (
    <p className={classnames(styles.text, styles.active)}>
      Nhóm ReactJS - Việt Nam trước đây (không phải nhóm của F8) đã bị chủ sở
      hữu cũ bán, nhóm không còn chất lượng vì có nhiều tin bán hàng, quảng cáo.
    </p>
  );
}

export default Paragraph;
