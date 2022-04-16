const pullrequest = {
  title: "MyPullRequest",
  branchName: "Master",
  dateCreated: "14/03/2022",
  status: "Open",
  repositoryNameAssociated: "MyRepo",
  getStatus: function () {
    return this.status;
  },
  getGeneralInfo: function () {
    return `PullRequest on branch ${pullrequest.branchName} created on ${pullrequest.dateCreated}`;
  },
}

console.log(`PullRequest's name: ${pullrequest.title}`);
console.log(`Status: ${pullrequest.getStatus()}`);
console.log(pullrequest.getGeneralInfo());
