// create an object and use map and arrow function to get the member info
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Squad',
  teamSummary: function() {
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};
console.log(team.teamSummary());