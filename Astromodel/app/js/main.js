//REST methods
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}

// App alerts
let alerts = {
    errorAlert: {
        position: 'top-end',
        icon: 'error',
        title: 'Some number properties weren`t numbers',
        showConfirmButton: false,
        timer: 2500
    },

    getSettingsAlert(objectName = 'New') {
        return {
            title: `${objectName} settings`,
            html: `@@include('../templates/settingsModal.html')`,
            width: '60vw',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Apply'
        }

    }
}

// Functions to react with modals
function validNewObjectSettings() {
    let TInput = document.getElementById('settingsT')

    let connectionForceInput = document.getElementById('settingsConnectionForce')

    numberInputs = [TInput, connectionForceInput]

    for (input of numberInputs) {
        if (isNaN(+input.value)) {
            return false
        }
    }

    return true
}

function getNewObjectSettings() {
    let colorInput = document.getElementById('settingsColor')
    let nameInput = document.getElementById('settingsName')
    let TInput = document.getElementById('settingsT')

    let connectionForceInput = document.getElementById('settingsConnectionForce')

    return {
        color: colorInput.value,
        name: nameInput.value,
        frequency: +TInput.value,
        connectivity: +connectionForceInput.value
    }

}

class FrameObject {
    constructor(props) {
        this.id = Math.random().toString(16).slice(2)
        this.color = props.color || 'red'
        this.name = props.name || 'default'
        this.frequency = props.frequency || 2
        this.connectivity = props.connectivity || 2
    }
}

let vm = new Vue({
    el: '#app',

    data: {
        objectList: [new FrameObject({})],
    },

    methods: {
        addObject: function() {
            Swal.fire(alerts.getSettingsAlert()).then((result) => {
                if (result.isConfirmed) {
                    if (!validNewObjectSettings()) {
                        Swal.fire(errorAlert)
                    } else this.objectList.push(new FrameObject(getNewObjectSettings()))
                }
            })
            this.checkScrollingListMargin('future')
        },

        deleteObject(object) {
            for (currentObject of this.objectList) {
                if (currentObject === object) {
                    let indexOfObject = this.objectList.indexOf(object)
                    this.objectList.splice(indexOfObject, 1)
                }
            }
            this.checkScrollingListMargin('past')
        },

        checkScrollingListMargin(scrollingListStatus) {
            let itemsCounter = 7
            if (scrollingListStatus == 'future') {
                itemsCounter = 7
            }
            if (scrollingListStatus == 'past') {
                itemsCounter = 8
            }

            if (vm.objectList.length >= itemsCounter) {
                scrollingList.classList.add('object-list_scroll')
            } else {
                scrollingList.classList.remove('object-list_scroll')
            }

        },

        changeSettings(object) {
            Swal.fire(alerts.getSettingsAlert(object.name)).then((result) => {
                if (result.isConfirmed) {
                    if (!validNewObjectSettings()) {
                        Swal.fire(alerts.errorAlert)
                    } else Object.assign(object, getNewObjectSettings())
                }
            })
        },

        updateAnim() {
            postData('https://xenofium-astromodel.herokuapp.com/api/test/dDha03LqkyCYI6NyRZysPXukX', this.formattedObjectList)
                .then((data) => {
                    console.log(data); // JSON data parsed by `response.json()` call
                });
        }
    },

    computed: {
        formattedObjectList() {
            let formattedObjectList = {}

            for (let object of this.objectList) {
                let formattedObject = {}
                Object.assign(formattedObject, object)
                delete formattedObject.id
                delete formattedObject.name
                delete formattedObject.color
                formattedObjectList[`${object.id}`] = formattedObject
            }

            return formattedObjectList
        }
    },

    mounted: function() {
        this.$nextTick(function() {
            let scrollingList = document.getElementById('scrollingList')
        })
    }
})
