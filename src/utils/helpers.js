/* -------------------------- */
/* Project  : React Portfolio */
/* File     : Helpers.js      */
/* Author   : Vicente Garcia  */
/* Date     : 06/26/2022      */
/* Modified : 06/26/2022      */
/* -------------------------- */
export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}