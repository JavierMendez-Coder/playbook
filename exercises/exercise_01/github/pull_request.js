const pullRequest = {
  title: "MyPullRequest",
  branchName: "Master",
  dateCreated: "14/03/2022",
  status: "Open",
  repositoryNameAssociated: "MyRepo",
  getStatus: function () {
    return this.status;
  },
  getGeneralInfo: function () {
    return `PullRequest on branch ${this.branchName} created on ${this.dateCreated}`;
  },
};

console.log(`PullRequest's name: ${pullRequest.title}`);
console.log(`Status: ${pullRequest.getStatus()}`);
console.log(pullRequest.getGeneralInfo());
