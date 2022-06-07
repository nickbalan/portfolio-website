JotForm.newDefaultTheme = true;
JotForm.extendsNewTheme = false;
JotForm.newPaymentUIForNewCreatedForms = false;
JotForm.newPaymentUI = true;

JotForm.init(function () {
  /*INIT-START*/
  setTimeout(function () {
    $("input_10").hint("Email");
  }, 20);
  if (window.JotForm && JotForm.accessible)
    $("input_14").setAttribute("tabindex", 0);
  JotForm.setCustomHint("input_14", "Type here...");
  JotForm.alterTexts({
    ageVerificationError:
      "You must be older than {minAge} years old to submit this form.",
    alphabetic: "This field can only contain letters",
    alphanumeric: "This field can only contain letters and numbers.",
    appointmentSelected: "You’ve selected {time} on {date}",
    ccDonationMinLimitError: "Minimum amount is {minAmount} {currency}",
    ccInvalidCVC: "CVC number is invalid.",
    ccInvalidExpireDate: "Expire date is invalid.",
    ccInvalidExpireMonth: "Expiration month is invalid.",
    ccInvalidExpireYear: "Expiration year is invalid.",
    ccInvalidNumber: "Credit Card Number is invalid.",
    ccMissingDetails: "Please fill up the credit card details.",
    ccMissingDonation: "Please enter numeric values for donation amount.",
    ccMissingProduct: "Please select at least one product.",
    characterLimitError: "Too many Characters.  The limit is",
    characterMinLimitError: "Too few characters. The minimum is",
    confirmClearForm: "Are you sure you want to clear the form",
    confirmEmail: "E-mail does not match",
    currency: "This field can only contain currency values.",
    cyrillic: "This field can only contain cyrillic characters",
    dateInvalid: "This date is not valid. The date format is {format}",
    dateInvalidSeparate:
      "This date is not valid. Enter a valid {element}.",
    dateLimited: "This date is unavailable.",
    disallowDecimals: "Please enter a whole number.",
    doneButton: "Done",
    doneMessage: "Well done! All errors are fixed.",
    dragAndDropFilesHere_infoMessage: "Drag and drop files here",
    email: "Enter a valid e-mail address",
    fillMask: "Field value must fill mask.",
    freeEmailError: "Free email accounts are not allowed",
    generalError:
      "There are errors on the form. Please fix them before continuing.",
    generalPageError:
      "There are errors on this page. Please fix them before continuing.",
    geoNotAvailableDesc:
      "Location provider not available. Please enter the address manually.",
    geoNotAvailableTitle: "Position Unavailable",
    geoPermissionDesc: "Check your browser's privacy settings.",
    geoPermissionTitle: "Permission Denied",
    geoTimeoutDesc:
      "Please check your internet connection and try again.",
    geoTimeoutTitle: "Timeout",
    gradingScoreError: "Score total should only be less than or equal to",
    incompleteFields:
      "There are incomplete required fields. Please complete them.",
    inputCarretErrorA: "Input should not be less than the minimum value:",
    inputCarretErrorB:
      "Input should not be greater than the maximum value:",
    justSoldOut: "Just Sold Out",
    lessThan: "Your score should be less than or equal to",
    maxDigitsError: "The maximum digits allowed is",
    maxFileSize_infoMessage: "Max. file size",
    maxSelectionsError: "The maximum number of selections allowed is ",
    minCharactersError:
      "The number of characters should not be less than the minimum value:",
    minSelectionsError: "The minimum required number of selections is ",
    multipleError:
      "There are {count} errors in this page. Please correct them before moving on.",
    multipleFileUploads_emptyError:
      "{file} is empty, please select files again without it.",
    multipleFileUploads_fileLimitError:
      "Only {fileLimit} file uploads allowed.",
    multipleFileUploads_minSizeError:
      "{file} is too small, minimum file size is {minSizeLimit}.",
    multipleFileUploads_onLeave:
      "The files are being uploaded, if you leave now the upload will be cancelled.",
    multipleFileUploads_sizeError:
      "{file} is too large, maximum file size is {sizeLimit}.",
    multipleFileUploads_typeError:
      "{file} has invalid extension. Only {extensions} are allowed.",
    multipleFileUploads_uploadFailed:
      "File upload failed, please remove it and upload the file again.",
    nextButtonText: "Next",
    noSlotsAvailable: "No slots available",
    notEnoughStock: "Not enough stock for the current selection",
    notEnoughStock_remainedItems:
      "Not enough stock for the current selection ({count} items left)",
    noUploadExtensions:
      "File has no extension file type (e.g. .txt, .png, .jpeg)",
    numeric: "This field can only contain numeric values",
    oneError:
      "There is {count} error in this page. Please correct it before moving on.",
    pastDatesDisallowed: "Date must not be in the past.",
    pleaseWait: "Please wait...",
    prevButtonText: "Previous",
    progressMiddleText: "of",
    required: "This field is required.",
    requiredLegend:
      "All fields marked with * are required and must be filled.",
    requireEveryCell: "Every cell is required.",
    requireEveryRow: "Every row is required.",
    requireOne: "At least one field required.",
    restrictedDomain: "This domain is not allowed",
    reviewBackText: "Back to Form",
    reviewSubmitText: "Review and Submit",
    seeAllText: "See All",
    seeErrorsButton: "See Errors",
    selectionSoldOut: "Selection Sold Out",
    slotUnavailable:
      "{time} on {date} has been selected is unavailable. Please select another slot.",
    soldOut: "Sold Out",
    submissionLimit:
      "Sorry! Only one entry is allowed. &lt;br&gt; Multiple submissions are disabled for this form.",
    submitButtonText: "Submit",
    subProductItemsLeft: "({count} items left)",
    uploadExtensions: "You can only upload following files:",
    uploadFilesize: "File size cannot be bigger than:",
    uploadFilesizemin: "File size cannot be smaller than:",
    url: "This field can only contain a valid URL",
    validateEmail: "You need to validate this e-mail",
    wordLimitError: "Too many words. The limit is",
    wordMinLimitError: "Too few words.  The minimum is",
  });
  FormTranslation.init({
    detectUserLanguage: "1",
    firstPageOnly: "0",
    options: "English (US)",
    originalLanguage: "en",
    primaryLanguage: "en",
    saveUserLanguage: "1",
    showStatus: "flag-with-nation",
    theme: "light-theme",
    version: "2",
  });
  /*INIT-END*/
});

