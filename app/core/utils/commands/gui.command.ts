import commandLine from 'command-line-usage';

export const optionDefinitions = [
    { name: 'start', type: Boolean },
    { name: 'development', type: Boolean },
    { name: 'production', type: Boolean },
    { name: 'route-list', type: Boolean }
]
export const guiCommands = commandLine([
    {
        header: 'APPLICATION NOT MAME',
        content: 'Server application for react-app'
    },
    {
        header: 'General options',
        optionList: [
            {
                name: 'start',
                typeLabel: 'required',
                description: 'initialize the serve'
            },
            {
                name: 'route-list',
                typeLabel: ' ',
                description: 'show all routes availables'
            }
        ]
    },
    {
        header: 'Deployment options',
        optionList: [
            {
                name: 'development',
                typeLabel: 'boolean',
                description: 'configure server on development '
            },
            {
                name: 'production',
                typeLabel: ' boolean',
                description: 'configure server on producction '
            },
        ]
    }
]);

