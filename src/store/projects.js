async function getRepos() {
    return new Promise(async (resolve, reject) => {
        const response = await fetch('https://api.github.com/users/VladislavDieHard/repos', {
            method: 'GET'
        });
        try {
            let result = await response.json();
            resolve(result);
        } catch (e) {
            reject(e);
        }
    });
}

const languages = {
    'JavaScript': {
        name: 'JavaScript',
        id: 1,
        img: 'https://avatars.mds.yandex.net/get-zen_doc/3413519/pub_5ff887b2fe4e686f6ae6ba3f_5ff887d7f906b16872a69755/scale_1200'
    },
    'Vue': {
        name: 'Vue',
        id: 2,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
    },
    'TypeScript': {
        name: 'TypeScript',
        id: 3,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
    }
}

export default {
    state: {
        projects: [],
        languages: {}
    },
    getters: {
        getProjects(state) {
            return state.projects;
        },
        getLanguages(state) {
            return state.languages;
        }
    },
    mutations: {
        SET_REPOSITORIES(state, data) {
            state.projects = data;
            data.forEach((item) => {
                state.languages[item.language] = languages[item.language]
            });
        }
    },
    actions: {
        async getRepos(context) {
            try {
                const result = await getRepos()
                context.commit('SET_REPOSITORIES', result);
            } catch (e) {
                console.error(e)
            }
        }
    },
}
// https://api.github.com/users/VladislavDieHard/repos
