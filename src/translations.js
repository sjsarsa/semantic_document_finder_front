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
        title: 'Options for query results (requires updating result set)'
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
      compareDocuments: 'compare-documents'
    },
    navBar: {
      documentSearch: 'Document search',
      title: 'Semantic Finlex case law document search'
    },
    similarity: {
      rate: 'Rate similarity',
      alreadyRated: 'You have already rated this document pair',
      ratingInfo: {
        title: 'Similarity rating info',
        info: 'Just pick one...'
      },
      '5': '5 - Almost identical cases',
      '4': '4 - Similar topics and content',
      '3': '3 - Multiple shared topics',
      '2': '2 - At least one common topic',
      '1': '1 - Cases contain some common elements',
      '0': '0 - Completely different cases'
    },
    page: {
      documentSearch: {
        title: 'Document search using various AI methods'
      },
      login: {
        title: 'Log in by entering your username and password',
        info: 'Logging in is required to rate document similarities and nothing else.\n' +
        'The rated similarities will be used for evaluating the automatic document search methods used in this application.\n',
        signin: 'Don\'t have an account yet?'
      },
      goldStandard: {
        title: 'Gold standard set for evaluation of automatic semantic similarity measures',
        documents: 'The documents included in the gold standard set'
      },
    },
    info: 'Info',
    home: 'Home',
    hide: 'Hide query',
    show: 'Show',
    close: 'Close',
    test: 'Testing',
    logout: 'Log out',
    login: 'Log in',
    signin: 'Sign in here',
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