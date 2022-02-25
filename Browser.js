const menuIconURI = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNyAyNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiNjZTU3NGU7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYWxxdWVfMiIgZGF0YS1uYW1lPSJDYWxxdWUgMiI+PGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iMjciIGhlaWdodD0iMjUiLz48ZyBpZD0iQnJvd3NlciI+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjAsMTguMjNIN2EuNzguNzgsMCwwLDEtLjc4LS43OFY3LjlBMS4xMywxLjEzLDAsMCwxLDcuMzMsNi43N0gxOS42N0ExLjEzLDEuMTMsMCwwLDEsMjAuNzksNy45djkuNTVBLjc4Ljc4LDAsMCwxLDIwLDE4LjIzWk03LjMzLDcuMjlhLjYuNiwwLDAsMC0uNi42MXY5LjU1YS4yNi4yNiwwLDAsMCwuMjYuMjZIMjBhLjI2LjI2LDAsMCwwLC4yNi0uMjZWNy45YS42LjYsMCwwLDAtLjYtLjYxWiIvPjxnIGlkPSJ0b3AiPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTcuMzMsN0gxOS42N2EuODYuODYsMCwwLDEsLjg2Ljg2VjkuNjVhMCwwLDAsMCwxLDAsMEg2LjQ3YTAsMCwwLDAsMSwwLDBWNy45QS44Ni44NiwwLDAsMSw3LjMzLDdaIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==';
const blockIconURI = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNyAyNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYWxxdWVfMiIgZGF0YS1uYW1lPSJDYWxxdWUgMiI+PGcgaWQ9IkxheWVyXzEiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iMjciIGhlaWdodD0iMjUiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xOS42Niw2LjdINy4zM0ExLjEyLDEuMTIsMCwwLDAsNi4yMSw3LjgydjkuNTVhLjc4Ljc4LDAsMCwwLC43OC43OEgyMGEuNzguNzgsMCwwLDAsLjc3LS43OFY3LjgyQTEuMTIsMS4xMiwwLDAsMCwxOS42Niw2LjdaTTIwLDE3LjYzSDdhLjI1LjI1LDAsMCwxLS4yNi0uMjZWOS41N0gyMC4yN3Y3LjhBLjI2LjI2LDAsMCwxLDIwLDE3LjYzWiIvPjwvZz48L2c+PC9zdmc+';

class BrowserBlocks {

    constructor (runtime) {}

