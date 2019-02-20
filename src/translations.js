export default {
  en: {
    app: {
      title: 'SeCo '
    },
    form: {
      error: {
        unknownUser: 'Given username does not exist',
        wrongPw: 'The password for given username is incorrect',
        required: '%{field} is required',
        usernameTaken: 'The given username is already in use'
      },
      documentSearch: {
        title: {
          label: 'Document title',
          placeholder: 'Insert document title here (optional, not used for similarity search)'
        },
        content: {
          label: 'Document content',
          placeholder: 'Insert document content here or use automatic text extraction below'
        },
        algorithm: {
          label: 'Algorithm'
        },
        resultSize: {
          label: 'Result size'
        },
        filter: {
          court: 'Court',
          maxLength: 'Maximum word count',
          containsPhrase: 'Containing phrase'
        }
      },
      submit: 'Submit',
      cancel: 'Cancel',
      confirm: 'Confirm'
    },
    dialog: {
      changeAlgorithm: {
        title: 'Options for query results'
      },
      signin: {
        title: 'Please choose a username and a password to create an account'
      },
      filterBy: {
        title: 'Filter by'
      },
      show: {
        title: 'Show'
      }
    },
    document: {
      showQuery: 'Show query',
      find: 'Find documents',
      getSimilar: 'Get similar',
      mostSimilar: 'Most similar documents',
      compare: 'Compare documents',
      searchInstructions: 'Click the "find documents" button to search for documents.',
    },
    doc2vec: {
      title: 'Document search with paragraph vector (Doc2Vec) embeddings',
      description: ''
    },
    tfidf: {
      title: 'Document search with TF-IDF vector embeddings',
    },
    navigation: {
      documentSearch: 'document-search',
      compareDocuments: 'compare-documents',
      about: 'about'
    },
    about: {
      title: 'Information about the project'
    },
    navBar: {
      documentSearch: 'Document search',
      title: 'Semantic Finlex case law document search'
    },
    similarity: {
      rate: 'Rate similarity',
      alreadyRated: 'You have already rated this document pair',
      '5': '5 - Almost identical cases',
      '4': '4 - Similar topics and content',
      '3': '3 - Multiple shared topics',
      '2': '2 - At least one common topic',
      '1': '1 - Cases contain some common elements',
      '0': '0 - Completely different cases'
    },
    page: {
      documentSearch: {
        title: 'Search documents by inserting text or keywords as document content'
      },
      login: {
        title: 'Log in by entering your username and password',
        info: 'Logging in is required to rate document similarities and nothing else.\n' +
        'The rated similarities are used for evaluating the automatic document search methods used in this application.\n' +
        'By creating an account you give your consent for us to use your similarity ratings for evaluating document search algorithms. \n' +
        'We highly appreciate any ratings provided by you.',
        signin: 'Don\'t have an account yet?'
      },
      goldStandard: {
        title: 'Welcome to document comparison page',
        documents: 'Example query documents for document pair similarity rating'
      },
    },
    infoDialog: {
      general: {
        title: 'General info',
        creator: {
          title: 'Creator',
          text: 'This project is created by Sami Sarsa.\n'
                + 'The project is supported by SeCo/Aalto University, HELDIG/Helsinki University, Edita and the Ministry ' +
                  'of Justice of Finland'
        },
        contact: {
          title: 'Contact',
          text: 'For issues or feedback, please send e-mail to sami.sarsa@aalto.fi'
        }
      },
      accounts: {
        title: 'User account info',
        usage: {
          title: 'What is creating an account for?',
          text: 'Creating an account is required to rate document similarities and nothing else.\n' +
          'The rated similarities are used for evaluating the automatic document search methods used in this application.\n\n' +
          'By creating an account you give your consent for us to use your similarity ratings for evaluating document search algorithms. \n' +
          'We highly appreciate any ratings provided by you.'
        },
        privacy: {
          title: 'Privacy',
          text: 'The signed up users are as anonymous to us as ones without accounts. \n' +
          'The only data we store from users with accounts is their username, password and the ratings given by them.'
        },
        button: 'User accounts'
      },
      similarity: {
        title: 'Similarity rating info',
        ratingDocuments: {
          title: 'Acquiring documents for rating similarities',
          text: 'Similarities are rated for document pairs consisting of a query and a result. \n' +
                'Documents can be searched either by using the form under ' +
                '"DOCUMENT SEARCH" tab or pressing "GET SIMILAR" button for a document.\n' +
                'When a user is logged in, a rate similarity form will appear to the right of each result.'
        },
        ratingSubmission: {
          title: 'Submitting a rating',
          text: 'Rating is submitted when a rating is selected in the similarity form and the form is submitted.\n' +
                'A green tick (✓) in the form indicates that the given query-result pair has been rated.\n' +
                'Unlimited submissions are allowed.'
        },
        button: 'Show rating info'
      }
    },
    info: 'Info',
    home: 'Home',
    hide: 'Hide',
    show: 'Show',
    close: 'Close',
    test: 'Testing',
    logout: 'Log out',
    login: 'Log in',
    signin: 'Sign in by clicking here',
    loggedIn: {
      title: 'Logged in as %{username}',
      ratingInfo: 'Now that you are logged in, you may rate any document search results.\n' +
                  'Also, thank you for your willingness to help in evaluating Finnish case law document search.',
    },
    dropzone: {
      info: 'Click here to extract text from PDF/image files or try dropping them here. \nImage files and PDFs with scanned images require "Scan image" as text extraction method.\n',
      select: 'Text extraction',
      selectInfo: 'Read PDF assumes that the file is a *.pdf file with directly extractable text. This method is accurate and fast but won\'t \n' +
      'work with for scanned images.\n\n' +
      'Image OCR is slower and less accurate than Read PDF but works for most image files.',
      noFile: 'No file selected.',
      extractTextFailed: 'check that pdf contains an extractable text layer, otherwise try image OCR'
    },
    datatype: {
      image: 'Scan image (OCR)',
      pdf: 'Read PDF'
    }
  },

  fi: {
    home: 'Etusivu',
    hide: 'Piilota',
    close: 'Sulje',
    test: 'Testaa'
  },

  sv: {
    test: 'Testar'
  }
}