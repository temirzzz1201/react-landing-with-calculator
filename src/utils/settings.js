import $ from 'jquery';

export default class Settings {
  constructor() {
    this.tooltipOptions = {};

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    ) {
      this.tooltipOptions = {
        trigger: 'click',
      };
    }
    // this.$inputBirthday = $('.calendar__birthday');
    // this.$inputWage = $('#calculator__wage');
    // this.$sliderWage = $('.slider-range-wage');
    // this.datePickerOptions = {
    //   format: 'DD/MM/YYYY',
    //   icons: {
    //     previous: 'icon-angle-left',
    //     next: 'icon-angle-right',
    //     time: 'icon-clock',
    //   },
    //   locale: 'ru',
    // };

    this.$inputBirthday = $('.calendar__birthday');
    this.$inputWage = $('#input-slider');
    this.$sliderWage = $('.slider-range-wage');
    this.datePickerOptions = {
      format: 'DD/MM/YYYY',
      //   icons: {
      //     previous: 'icon-angle-left',
      //     next: 'icon-angle-right',
      //     time: 'icon-clock',
      //   },
      locale: 'ru',
    };

    this.datePickerMaskOptions = {
      mask: '99/99/9999',
      showMaskOnHover: false,
      placeholder: '__/__/____',
    };

    this.sliderOptions = {
      range: 'min',
      min: 10000,
      max: 999999,
      value: 30000,
      step: 500,
    };

    this.phoneOptions = {
      mask: '+7(999) 999-99-99',
      showMaskOnHover: false,
    };
  }
}
