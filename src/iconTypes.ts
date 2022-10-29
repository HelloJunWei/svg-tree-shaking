
const tuple = <T extends string[]>(...args: T) => args

const IconTypes = tuple('chat_bubble', 'people', 'cancel', 'chevron_right', 'settings', 'close', 'menu', 'chevron_left', 'more_horiz', 'block', 'remove_circle', 'notifications_off', 'notifications', 'expand_less', 'expand_more', 'calendar_month', 'send', 'add', 'image', 'insert_emoticon', 'error_outline', 'search', 'visibility_off', 'delete_outline', 'push_pin', 'arrow_back', 'calendar_today', 'schedule', 'warning', 'check_circle_outline', 'question_mark', 'error')
export type IconType = typeof IconTypes[number]
const FontType = tuple('default', 'outlined')
export type fontType = typeof FontType[number]