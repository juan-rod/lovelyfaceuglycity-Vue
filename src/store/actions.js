export const createTravelCard = ({ commit }, travelCard) => {
	console.log("herro from actions")
  commit('CREATE_TRAVELCARD', travelCard);
}