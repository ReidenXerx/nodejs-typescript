export class ClassTest_1{
    protected protected_attribute: string = 'protected'
    public public_attribute: string = 'black'

    private go() {
        console.log('Go');
    }
    protected go_interface() {
        this.go();
    }
    render() {
        return(null)
    }
}