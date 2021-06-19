const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = order => {
  /* let a = `Olá ${Object.values(order.order.delivery)[0]}, entrega para: ${Object.values(order)[0]}, Telefone: ${Object.values(order)[1]}, R.${Object.values(order.address)[0]}, ${Object.values(order.address)[1]}, ${Object.values(order.address)[2]}`
  console.log(a); */
  const nome = order.name;
  const phoneNumber = order.phoneNumber;
  const addressStreet = order.street;
  const addressNumber = order.address.number;
  const addressApartment = order.address.apartment;
  const orderDeliveryPerson = order.order.delivery.deliveryPerson;

  console.log(`Olá ${orderDeliveryPerson}, entrega para: ${nome}, Telefone:${phoneNumber}, R.${addressStreet}, Nª: ${addressNumber}, AP: ${addressApartment}`)
}

customerInfo(order);

const orderModifier = order => {
  order.order.pizza['muzzarella'] = {
    amount: 1,
    price: 20
  }

  order.order.pizza['calabresa'] = {
    amount: 1,
    price: 20
  };

  order.name = 'Luiz Silva';

  const nome = order.name;
  const orderPizzaMuzzarella = Object.keys(order.order.pizza)[2];
  const orderPizzaCalabresa = Object.keys(order.order.pizza)[3];
  const orderPizzaMuzzarellaPrice = order.order.pizza.muzzarella.price;
  const orderPizzaCalabresaPrice = order.order.pizza.calabresa.price;
  const orderCocaColaZero = order.order.drinks.coke.type;
  const orderDrinkPrice = order.order.drinks.coke.price;
  const orderPrice = orderPizzaCalabresaPrice + orderPizzaMuzzarellaPrice + orderDrinkPrice;

  console.log(`Olá ${nome}, o total do seu pedido de ${orderPizzaMuzzarella}, ${orderPizzaCalabresa} e ${orderCocaColaZero} é R$${orderPrice},00.`)
}

orderModifier(order);

