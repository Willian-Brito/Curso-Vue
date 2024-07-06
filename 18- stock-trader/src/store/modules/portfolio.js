export default {
    state: {
        funds: 10000,
        stocks: []       
    },
    mutations: {
        buyStock(state, order) {
            const record = state.stocks.find(el => el.id == order.stockId)

            if(record) {
                record.quantity += order.quantity
            } else {
                state.stocks.push({
                    id: order.stockId,
                    quantity: order.quantity
                })
            }
            state.funds -= order.stockPrice * order.quantity
        },
        sellStock(state, order) {
            const record = state.stocks.find(el => el.id == order.stockId)

            if(record.quantity > order.quantity) {
                record.quantity -= order.quantity
            } else {
                const index = state.stocks.indexOf(record)
                state.stocks.splice(index, 1)
            }
            state.funds += order.stockPrice * order.quantity
        },
        setPortfolio(state, portfolio) {
            state.funds = portfolio.funds
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
        }
    },
    actions: {
        sellStock({ commit }, order) {
            commit('sellStock', order)
        }
    },
    getters: {
        stockPortfolio(state, getters) {
            return state.stocks.map(stock => {
                const record = getters.stocks.find(el => el.id == stock.id) 
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },
        funds(state) {
            return state.funds
        }
    }
}