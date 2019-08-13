// FULL_POST_FRAGMENT 에서 쓰려는 값들 (USER_FRAGMENT, FILE_FRAGMENT, COMMENT_FRAGMENT) 등을 fragment 형태가 아니라
// string 형태로 만들어서 써야 작동한다.

export const USER_FRAGMENT = `
        id
        username
        avatar
`;

export const FILE_FRAGMENT = `
        id
        url
`;

export const COMMENT_FRAGMENT = `
        id
        text
        user {
            ${USER_FRAGMENT}
        }
        `;

export const MESSAGE_FRAGMENT = `
            id
            text
            to {
                ${USER_FRAGMENT}
            }
            from {
                ${USER_FRAGMENT}
            }
        `;

export const ROOM_FRAGMENT = `
    fragment RoomParts on Room {
        id
        participants {
            ${USER_FRAGMENT}
        }
        messages {
            ${MESSAGE_FRAGMENT}
        }
}
`;
