describe('expect', () => {

    it('toBe', () => {
        expect(true).toBe(true);
    });

    it('not toBe', () => {
        expect(true).not.toBe(false);
    });

    it('toEqual', () => {
        const a = 1;
        expect(a).toEqual(1);
    });

    it('not toEqual', () => {
        const a = 1;
        expect(a).not.toEqual(2);
    });

    it ('toBe vs toEqual', () => {
        const a = { bar: 'baz' };
        const b = { foo: a };
        const c = { foo: a };

        expect(b.foo.bar).toEqual(c.foo.bar);
        expect(b.foo.bar).toEqual(a.bar);
        expect(b.foo).toEqual(c.foo);
        expect(b).toEqual(c);

        expect(b.foo.bar).toBe(c.foo.bar);
        expect(b.foo.bar).toBe(a.bar);
        expect(b.foo).toBe(c.foo);
        expect(b).not.toBe(c);
    });

    it ('toMatch', () => {
        const message = 'foo bar baz';

        expect(message).toMatch(/bar/);
        expect(message).toMatch('bar');
        expect(message).not.toMatch(/quux/);
    });

});
