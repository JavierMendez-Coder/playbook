const repo = {
  name: "LaunchX",
  author: "Javier Méndez",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
}

console.log("Repository's name: " + repo.name);
console.log("Total issues: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());
