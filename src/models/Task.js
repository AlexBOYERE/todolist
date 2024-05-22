import Realm from 'realm';

const Schema = {
    name: 'Task',
    properties: {
        id: { type: 'int', primaryKey: true },
        title: 'string',
        description: 'string',
        completed: 'bool',
        date: 'date',
        color: 'string',
    },
};

export default Schema;
