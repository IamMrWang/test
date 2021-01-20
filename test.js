const UI = {
  showLoading: title => {
    uni.showLoading({
      title
    });
  },
  hideLoading: () => {
    uni.hideLoading();
  },
  showSuccessToast: title => {
    uni.showToast({
      title,
      type: "success"
    });
  },
  showToast: title => {
    uni.showToast({
      title: title ? title : '网络异常，请稍后重试',
      icon: "none"
    });
  },
  showFailToast: title => {
    uni.showToast({
      icon: "none",
      title,
      duration: 5000
    });
  }
};

export default UI;