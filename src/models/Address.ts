class Address
{
    city: string;
    street: string;
    suite: string;
    zipcode: string;

    constructor(city: string, street: string, suite: string, zipcode: string) {
        this.city = city;
        this.street = street;
        this.suite = suite;
        this.zipcode = zipcode;
    }
}

export default Address;
