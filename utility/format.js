import moment from "moment";

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function dateString(date) {
    return moment(date).format('MMMM DD, YYYY');
}

export function shortDateString(date) {
    return moment(date).format('MMM DD');
}

export function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
      return '<a href="' + url + '" style="cursor: pointer" target="new">' + url + '</a>';
    })
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
  }