export const createTravelCard = ({ commit }, travelCard, file) => {
	console.log("herro from createTravelCard in actions")
  commit('CREATE_TRAVELCARD', travelCard);
}
export const fetchTravelCard = ({ commit }) => {
  commit('FETCH_TRAVELCARD')
}
export const createImageFile = ({ commit }) => {
	console.log("herro from createImageFile in actions")
  commit('CREATE_IMAGEFILE')
}