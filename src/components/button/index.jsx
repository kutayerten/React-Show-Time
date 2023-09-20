import classNames from "classnames";
import PropTypes from "prop-types"
import { createElement } from "react";

export default function Button({ children, as, variant, size, className, ...props }) {
  return createElement(as, {
    ...props,
    className: classNames(" flex items-center justify-center rounded", {
      "bg-primary dark:bg-blue-500 text-white": variant === 'primary',
      "bg-white text-black": variant === 'default',
      "bg-blue-700 text-white": variant === 'light',
      "bg-gray-900 text-white": variant === 'dark',
      "px-5 font-medium h-10 text-15": size === 'normal',
      "px-4 font-medium h-8 text-sm": size === 'small',
      [className]: !!className
    })
  }, children)
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  variant: PropTypes.oneOf(['primary', 'light']),
  size: PropTypes.oneOf(['normal', 'small', 'large']),
  as: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  props: PropTypes.object,
  className: PropTypes.string
}

Button.defaultProps = {
  as: 'button',
  variant: 'primary',
  size: 'normal'
}