    getInfo () {
        // this._locale = this.setLocale();
        return {
            id: 'browser',
            name: 'Browser',
            menuIconURI: menuIconURI,
            blockIconURI: blockIconURI,
            docsURI: 'https://adacraft.notion.site/9c8fb3c7ed6240e181290b2f1c70a651',
            blocks: [
                {
                    opcode: 'getUrl',
                    blockType: BlockType.REPORTER,
                    text: this.getMessage('get current URL')
                },
                {
                    opcode: 'checkIfQueryStringFieldExists',
                    blockType: BlockType.BOOLEAN,
                    text: this.getMessage('check field existence in URL'),
                    arguments: {
                        FIELD: {
                            type: ArgumentType.STRING,
                            defaultValue: 'search'
                        }
                    }
                },
                {
                    opcode: 'getQueryStringFieldValue',
                    blockType: BlockType.REPORTER,
                    text: this.getMessage('get field value from URL'),
                    arguments: {
                        FIELD: {
                            type: ArgumentType.STRING,
                            defaultValue: 'search'
                        }
                    }
                },
                {
                    opcode: 'openUrl',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('open URL'),
                    arguments: {
                        URL: {
                            type: ArgumentType.STRING,
                            defaultValue: 'https://adacraft.org'
                        }
                    }
                },
                {
                    opcode: 'saveAsFile',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('save as file'),
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'some text'
                        },
                        FILE_NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: 'file.txt'
                        }
                    }
                },
                {
                    opcode: 'openFileAsText',
                    blockType: BlockType.REPORTER,
                    disableMonitor: true,
                    text: this.getMessage('open text file')
                },
                // We are not sure that this is useful. What can we do from
                // adacraft with a binary content that can only be manipulated
                // as a string? Maybe nothing. Or only to avoid the formating
                // (UTF8...)?
                // So we disable it for now.
                // {
                //     opcode: 'openFileAsBinaryString',
                //     blockType: BlockType.REPORTER,
                //     text: this.getMessage('open binary file')
                // },
                {
                    opcode: 'localStorageSetItem',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('localStorage set item'),
                    arguments: {
                        NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: 'name'
                        },
                        VALUE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'value'
                        }
                    }
                },
                {
                    opcode: 'localStorageGetItem',
                    blockType: BlockType.REPORTER,
                    text: this.getMessage('localStorage get item'),
                    arguments: {
                        NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: 'name'
                        }
                    }
                },
                {
                    opcode: 'localStorageRemoveItem',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('localStorage remove item'),
                    arguments: {
                        NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: 'name'
                        }
                    }
                },
                {
                    opcode: 'localStorageItemExists',
                    blockType: BlockType.BOOLEAN,
                    text: this.getMessage('localStorage item exists'),
                    arguments: {
                        NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: 'name'
                        }
                    }
                },
                {
                    opcode: 'setHtml',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('set HTML'),
                    arguments: {
                        NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: '<h1 style="color: orange;">Hello</h1>World'
                        }
                    }
                },
                {
                    opcode: 'takePictureAndSaveWithName',
                    blockType: BlockType.COMMAND,
                    text:  this.getMessage('take picture and save it to file'),
                    arguments: {
                        PICTURE_NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: 'image.png'
                        }
                    }
                },
                {
                    opcode: 'takePictureAndSave',
                    blockType: BlockType.COMMAND,
                    text:  this.getMessage('save webcam picture')
                },
                {
                    opcode: 'windowAlert',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('window alert'),
                    arguments: {
                        MESSAGE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Some important information'
                        }
                    }
                },
                {
                    opcode: 'windowPromptReporter',
                    blockType: BlockType.REPORTER,
                    text: this.getMessage('window prompt as reporter'),
                    arguments: {
                        QUESTION: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Please type something'
                        },
                        DEFAULT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'something'
                        }
                    }
                },
                {
                    opcode: 'windowPromptNoDefaultReporter',
                    blockType: BlockType.REPORTER,
                    text: this.getMessage('window prompt without default as reporter'),
                    arguments: {
                        QUESTION: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Please type something'
                        }
                    }
                },
                {
                    opcode: 'windowPromptCommand',
                    blockType: BlockType.COMMAND,
                    text: this.getMessage('window prompt as command'),
                    arguments: {
                        MESSAGE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Please type something'
                        },
                        VALUE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'something'
                        }
                    }
                },
                {
                    opcode: 'windowConfirm',
                    blockType: BlockType.BOOLEAN,
                    text: this.getMessage('window confirm'),
                    arguments: {
                        MESSAGE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Do you agree?'
                        }
                    }
                },
            ]
        };
    }

    getUrl () {
        return window.location.href;
    }

    checkIfQueryStringFieldExists (args) {
        const field = args.FIELD
        let parameters = (new URL(window.location)).searchParams
        return parameters.has(field)
    }

    getQueryStringFieldValue (args) {
        const field = args.FIELD
        let parameters = (new URL(window.location)).searchParams
        const value = parameters.get(field)
        // Be sure to always return a valid string/ If the field can't be found,
        // we return an empty string.
        return value !== null ? value : ''
    }

    openUrl (args) {
        window.open(args.URL, '_blank')
    }

    openFile (readType) {
        const promise = new Promise((resolve, reject) => {
            const fileInput = document.getElementById('adacraft-hidden-input-file-upload')
            fileInput.value = ''
                   
            const closeButton = document.getElementById('adacraft-modal-close-button')
            const readFile = (event) => {
                closeButton.removeEventListener('click', readFile, false)
                window.removeEventListener('click', readFile, false)
                if (fileInput.value.length === 0) {
                    resolve('')
                } else {
                    // resolve(fileInput.files[0].name)
                    var reader = new FileReader();
                    reader.onload = function(event) {
                        const contents = event.target.result
                        resolve(contents)
                    }
                    const file = fileInput.files[0]
                    if (readType === 'text') {
                        reader.readAsText(file)
                    } else if (readType === 'binary') {
                        reader.readAsBinaryString(file)
                    } else {
                        resolve(
                            `unexpected error: unknown read type (${readType})`
                        )
                    }
                }
            }
            closeButton.addEventListener('click', readFile, false)
            window.addEventListener('click', readFile, false)

            const modal = document.getElementById('adacraft-modal')
            modal.style.display = 'block'
        })
        return promise
    }

    openFileAsText () {
        return this.openFile('text')
    }

    openFileAsBinaryString () {
        // We are not sure that this is useful. What can we do from adacraft
        // with a binary content that can only be manipulated as a string? Maybe
        // nothing. Or only to avoid the formating (UTF8...)?
        return this.openFile('binary')
    }

    saveAsFile (args) {
        try {
            const element = document.createElement('a');
            const content = args.TEXT;
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
            element.setAttribute('download', args.FILE_NAME);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);                
        } catch (error) {
            console.log(`error in saveAsFile block`)
        }
    }

    getLocalStorageKey (name) {
        let id
        if (window.adacraft && window.adacraft.projectId) {
            id = window.adacraft.projectId
        } else {
            id = 'default'
        }
        return `adacraft:project:${id}:${name}`
    }

    localStorageSetItem (args) {
        localStorage.setItem(
            this.getLocalStorageKey(args.NAME),
            args.VALUE
        )
    }

    localStorageGetItem (args) {
        const value = localStorage.getItem(this.getLocalStorageKey(args.NAME))
        return value || ''
    }
    
    localStorageRemoveItem (args) {
        localStorage.removeItem(this.getLocalStorageKey(args.NAME))
    }
    
    localStorageItemExists (args) {
        return localStorage.getItem(this.getLocalStorageKey(args.NAME)) !== null
    }

    setHtml (args) {
        try {
            const renderRoot = document.getElementById('dom-render-root')
            renderRoot.innerHTML = DOMPurify.sanitize(args.NAME)
        } catch (error) {
            return
        }
    }

    takePictureAndSaveWithName (args) {
        if (navigator.mediaDevices) {
            navigator.mediaDevices.getUserMedia({ audio: false, video: { width: 400 } })
                .then(function (mediaStream) {
                    const video = document.createElement('video');
                    video.srcObject = mediaStream;
                    video.onloadedmetadata = function (e) {
                        video.play();
                        const canvas1 = document.createElement('canvas')
                        const ctx = canvas1.getContext('2d');
                        canvas1.height = video.videoHeight
                        canvas1.width = video.videoWidth
                        ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
                        if (navigator.msSaveOrOpenBlob) {
                            const blobObject = canvas1.msToBlob()
                            window.navigator.msSaveOrOpenBlob(blobObject, args.PICTURE_NAME);
                        } else {
                            const elem = document.createElement('a');
                            elem.href = canvas1.toDataURL('image/png');
                            elem.download = args.PICTURE_NAME;
                            elem.click();
                        }
                    };
                
                });
        }
    }

    takePictureAndSave () {
        const now = new Date()
        // Function toISOString gives "2021-12-26T16:30:43.590Z" and we want
        // "20211226T163043Z"
        const isoTimestamp = now.toISOString().replaceAll('-', '').replaceAll(':', '').slice(0,15) + 'Z'
        const args = {
            PICTURE_NAME: `image_${isoTimestamp}.png`
        }
        this.takePictureAndSaveWithName(args)
    }

    windowAlert (args) {
        window.alert(args.MESSAGE)
    }

    windowPromptReporter (args) {
        return window.prompt(args.QUESTION, args.DEFAULT)
    }

    windowPromptNoDefaultReporter (args) {
        return window.prompt(args.QUESTION, '')
    }

    windowPromptCommand (args) {
        window.prompt(args.MESSAGE, args.VALUE)
    }

    windowConfirm (args) {
        return window.confirm(args.MESSAGE)
    }

    setLocale() {
        let locale = formatMessage.setup().locale;
        if (localisation.availableLocales.includes(locale)) {
          return locale;
        } else {
          return 'en';
        }
      }

      getMessage(id) {
        return localisation.messages[id][this._locale];
      }
}

Scratch.extensions.register(new BrowserBlocks());