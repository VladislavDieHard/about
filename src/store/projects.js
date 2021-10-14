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

export default {
    state: {
        projects: []
    },
    getters: {
        getProjects(state) {
            return state.projects;
        }
    },
    mutations: {
        SET_REPOSITORIES(state, data) {
            state.projects = data;
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
