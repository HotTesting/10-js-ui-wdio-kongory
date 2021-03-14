const userObj = { username: 'User' }

export function shared(user: any = userObj) {
    describe.skip('User', function () {

        it('can login', function () {
            console.log(user)
            //...
        })
    })
}