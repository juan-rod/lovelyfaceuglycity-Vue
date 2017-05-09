export const createTravelCard = ({ commit }, travelCard, file) => {
	console.log("herro from actions")
  commit('CREATE_TRAVELCARD', travelCard);
}
export const fetchTravelCard = ({ commit }) => {
  commit('FETCH_TRAVELCARD')
}