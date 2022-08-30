import "./components.css";
import logo from "./resources/logo192.png";
import { motion } from "framer-motion";
function Courses() {
  function FadeInWhenVisible({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.3,
          // ease: [0, 0.5, 0.7, 1.01],
        }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <div className="Courses">
      <span>Courses</span>
      <h2>Courses that we provide</h2>
      <section className="course-item-container">
        <FadeInWhenVisible>
          {" "}
            <div className="course-item">
              <img width={80} src={logo} alt="course" />
              <h4>Web Development</h4>
            </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          {" "}
            <div className="course-item">
              <img width={80} src={logo} alt="course" />
              <h4>Web Development</h4>
            </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          {" "}
            <div className="course-item">
              <img width={80} src={logo} alt="course" />
              <h4>Web Development</h4>
            </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          {" "}
            <div className="course-item">
              <img width={80} src={logo} alt="course" />
              <h4>Web Development</h4>
            </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          {" "}
            <div className="course-item">
              <img width={80} src={logo} alt="course" />
              <h4>Web Development</h4>
            </div>
        </FadeInWhenVisible>
        
      </section>
    </div>
  );
}
export default Courses;