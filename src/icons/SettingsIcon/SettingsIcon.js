import PropTypes from 'prop-types';
import React from 'react';

const SettingsIcon = ({ width }) => (
  <svg width={width} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.285 6.86L13.61 6.36C13.4942 5.95566 13.3349 5.56505 13.135 5.195L13.955 3.66C13.9858 3.60206 13.997 3.53574 13.9871 3.47089C13.9772 3.40604 13.9467 3.34611 13.9 3.3L12.705 2.1C12.6589 2.05333 12.599 2.02278 12.5341 2.01287C12.4693 2.00297 12.4029 2.01423 12.345 2.045L10.82 2.86C10.4463 2.65033 10.0506 2.48264 9.64 2.36L9.14 0.705C9.11885 0.644008 9.0789 0.5913 9.02588 0.554461C8.97287 0.517623 8.90954 0.498554 8.845 0.5H7.155C7.09007 0.500303 7.02693 0.521318 6.97477 0.559987C6.92262 0.598656 6.88416 0.652962 6.865 0.715L6.365 2.365C5.95101 2.48699 5.55188 2.65469 5.175 2.865L3.675 2.055C3.61706 2.02423 3.55074 2.01297 3.48589 2.02287C3.42104 2.03278 3.36111 2.06333 3.315 2.11L2.1 3.295C2.05334 3.34111 2.02278 3.40104 2.01287 3.46589C2.00297 3.53074 2.01423 3.59706 2.045 3.655L2.855 5.155C2.64503 5.5303 2.47734 5.92773 2.355 6.34L0.700001 6.84C0.637962 6.85916 0.583657 6.89762 0.544987 6.94978C0.506318 7.00193 0.485303 7.06507 0.485001 7.13V8.82C0.485303 8.88493 0.506318 8.94807 0.544987 9.00023C0.583657 9.05238 0.637962 9.09084 0.700001 9.11L2.365 9.61C2.48867 10.0154 2.65634 10.4061 2.865 10.775L2.045 12.345C2.01423 12.4029 2.00297 12.4693 2.01287 12.5341C2.02278 12.599 2.05334 12.6589 2.1 12.705L3.295 13.9C3.34111 13.9467 3.40104 13.9772 3.46589 13.9871C3.53074 13.997 3.59706 13.9858 3.655 13.955L5.2 13.13C5.56548 13.3272 5.95101 13.4848 6.35 13.6L6.85 15.285C6.86916 15.347 6.90762 15.4013 6.95977 15.44C7.01193 15.4787 7.07507 15.4997 7.14 15.5H8.83C8.89493 15.4997 8.95807 15.4787 9.01023 15.44C9.06238 15.4013 9.10084 15.347 9.12 15.285L9.62 13.595C10.0156 13.4792 10.3977 13.3216 10.76 13.125L12.315 13.955C12.3729 13.9858 12.4393 13.997 12.5041 13.9871C12.569 13.9772 12.6289 13.9467 12.675 13.9L13.87 12.705C13.9167 12.6589 13.9472 12.599 13.9571 12.5341C13.967 12.4693 13.9558 12.4029 13.925 12.345L13.095 10.795C13.2937 10.4313 13.4529 10.0475 13.57 9.65L15.255 9.15C15.317 9.13084 15.3713 9.09238 15.41 9.04023C15.4487 8.98807 15.4697 8.92493 15.47 8.86V7.155C15.4729 7.09283 15.4568 7.03124 15.4237 6.97851C15.3907 6.92577 15.3423 6.88442 15.285 6.86V6.86ZM8 10.75C7.4561 10.75 6.92442 10.5887 6.47218 10.2865C6.01995 9.98437 5.66747 9.55488 5.45933 9.05238C5.25119 8.54988 5.19673 7.99695 5.30284 7.4635C5.40895 6.93005 5.67086 6.44005 6.05546 6.05546C6.44005 5.67086 6.93005 5.40895 7.4635 5.30284C7.99695 5.19673 8.54988 5.25119 9.05238 5.45933C9.55488 5.66747 9.98437 6.01995 10.2865 6.47218C10.5887 6.92442 10.75 7.4561 10.75 8C10.75 8.72935 10.4603 9.42882 9.94454 9.94454C9.42882 10.4603 8.72935 10.75 8 10.75V10.75Z" />
  </svg>
);

SettingsIcon.propTypes = {
  width: PropTypes.number.isRequired,
};

export default SettingsIcon;
