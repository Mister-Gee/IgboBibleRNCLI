import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCF8F2',
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
        borderBottomColor: '#FCF8F2',
        borderBottomWidth: 1
    },
    navHeaderText: {
        color: '#FCF8F2',
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
        color: '#FCF8F2',
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
        marginTop: -85,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    verse: {
        // height: 120,
        // width: 300,
        maxWidth: 300,
        backgroundColor: 'rgba(146, 113, 71, 0.8)',
        shadowColor: "#927147",
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
        color: '#FCF8F2'
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
        backgroundColor: '#927147',
        shadowColor: "#927147",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        borderRadius: 50,
        paddingHorizontal: 60,
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
        backgroundColor: '#927147',
        // marginTop: 27
    },
    mainHeaderText: {
        marginLeft: 10,
        fontSize: 23,
        fontFamily: 'Inter-Regular',
        fontWeight: 'bold',
        color: '#FCF8F2'
    },
    mainDetailHeaderText: {
        fontSize: 18,
        fontFamily: 'Inter-Regular',
        fontWeight: 'bold',
        marginTop: -5,
        marginLeft: -25,
        color: '#FCF8F2'
    },
    headerTextWrap: {
        flexDirection: 'row',
        marginLeft: 59,
        marginTop: 5
    },
    bookCard: {
        backgroundColor: '#927147',
        paddingHorizontal: 100,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%'
    },
    bookText: {
        color: '#FCF8F2',
        fontSize: 15,
        fontFamily: 'Inter-Bold',
        textAlign: 'center'
    },
    chapterCard: {
        backgroundColor: '#927147',
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderRadius: 5,
        width: 100,
        marginBottom: 5,
        marginLeft: 5,
    },
    chapterText: {
        color: '#FCF8F2',
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
        borderBottomColor: '#927147',
        borderBottomWidth: 1
    }
})