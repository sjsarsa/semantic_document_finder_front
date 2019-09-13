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
          contains: {
            label: 'Containing word or phrase',
            placeholder: 'Multiple phrases separated by a comma: auto,liikenteen vaarantaminen'
          }

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
    algorithm: {
      lda: 'LDA',
      ensemble: 'Ensemble',
      doc2vecc: 'Doc2VecC',
      doc2vec: 'Doc2Vec',
      tfidf: 'TF-IDF',
    },
    navigation: {
      documentSearch: 'document-search',
      compareDocuments: 'compare-documents',
      about: 'about'
    },
    about: {
      title: 'Information about this project'
    },
    navBar: {
      documentSearch: 'Document search',
      title: 'Semantic Finlex case law finder'
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
        title: 'Search documents by inserting text as document content or upload content directly from a file'
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
        button: 'General and contact',
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
      },
      sourceCode: {
        title: 'Source code info',
        button: 'Source code',
        frontend: {
          title: 'Frontend',
          text: 'Source code for this web application\'s frontend is available on <a href="https://github.com/taikamurmeli/semantic_document_finder_front" style="color:#012ea3;">GitHub</a>'
        },
        backend: {
          title: 'Backend',
          text: 'Source code for the backend is not yet published'
        }
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
      title: 'File drop-zone',
      info: 'Select a text extraction method from the drop-down menu on the right and click on this area to browse files or try dropping a file here. \n\n' +
            'Supported formats are: Text file, XML, PDF and image files such as JPEG and PNG.\n' +
            'If your PDF contains text as scanned image, use image scanning instead of PDF reading.',
      select: 'Text extraction',
      selectInfo: 'Read PDF assumes that the file is a *.pdf file with directly extractable text. This method is accurate and fast but won\'t \n' +
      'work with for scanned images.\n\n' +
      'Image OCR is slower and less accurate than Read PDF but works for most image files.',
      noFile: 'No file selected.',
      extractTextFailed: 'Something went wrong with text extraction. Please check that you are using a correct text extraction method.'
    },
    datatype: {
      image: 'Scan image (OCR)',
      pdf: 'Read PDF',
      txt: 'Plain text',
      xml: 'Read XML'
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