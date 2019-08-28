const defaultContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    defaultDescription = 'created at 21 July 2019""created at 21 July 2019',
    defaultTitle = 'SAMPLE NEWS HEADING',
    buttonText = 'Continue Reading',
    checkButtonClickRegex = /^\d+$/,
    regexEmail = /\S+@\S+\.\S+/,
    emailSubscribedMessage = 'Subscribed Successfully',
    emailInvalidMessage = 'Invalid Email id',
    closePopupText = 'X',
    imageSource = 'resource/download.png',
    selectCategoryText = 'Select Category',
    subscribeText = 'Subscribe',
    headerTagText = 'NEWSFEED',
    headerTagSubText = 'yet Another Newsfeed',
    footerText = ' \u00A9 NewsFeed 2019 ',
    defaultSelectChannelText = 'Select a NEWS Channel',
    subscribeTxt = 'Subscribe',
    url = `https://newsapi.org/v1/articles?apiKey=ac1fd7a9fc1342abb913e554a9525d85&`,
    lazy_url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ac1fd7a9fc1342abb913e554a9525d85`,
    newsChannel = ['ign', 'fortune', 'the-times-of-india', 'al-jazeera-english', 'the-hindu', 'bbc-news', 'the-verge', 'business-insider', 'cnn', 'reuters'];

export {
    defaultContent, defaultDescription, defaultTitle, buttonText, checkButtonClickRegex,
    regexEmail, emailSubscribedMessage, emailInvalidMessage, closePopupText, imageSource, selectCategoryText,
    subscribeText, headerTagText, headerTagSubText, footerText, defaultSelectChannelText,
    subscribeTxt, url, newsChannel, lazy_url
};
