const o = {
  name: 'Julie',
  greetBackwards() {
    const getReverseName = () => {
      console.log(this);
      let nameBackwards = '';
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    };
    return `${getReverseName()} si eman ym ,olleH`;
  },
};

console.log(o.greetBackwards());
