const ADD_COMMENT = 'ADD_COMMENT';

{
    type: ADD_COMMENT,
    text: 'My first comment !'
}

const REMOVE_COMMENT = 'REMOVE_COMMENT';

{
  type: REMOVE_COMMENT,
  id: 20
}

const EDIT_COMMENT = 'EDIT_COMMENT';

{
  type: EDIT_COMMENT,
  id: 20,
  text: 'wyedytowany tekst komentarza'
}

const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

{
  type: THUMB_UP_COMMENT,
  id: 20
}

const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
  type: THUMB_DOWN_COMMENT,
  id: 20
}
