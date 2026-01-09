const {createTicket, getTicket, getAllTickets} = require('../controllers/ticket.controller');
const { verifyTicketNotificationCreateRequest } = require('../middlewares/ticket.middlewares');

const routes = (app) => {
         app.post(
           "/notiservice/api/v1/notifications",
           verifyTicketNotificationCreateRequest,
          createTicket
         );

         app.get("/notiservice/api/v1/notifications/:id" , getTicket);
         app.get("/notiservice/api/v1/notifications", getAllTickets);
}


module.exports = routes; 