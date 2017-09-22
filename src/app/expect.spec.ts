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

});
