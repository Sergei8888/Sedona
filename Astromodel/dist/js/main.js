let scrollingList

function checkMargin() {
    if (vm.objectList.length >= 9) {
        scrollingList.classList.add('object-list_scroll')
    } else {
        scrollingList.classList.remove('object-list_scroll')
    }
}

class FrameObject {
    constructor(props) {
        this.color = props.color || 'red'
        this.name = props.name || 'default'
    }
}

let vm = new Vue({
    el: '#app',

    data: {
        objectList: [new FrameObject({})],
    },

    methods: {
        addObject: function() {
            Swal.fire({
                title: 'New object settings',
                html: `<form class="settings__form">
    <label>Color: <input type="color" id="settingsColor"></label>
    <label>Name: <input type="text" id="settingsName"></label>
</form>`,
                width: '60vw',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Apply'
            }).then((result) => {
                if (result.isConfirmed) {
                    let colorInput = document.getElementById('settingsColor')
                    let nameInput = document.getElementById('settingsName')
                    let settings = {
                        color: colorInput.value,
                        name: nameInput.value
                    }
                    this.objectList.push(new FrameObject(settings))
                } else this.objectList.push(new FrameObject({}))
            })
            checkMargin()
        },

        deleteObject(object) {
            for (currentObject of this.objectList) {
                if (currentObject === object) {
                    let indexOfObject = this.objectList.indexOf(object)
                    this.objectList.splice(indexOfObject, 1)
                }
            }
            checkMargin()
        },

        changeSettings(object) {
            Swal.fire({
                title: `${object.name} settings`,
                html: `<form class="settings__form">
    <label>Color: <input type="color" id="settingsColor"></label>
    <label>Name: <input type="text" id="settingsName"></label>
</form>`,
                width: '60vw',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Apply'
            }).then((result) => {
                if (result.isConfirmed) {
                    let colorInput = document.getElementById('settingsColor')
                    let nameInput = document.getElementById('settingsName')
                    let settings = {
                        color: colorInput.value,
                        name: nameInput.value
                    }
                    Object.assign(object, settings)
                }
            })
        }
    },

    mounted: function() {
        this.$nextTick(function() {
            scrollingList = document.getElementById('scrollingList')
        })
    }
})