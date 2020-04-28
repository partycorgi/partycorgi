const Config = require('./config');

class Auth {
  constructor() {}

  isOwner(member) {
    return member.guild.owner.id === member.id
  }

  isAdmin(member) {
    return member.roles.find((val) => val.id === Config.getRole('admin'));
  }

  isMod(member) {
    return member.roles.find((val) => val.id === Config.getRole('mod'));
  }

  isRole(role_type) {
    return member.roles.find((val) => val.id === Config.getRole(role_type));
  }
}

module.exports = new Auth();
