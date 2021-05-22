//REST methods
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Access-Token': 'dDha03LqkyCYI6NyRZysPXukX',
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

    guideAlert: {
        title: `How to use app`,
        html: `@@include('../templates/guideModal.html')`,
        width: '60vw',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Apply'

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
function getRad(degrees) {
    return degrees * (Math.PI / 180)
}

function validNewObjectSettings() {
    let TInput = document.getElementById('settingsT')
    let angleInput = document.getElementById('settingsAngle')
    let connectionForceInput = document.getElementById('settingsConnectionForce')

    numberInputs = [TInput, angleInput, connectionForceInput]

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
    let angleInput = document.getElementById('settingsAngle')
    let TInput = document.getElementById('settingsT')

    let connectionForceInput = document.getElementById('settingsConnectionForce')

    return {
        color: colorInput.value,
        name: nameInput.value,
        angle: getRad(angleInput.value),
        frequency: +TInput.value,
        connectivity: +connectionForceInput.value
    }

}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


class FrameObject {
    constructor(props) {
        this.id = Math.random().toString(16).slice(2)
        this.color = props.color || '#00D1E0'
        this.name = props.name || 'default'
        this.angle = props.angle || 0
        this.frequency = props.frequency || 1
        this.connectivity = props.connectivity || 1
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
                        Swal.fire(alerts.errorAlert)
                    } else {
                        this.objectList.push(new FrameObject(getNewObjectSettings()))
                        this.checkScrollingListMargin('future')
                    }
                }
            })

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
                itemsCounter = 8
            }
            if (scrollingListStatus == 'past') {
                itemsCounter = 9
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
            console.log(this.formattedObjectList)
            postData('https://xenofium-astromodel.herokuapp.com/api/kuramoto/data/trade/', {
                fps: 60,
                time: 360,
                objects: this.formattedObjectList,
            }).then(onData);
        },

        importObjects(evt) {
            let files = evt.target.files;
            let file = files[0];
            let reader = new FileReader();
            reader.readAsText(file)
            reader.onload = () => {
                this.objectList = JSON.parse(reader.result);
                this.updateAnim()
            }
        },

        exportObjects() {
            download('oscillators.json', JSON.stringify(this.objectList))
        },

        showGuide() {
            Swal.fire(alerts.guideAlert)
        },
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
                formattedObject.start_angle = formattedObject.angle
                delete formattedObject.angle
                formattedObjectList[`${object.id}`] = formattedObject
            }

            return formattedObjectList
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            let scrollingList = document.getElementById('scrollingList')
        })
    },

})

let objectsImport = document.getElementById('objectsImport')
objectsImport.addEventListener('change', vm.importObjects)
