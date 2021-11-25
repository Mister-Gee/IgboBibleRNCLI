import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BCD2E8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navBar: {
        paddingVertical: 5
    },
    navDrawer: {
        paddingVertical: 40,
        paddingHorizontal: 30,
    },
    navHeader: {
        paddingVertical: 40,
        marginBottom: 20,
        borderBottomColor: '#0d152d',
        borderBottomWidth: 1
    },
    navHeaderText: {
        color: '#FFFFFF',
        fontFamily: 'Inter-Bold',
        textAlign: 'center',
        fontSize: 30
    },
    navView: {
        justifyContent: 'space-between',
        height: '80%'
    },
    navBody: {
        paddingVertical: 5,

    },
    navLinkContainer: {
        paddingVertical: 7,

    },
    navLinkTextWrapper: {
        flexDirection: 'row',
    },
    navFooter: {
        // flex: 1,
        // justifyContent: 'flex-end',
    },
    navFooterLinkContainer: {},
    navLink: {
        fontFamily: 'Inter-Regular',
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        paddingVertical: 10,
        marginLeft: 10,
        marginTop: -7
    },
    navExtraLinkContainer: {
        marginLeft: -4
    },
    wrapper: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    bgImg: {
        height: 250,
        width: '100%',
        marginTop: -40,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    verse: {
        // height: 120,
        // width: 300,
        maxWidth: 300,
        backgroundColor: 'rgba(46, 89, 132, 0.5)',
        shadowColor: "#2E5984",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10
    },
    whiteText: {
        color: '#FFFFFF'
    },
    verseTitle: {
        fontFamily: 'Inter-Bold',
        fontSize: 15,
        marginBottom: 5
    },
    verseBody: {
        fontFamily: 'Courgette-Regular',
        fontSize: 11,
        textAlign: 'center',
        marginTop: 5
    },
    versePage: {
        fontFamily: 'Inter-Regular',
        marginTop: 10
    },
    books: {
        marginTop: 70
    },
    book: {
        height: 80,
        width: 320,
        backgroundColor: '#2e5984',
        shadowColor: "#2e5984",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        borderRadius: 50,
        paddingHorizontal: 80,
        paddingVertical: 15,
        marginBottom: 60
    },
    bookTitle: {
        fontFamily: 'Inter-Bold',
        fontSize: 16,
        marginBottom: 5
    },
    boldText: {
        fontWeight: 'bold'
    },
    bookPages: {
        fontFamily: 'Inter-Regular',
        fontSize: 14
    },
    header: {
        height: 52,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 9,
        paddingBottom: 3,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        backgroundColor: '#2E5984',
        // marginTop: 27
    },
    mainHeaderText: {
        marginLeft: 10,
        fontSize: 23,
        fontFamily: 'Inter-Regular',
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    mainDetailHeaderText: {
        fontSize: 18,
        fontFamily: 'Inter-Regular',
        fontWeight: 'bold',
        marginTop: -5,
        marginLeft: -25,
        color: '#FFFFFF'
    },
    headerTextWrap: {
        flexDirection: 'row',
        marginLeft: 59,
        marginTop: 5
    },
    bookCard: {
        backgroundColor: '#2E5984',
        paddingHorizontal: 100,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%'
    },
    bookText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'Inter-Bold',
        textAlign: 'center'
    },
    chapterCard: {
        backgroundColor: '#2E5984',
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderRadius: 5,
        width: 100,
        marginBottom: 5,
        marginLeft: 5,
    },
    chapterText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Inter-Bold',
        textAlign: 'center'
    },
    chapterContainer: {
        marginLeft: -15
    },
    verseContent: {
        color: '#000000',
        marginTop: 5,
        // paddingHorizontal: 1,
        fontFamily: 'Inter-Regular'
    },
    aboutUsWrapper: {
        height: '100%'
    },
    aboutUsHeader: {
        marginBottom: 20
    },
    aboutUsHeaderText: {
        color: '#000000',
        fontSize: 20,
        fontFamily: 'Inter-Bold',
        textAlign: 'center',
        paddingVertical: 5
    },
    aboutUsHeaderBodyText: {
        color: '#000000',
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        textAlign: 'center',
        paddingVertical: 5
    },
    contactHeader: {
        color: '#000000',
        fontFamily: 'Inter-Bold',
        fontSize: 15
    },
    contactText: {
        color: '#000000',
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        marginLeft: -2
    },
    contactTextBold: {
        fontWeight: 'bold'
    }, 
    handlerView: {
        flex: 1
    },
    BookContainer: {
        marginTop: 50
    },
    verseText: {
        paddingVertical: 10,
        borderBottomColor: '#000000',
        borderBottomWidth: 1
    }
})