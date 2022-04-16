const mail = {
  title: "Test title",
  body: "Hi this is the body of the mail",
  sender: "javiermendez0299@gmail.com",
  recipients: ["someone@domain.com", "someother@domain.com"],
  dateCreated: "07/04/2022",
  getSenderAndRecipients: function () {
    return `Sender: ${this.sender} recipients: ${this.recipients.join(", ")}`
  },
  getGeneralInfo: function () {
    return `Mail: ${this.title}, body: ${this.body}, created on ${this.dateCreated}`;
  },
}

console.log(`Author: ${mail.sender}`);
console.log(mail.getSenderAndRecipients());
console.log(mail.getGeneralInfo());