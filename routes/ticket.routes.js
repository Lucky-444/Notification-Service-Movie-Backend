const {createTicket} = require('../controllers/ticket.controller');
const { verifyTicketNotificationCreateRequest } = require('../middlewares/ticket.middlewares');

const routes = (app) => {
         app.post(
           "/notiservice/api/v1/notifications",
           verifyTicketNotificationCreateRequest,
          createTicket
         );
}


module.exports = routes; 