import Sequelize,{ Model } from "sequelize";


class Customer extends Model {

    static init(sequelize) {
        super.init(
            {
             name: Sequelize.STRING,
             email: Sequelize.STRING,
             status: Sequelize.ENUM("ACTIVATE", "ARCHIVED")
            },
            {
                sequelize,
                name:{
                    singular:"customer",
                    plural:"customers"
                },
                hooks:{
                    beforeValidate: (customer, options) => {
                        customer.status = "ACTIVATE"
                    }
                }
            }
        );
    }

    static associate(models) {
        this.hasMany(models.Contact);
    }
}

export default Customer;