JotForm.prepareCalculationsOnTheFly([
  null,
  null,
  null,
  null,
  null,
  {
    name: "contactMe",
    qid: "5",
    text: "Contact Me",
    type: "control_head",
  },
  null,
  null,
  { name: "submit8", qid: "8", text: "Send", type: "control_button" },
  {
    description: "",
    name: "name",
    qid: "9",
    text: "Name",
    type: "control_fullname",
  },
  {
    description: "",
    name: "email",
    qid: "10",
    subLabel: "example@example.com",
    text: "Email",
    type: "control_email",
  },
  null,
  null,
  null,
  {
    description: "",
    name: "yourMessage",
    qid: "14",
    subLabel: "",
    text: "Your Message",
    type: "control_textarea",
  },
]);
setTimeout(function () {
  JotForm.paymentExtrasOnTheFly([
    null,
    null,
    null,
    null,
    null,
    {
      name: "contactMe",
      qid: "5",
      text: "Contact Me",
      type: "control_head",
    },
    null,
    null,
    { name: "submit8", qid: "8", text: "Send", type: "control_button" },
    {
      description: "",
      name: "name",
      qid: "9",
      text: "Name",
      type: "control_fullname",
    },
    {
      description: "",
      name: "email",
      qid: "10",
      subLabel: "example@example.com",
      text: "Email",
      type: "control_email",
    },
    null,
    null,
    null,
    {
      description: "",
      name: "yourMessage",
      qid: "14",
      subLabel: "",
      text: "Your Message",
      type: "control_textarea",
    },
  ]);
}, 20);

var all_spc = document.querySelectorAll(
  "form[id='220745195995368'] .si" + "mple" + "_spc"
);
for (var i = 0; i < all_spc.length; i++) {
  all_spc[i].value = "220745195995368-220745195995368";
};

JotForm.forwardToEu = true;