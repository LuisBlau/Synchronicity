import moment from "moment";

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function dateString(date) {
    return moment(date).format('MMMM DD, YYYY');
}