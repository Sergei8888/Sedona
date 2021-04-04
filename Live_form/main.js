let pageIndicator = document.querySelector('.pagination__page-indicator_active')

let App = new Vue({
    name: 'App',
    data() {
        return {
            username: '',
            secondname: '',
            nickname: '',

            password: '',
            password_confirm: '',
            email: '',

            country: '',
            town: '',

            page_counter: 1,
        }
    },
    methods: {
        nextPage() {
            if (this.page_counter == 3) {
                this.page_counter = 1
            } else {
                this.page_counter += 1;
            }
        },
        prevPage() {
            if (this.page_counter == 1) {
                this.page_counter = 3
            } else {
                this.page_counter -= 1;
            }
        },
    },
    computed: {
        passwordEncoded() {
            if (this.password.length) {
                if (this.password != this.password_confirm) {
                    return 'Passwords aren`t similar'
                }
                return '*'.repeat(this.password.length)
            }
            return null
        },

        profileCountry() {
            if (this.nickname && this.username && this.secondname) {
                return this.country
            }
            return null
        },

        profileTown() {
            if (this.nickname && this.username && this.secondname) {
                return this.town
            }
            return null
        }
    },
}).$mount('#app')