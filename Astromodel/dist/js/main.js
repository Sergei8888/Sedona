let scrollingList

let errorAlert = {
    position: 'top-end',
    icon: 'error',
    title: 'Some number properties weren`t numbers',
    showConfirmButton: false,
    timer: 2500
}

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
        this.T = props.T || 2
        this.phase = props.phase || 2
        this.connectionForce = props.connectionForce || 2
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
    <label>Frequency: <input type="text" id="settingsT"></label>
    <label>Phase: <input type="text" id="settingsPhase"></label>
    <label>Connection force: <input type="text" id="settingsConnectionForce"></label>
</form>`,
                width: '60vw',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Apply'
            }).then((result) => {
                if (result.isConfirmed) {
                    if (!validObjectSettings()) {
                        Swal.fire(errorAlert)
                    } else this.objectList.push(new FrameObject(getObjectSettings()))
                }
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
    <label>Frequency: <input type="text" id="settingsT"></label>
    <label>Phase: <input type="text" id="settingsPhase"></label>
    <label>Connection force: <input type="text" id="settingsConnectionForce"></label>
</form>`,
                width: '60vw',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Apply'
            }).then((result) => {
                if (result.isConfirmed) {
                    if (!validObjectSettings()) {
                        Swal.fire(errorAlert)
                    } else Object.assign(object, getObjectSettings())
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

function validObjectSettings() {
    let TInput = document.getElementById('settingsT')
    let phaseInput = document.getElementById('settingsPhase')
    let connectionForceInput = document.getElementById('settingsConnectionForce')

    numberInputs = [TInput, phaseInput, connectionForceInput]

    for (input of numberInputs) {
        if (isNaN(+input.value)) {
            return false
        }
    }

    return true
}

function getObjectSettings() {
    let colorInput = document.getElementById('settingsColor')
    let nameInput = document.getElementById('settingsName')
    let TInput = document.getElementById('settingsT')
    let phaseInput = document.getElementById('settingsPhase')
    let connectionForceInput = document.getElementById('settingsConnectionForce')

    return {
        color: colorInput.value,
        name: nameInput.value,
        T: +TInput.value,
        phase: +phaseInput.value,
        connectionForce: +connectionForceInput.value
    }

}