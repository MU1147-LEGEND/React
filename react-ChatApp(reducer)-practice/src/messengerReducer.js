import { contacts } from "./contacts";
export const initialState = {
    selectedId: 0,
    messages: {},
};
contacts.map((contact) => initialState.messages[contact.id] = `Hello ${contact.name}!`);

export function messengerReducer(state, action) {
    switch (action.type) {
        case "changed_selection": {
            console.log(state.messages);
            return {
                ...state,
                selectedId: action.contactId,
                message: state.messages[action.contactId],
            };
        }
        case "edited_message": {
            return {
                ...state,
                messages:{
                    ...state.messages,
                    [state.selectedId]: action.message,
                }
            };
        }
        case "sent_message": {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: '',
                  },
            };
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}
