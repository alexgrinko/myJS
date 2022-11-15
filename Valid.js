class Valid {
    constructor(a, b, c) {
        this.email = a;
        this.password = b;
        this.isValid = false;
    }
    validate() {
        if (this.password.length < 6) {
            this.isValid = false;
        } else {
            this.isValid = true;
        };
        return this.isValid;
    }
}
let account = new Valid('SanGrinko@gmail.com', '32131', this.isValid);

console.log(account);
account.validate();