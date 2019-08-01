const Pencil = require('./pencil')

describe('Pencil class', () => {
    describe('Constructor method', () => {
        test('constructs a new pencil object with pointDuribility of 40000', () => {
            const properties = {
                pointDuribility: 40000,
            }
            const pencil = new Pencil(properties)
            expect(pencil.pointDuribility).toBe(40000)
        })
    })
})