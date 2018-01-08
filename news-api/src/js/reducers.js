export const FETCH_NEWS = 'FETCH_NEWS';
export const FETCH_SOURCES = 'FETCH_SOURCES';

export function fetchSources(sources) { return { type: FETCH_SOURCES, payload: sources }; };

export function fetchNews(news) { return { type: FETCH_NEWS, payload: news }; };

export const actions = {
    fetchSources,
    fetchNews
};

const initialState = {
    sources: {},
    news: []
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_SOURCES:
            return Object.assign({}, state, {
                sources: action.payload.sources
            });
            break;
        case FETCH_NEWS:
            return Object.assign({}, state, {
                news: action.payload.articles
            });
        break;
            
        default:
            return state;
    }
}