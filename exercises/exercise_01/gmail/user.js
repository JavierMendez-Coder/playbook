const user = {
  name: "Javier Méndez",
  email: "javiermendez0299@gmail.com",
  createdDate: "11/03/2018",
  emailsSent: 12,
  emailsReceived: 46,
  getTotalEmails: function () {
    return this.emailsSent + this.emailsReceived;
  },
  getGeneralInfo: function () {
    return `The e-mail ${this.email} was created on ${this.createdDate}`;
  },
};

console.log(`Username: ${user.name}`);
console.log("Total emails sent and received " + user.getTotalEmails());
console.log(user.getGeneralInfo());