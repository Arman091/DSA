import jsonfile from 'jsonfile'
import moment from 'moment'
const FILE_PATH = './db.json'
import simplegit from 'simple-git'
import random from 'random'
const git = simplegit();
const makeCommit = (n) => {
    if (n === 0) return git.push();
    const x = random.int(30, 300);
    const DATE = moment().subtract(1,'y').add(x,'d').format();
    const data = {
        date:DATE
    }
    jsonfile.writeFile(FILE_PATH, data, () => {
        console.log(data)
        git.add([FILE_PATH]).commit('update', { '--date': DATE },
            makeCommit.bind(this, --n));
    });
}

makeCommit(200)
