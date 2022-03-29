// Your code goes here

function getItemById(itemsList, itemID) {
    return itemsList.find(item => {
        return item.id === itemID
    })
}

function buildTransactions(salesList, itemsList) {
    return salesList.map(sale => {
        return {
            ...sale,
            description: getItemById(itemsList, sale.itemId).description,
            price: getItemById(itemsList, sale.itemId).price,
        }
    })
}

function getTransactionsByItemDescription (transactions, description) {
    return transactions.filter (transaction => {
        return transaction.description === description
    })

}

module.exports = {
    // Uncomment these as you write them
    getItemById,
    buildTransactions,
    getTransactionsByItemDescription
}
