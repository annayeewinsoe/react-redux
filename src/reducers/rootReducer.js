const initState = {
   posts: [
      {id: 1, title: "Russian President Vladmir Putin congratulates Team Spirit on winning The International 10", body: "Team Spirit became the first CIS Dota 2 team to win The International since Natus Vincere at the original TI in 2011, completing a Cinderella run at TI10 with a win against tournament favorites PSG.LGD yesterday.\nWhen Spirit lifted the Aegis of Champions, it ended a decade-long drought for Eastern Europe at TI10 and secured the team $18,208,300 of the more-than-$40 million total prize pool, the largest in esports history."},
      {id: 2, title: "Dota 2’s The International 10 peaked at 2.7 million viewers, set esports record in the CIS", body: "The International 10 is in the books, with Team Spirit pulling off an incredible lower bracket run full of upsets against top teams to win the event and take home the lion’s share of the record-breaking $40 million prize pool.\nThat prize pool wasn’t the only record-breaking aspect of the event either. The finals between Spirit and PSG.LGD peaked at more than 2.7 million viewers, setting a new TI viewership record, a 37 percent increase from TI9’s 1.9 million peak during OG’s showdown with Team Liquid, according to Esports Charts."},
      {id: 3, title: "Alliance’s Dota 2 team parts ways with Limmp and fng", body: "Alliance had a rocky year in the Dota Pro Circuit, outperforming many of the other top teams in Europe during the regular season only to fall short of all expectations once they made it back to a LAN setting.\nThis culminated in a ninth-place exit at The International 10, which now has the team looking toward the future. Some key roster changes are being made, centered around the departure of Linus “Limmp” Blomdin and Artiom “fng” Barshack."}
   ],
   hobbies: ['Gaming', 'Gardening', 'Cooking', 'Painting', 'Travelling'],
   places: ['Moscow', 'Paris', 'Rome', 'Phuket', 'Maldives', 'Bali', 'Grand Canyon', 'Machu Picchu']
}

const rootReducer = (state=initState, action) => {
   switch(action.type) {
      // Posts
      case 'DEL_POST':
         let new_posts = state.posts.filter(post => post.id !== action.id)
         return {
            ...state,
            posts: new_posts
         }
      case 'ADD_POST':
         return {
            ...state,
            posts: [...state.posts, action.post]
         }
      // Hobbies
      case 'DEL_HOBBY':
         let new_hobbies = state.hobbies.filter(hobby => hobby !== action.hobby)
         return {
            ...state,
            hobbies: new_hobbies
         }
      case 'ADD_HOBBY':
         return {
            ...state,
            hobbies: [...state.hobbies, action.hobby]
         }
      // Places
      case 'DEL_PLACE':
         let new_places = state.places.filter(place => place !== action.place)
         return {
            ...state,
            places: new_places
         }
      case 'ADD_PLACE':
         return {
            ...state,
            places: [...state.places, action.place]
         }
      default:
         return state
   }
}

export default rootReducer