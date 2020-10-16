export default [
    {
        id: 'forest',
        title: 'Investigate the dim red glow coming from the forest.',
        map: {
            top: '89%',
            left: '44%'
        },
        image: '',
        description: `
        Something something
    `,
        choices: [{
            id: 'greet',
            description: 'Something something',
            result: `
            Something something 
        `,
            sanity: 0,
            eucharist: 35
        }, {
            id: 'fight',
            description: 'Something something',
            result: `
            Something something
        `,
            sanity: -30,
            eucharist: 50
        }, {
            id: 'run',
            description: 'Something something',
            result: `
            Something something
        `,
            sanity: -50,
            eucharist: 0
        }]
    },
    {
        id: 'church',
        title: 'Go back to the church.',
        map: {
            top: '17%',
            left: '37%'
        },
        image: '',
        audio: '',
        action: '',
        description: `
        Something something
    `,
        choices: [{
            id: 'listen',
            description: 'Something something',
            result: `
            Something something
        `,
            sanity: -35,
            eucharist: 35
        }, {
            id: 'fight',
            description: 'Something something',
            result: `
            Something something
        `,
            sanity: -45,
            eucharist: 0
        }, {
            id: 'burn',
            description: 'Something something',
            result: `
            Something something
        `,
            sanity: 0,
            eucharist: 20
        }]
    },
    {
        id: 'home',
        title: 'Knock on the door of the warmly lit home.',
        map: {
            top: '31%',
            left: '5%'
        },
        prerequisites: [],
        image: 'something.png',
        audio: '',
        action: '',
        description: `
        Something something
    `,
        choices: [{
            id: 'fakeIt',
            description: 'Fake it till you make it!',
            result: 'You lose some Sanity but feel like you may have avoided something terrible.',
            sanity: 0,
            eucharist: 40
        }, {
            id: 'flip',
            description: 'Flip the table and run away.',
            result: 'Something something',
            sanity: -50,
            eucharist: 0
        }, {
            id: 'You ask to use the bathroom.',
            description: 'A Jeweled Chest',
            result: 'Something something',
            sanity: 30,
            eucharist: 0
        }]
    }
];