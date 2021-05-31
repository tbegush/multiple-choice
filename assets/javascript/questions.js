var allQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
    correctAnswer: "Brendan Eich",
  },

  {
    question: "Which one of these is a JavaScript package manager?",
    answers: ["Node.js", "TypeScript", "npm"],
    correctAnswer: "npm",
  },

  {
    question: "Which tool can you use to ensure code quality?",
    answers: ["Angular", "jQuery", "RequireJS", "ESLint"],
    correctAnswer: "ESLint",
  },

  {
    question: "Why so JavaScript and Java have similar name?",
    answers: [
      "JavaScript is a stripped-down version of Java",
      "JavaScript's syntax is loosely based on Java's",
      "They both originated on the island of Java",
      "None of the above",
    ],
    correctAnswer: "JavaScript's syntax is loosely based on Java's",
  },

  {
    question:
      "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    answers: [
      "The User's machine running a Web browser",
      "The Web server",
      "A central machine deep within Netscape's corporate offices",
      "None of the above",
    ],
    correctAnswer: "The User's machine running a Web browser",
  },

  {
    question: "______ JavaScript is also called client-side JavaScript.",
    answers: ["Microsoft", "Navigator", "LiveWire", "Native"],
    correctAnswer: "Navigator",
  },

  {
    question: "__________ JavaScript is also called server-side JavaScript.",
    answers: ["Microsoft", "Navigator", "LiveWire", "Native"],
    correctAnswer: "LiveWire",
  },

  {
    question: "What are variables used for in JavaScript Programs?",
    answers: [
      "Storing numbers, dates, or other values",
      "Varying randomly",
      "Causing high-school algebra flashbacks",
      "None of the above",
    ],
    correctAnswer: "Storing numbers, dates, or other values",
  },

  {
    question:
      "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
    answers: ["Client-side", "Server-side", "Local", "Native"],
    correctAnswer: "Client-side",
  },

  {
    question: "What should appear at the very end of your JavaScript?",
    answers: [
      "The </script>",
      "The <script>",
      "The END statement",
      "None of the above",
      "The <script LANGUAGE='JavaScript'>tag",
    ],
    correctAnswer: "The </script>",
  },

  {
    question:
      "Which of the following can't be done with client-side JavaScript?",
    answers: [
      "Validating a form",
      "Sending a form's contents by email",
      "Storing the form's contents to a database file on the server",
      "None of the above",
    ],
    correctAnswer:
      "Storing the form's contents to a database file on the server",
  },

  {
    question:
      "Which of the following are capabilities of functions in JavaScript?",
    answers: [
      "Return a value",
      "Accept parameters and Return a value",
      "Accept parameters",
      "None of the above",
    ],
    correctAnswer: "Accept parameters",
  },

  {
    question: "Which of the following is NOT a valid JavaScript variable name?",
    answers: [
      "2names",
      "_first_and_last_names",
      "FirstAndLast",
      " None of the above",
    ],
    correctAnswer: "2names",
  },

  {
    question:
      "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    answers: ["<SCRIPT>", "<BODY>", "<HEAD>", "<TITLE>"],
    correctAnswer: "<SCRIPT>",
  },

  {
    question: "How does JavaScript store dates in a date object?",
    answers: [
      "The number of milliseconds since January 1st, 1970",
      "The number of days since January 1st, 1900",
      "The number of seconds since Netscape's public stock offering.",
      "None of the above",
    ],
    correctAnswer: "The number of milliseconds since January 1st, 1970",
  },

  {
    question:
      "Which of the following attribute can hold the JavaScript version?",
    answers: ["LANGUAGE", "SCRIPT", "VERSION", " None of the above"],
    correctAnswer: "LANGUAGE",
  },

  {
    question: "What is the correct JavaScript syntax to write 'Hello World'?",
    answers: [
      "System.out.println('Hello World')",
      'println ("Hello World")',
      'document.write("Hello World")',
      'response.write("Hello World")',
    ],
    correctAnswer: 'document.write("Hello World")',
  },

  {
    question:
      "Which of the following way can be used to indicate the LANGUAGE attribute?",
    answers: [
      '<LANGUAGE="JavaScriptVersion">',
      '<SCRIPT LANGUAGE="JavaScriptVersion">',
      '<SCRIPT LANGUAGE="JavaScriptVersion">    JavaScript statements…</SCRIPT>',
      '<SCRIPT LANGUAGE="JavaScriptVersion"!>    JavaScript statements…</SCRIPT>',
    ],
    correctAnswer:
      '<SCRIPT LANGUAGE="JavaScriptVersion">    JavaScript statements…</SCRIPT>',
  },

  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<js>", "<scripting>", "<script>", "<javascript>"],
    correctAnswer: "<script>",
  },
  {
    question:
      'What is the correct syntax for referring to an external script called " abjs"?',
    answers: [
      '<script href=" abjs">',
      '<script name=" abjs">',
      '<script src=" abjs">',
      "None of the above",
    ],
    correctAnswer: '<script src=" abjs">',
  },

  {
    question: "Which types of image maps can be used with JavaScript?",
    answers: [
      "Server-side image maps",
      "Client-side image maps",
      "Server-side image maps and Client-side image maps",
      "None of the above",
    ],
    correctAnswer: "Client-side image maps",
  },

  {
    question:
      "Which of the following navigator object properties is the same in both   Netscape and IE?",
    answers: [
      "navigator.appCodeName",
      "navigator.appName",
      "navigator.appVersion",
      "None of the above",
    ],
    correctAnswer: "navigator.appCodeName",
  },

  {
    question: "Which is the correct way to write a JavaScript array?",
    answers: [
      'var txt = new Array(1:"tim",2:"kim",3:"jim")',
      'var txt = new Array:1=("tim")2=("kim")3=("jim")',
      'var txt = new Array["tim","kim","jim"]',
      'var txt = new Array="tim","kim","jim"',
    ],
    correctAnswer: 'var txt = new Array["tim","kim","jim"]',
  },

  {
    question: "What does the <noscript> tag do?",
    answers: [
      "Enclose text to be displayed by non-JavaScript browsers.",
      "Prevents scripts on the page from executing.",
      "Describes certain low-budget movies.",
      "None of the above",
    ],
    correctAnswer: "Enclose text to be displayed by non-JavaScript browsers.",
  },

  {
    question:
      "If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?",
    answers: [
      '"New Text"?',
      'para1.value="New Text";',
      'para1.firstChilnodeValue= "New Text";',
      'para1.nodeValue="New Text";',
    ],
    correctAnswer: 'para1.value="New Text";',
  },

  {
    question: "JavaScript entities start with _______ and end with _________.",
    answers: [
      "Semicolon, colon",
      "Semicolon, Ampersand",
      "Ampersand, colon",
      "Ampersand, semicolon",
    ],
    correctAnswer: "Ampersand, semicolon",
  },

  {
    question: " Which of the following best describes JavaScript?",
    answers: [
      "a low-level programming language.",
      "a scripting language precompiled in the browser.",
      "a compiled scripting language.",
      "an object-oriented scripting language.",
    ],
    correctAnswer: "an object-oriented scripting language.",
  },

  {
    question: "Choose the server-side JavaScript object?",
    answers: ["FileUpLoad", "Function", "File", "Date"],
    correctAnswer: "File",
  },

  {
    question: "Choose the client-side JavaScript object?",
    answers: ["Database", "Cursor", "Client", "FileUpLoad"],
    correctAnswer: "FileUpLoad",
  },

  {
    question: "Which of the following is not considered a JavaScript operator?",
    answers: ["new", "this", "delete", "typeof"],
    correctAnswer: "this",
  },

  {
    question:
      "______method evaluates a string of JavaScript code in the context of the specified object.",
    answers: ["Eval", "ParseInt", "ParseFloat", "Efloat"],
    correctAnswer: "Eval",
  },

  {
    question:
      "Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?",
    answers: ["onfocus", "onblur", "onclick", "ondblclick"],
    correctAnswer: "onblur",
  },

  {
    question: "The syntax of Eval is ________________",
    answers: [
      "[objectName.]eval(numeri",
      "[objectName.]eval(string)",
      "[EvalName.]eval(string)",
      "[EvalName.]eval(numeri",
    ],
    correctAnswer: "[objectName.]eval(string)",
  },

  {
    question: "JavaScript is interpreted by _________",
    answers: ["Client", "Server", "Object", "None of the above"],
    correctAnswer: "Client",
  },

  {
    question:
      "Using _______ statement is how you test for a specific condition.",
    answers: ["Select", "If", "Switch", "For"],
    correctAnswer: "If",
  },

  {
    question: "Which of the following is the structure of an if statement?",
    answers: [
      "if (conditional expression is true) thenexecute this codeend if",
      "if (conditional expression is true)execute this codeend if",
      "if (conditional expression is true)   {then execute this code>->}",
      "if (conditional expression is true) then {execute this code}",
    ],
    correctAnswer:
      "if (conditional expression is true)   {then execute this code>->}",
  },

  {
    question: "How to create a Date object in JavaScript?",
    answers: [
      "dateObjectName = new Date([parameters])",
      "dateObjectName.new Date([parameters])",
      "dateObjectName := new Date([parameters])",
      "dateObjectName Date([parameters])",
    ],
    correctAnswer: "dateObjectName = new Date([parameters])",
  },

  {
    question:
      "The _______ method of an Array object adds and/or removes elements from an array.",
    answers: ["Reverse", "Shift", "Slice", "Splice"],
    correctAnswer: "Splice",
  },

  {
    question:
      "To set up the window to capture all Click events, we use which of the following statement?",
    answers: [
      "window.captureEvents(Event.CLICK);",
      "window.handleEvents (Event.CLICK);",
      "window.routeEvents(Event.CLICK );",
      "window.raiseEvents(Event.CLICK );",
    ],
    correctAnswer: "window.captureEvents(Event.CLICK);",
  },

  {
    question: "Which tag(s) can handle mouse events in Netscape?",
    answers: ["<IMG>", "<A>", "<BR>", "None of the above"],
    correctAnswer: "<A>",
  },

  {
    question: "____________ is the tainted property of a window object.",
    answers: ["Pathname", "Protocol", "Defaultstatus", "Host"],
    correctAnswer: "Defaultstatus",
  },

  {
    question:
      "To enable data tainting, the end user sets the _________ environment variable.",
    answers: [
      "ENABLE_TAINT",
      "MS_ENABLE_TAINT",
      "NS_ENABLE_TAINT",
      "ENABLE_TAINT_NS",
    ],
    correctAnswer: "NS_ENABLE_TAINT",
  },

  {
    question:
      "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.",
    answers: ["a wrapper", "a link", "a cursor", "a form"],
    correctAnswer: "a wrapper",
  },

  {
    question:
      "When a JavaScript object is sent to Java, the runtime engine creates a Java wrapper of type ___________",
    answers: ["ScriptObject", "JSObject", "JavaObject", "Jobject"],
    correctAnswer: "JSObject",
  },

  {
    question:
      "_______ class provides an interface for invoking JavaScript methods and examining JavaScript properties.",
    answers: ["ScriptObject", "JSObject", "JavaObject", "Jobject"],
    correctAnswer: "JSObject",
  },

  {
    question:
      "_________ is a wrapped Java array, accessed from within JavaScript code.",
    answers: ["JavaArray", "JavaClass", "JavaObject", "JavaPackage"],
    correctAnswer: "JavaArray",
  },

  {
    question:
      "A ________ object is a reference to one of the classes in a Java package, such as netscape.javascript .",
    answers: ["JavaArray", "JavaClass", "JavaObject", "JavaPackage"],
    correctAnswer: "JavaClass",
  },
  {
    question:
      "The JavaScript exception is available to the Java code as an instance of __________",
    answers: [
      "netscape.javascript.JSObject",
      "netscape.javascript.JSException",
      "netscape.plugin.JSException",
      "None of the above",
    ],
    correctAnswer: "netscape.javascript.JSException",
  },

  {
    question:
      "To automatically open the console when a JavaScript error occurs which of the following is added to prefs.js?",
    answers: [
      'user_pref(" javascript.console.open_on_error", false);',
      'user_pref("javascript.console.open_error ", true);',
      'user_pref("javascript.console.open_error ", false);',
      'user_pref("javascript.console.open_on_error", true);',
    ],
    correctAnswer: 'user_pref("javascript.console.open_on_error", true);',
  },

  {
    question:
      "To open a dialog box each time an error occurs, which of the following is added to prefs.js?",
    answers: [
      'user_pref("javascript.classierror_alerts", true);',
      'user_pref("javascript.classierror_alerts ", false);',
      'user_pref("javascript.console.open_on_error ", true);',
      'user_pref("javascript.console.open_on_error ", false);',
    ],
    correctAnswer: 'user_pref("javascript.classierror_alerts", true);',
  },

  {
    question:
      "The syntax of a blur method in a button object is ______________",
    answers: ["Blur()", "Blur(contrast)", "Blur(value)", "Blur(depth)"],
    correctAnswer: "Blur()",
  },

  {
    question:
      "The syntax of capture events method for document object is ______________",
    answers: [
      "captureEvents()",
      "captureEvents(args eventType)",
      "captureEvents(eventType)",
      "captureEvents(eventVal)",
    ],
    correctAnswer: "captureEvents(eventType)",
  },

  {
    question:
      " The syntax of close method for document object is ______________",
    answers: ["Close(do", "Close(object)", "Close(val)", "Close()"],
    correctAnswer: "Close()",
  },

  {
    question: "Is it possible to nest functions in JavaScript?",
    answers: ["True", "False"],
    correctAnswer: "True",
  },

  {
    question: "Scripting language are _________.",
    answers: [
      "High Level Programming language",
      "Assembly Level programming language",
      "Machine level programming language",
    ],
    correctAnswer: "High Level Programming language",
  },

  {
    question: "Which best explains getSelection()?",
    answers: [
      "Returns the VALUE of a selected OPTION.",
      "Returns document.URL of the window in focus.",
      "Returns the value of cursor-selected text",
      "Returns the VALUE of a checked radio input.",
    ],
    correctAnswer: "Returns the value of cursor-selected text",
  },

  {
    question: "Choose the client-side JavaScript object:",
    answers: ["Database", "Cursor", "Client", "FileUpLoad"],
    correctAnswer: "FileUpLoad",
  },

  {
    question: 'What is mean by "this" keyword in javascript?',
    answers: [
      "It refers current object",
      "It referes previous object",
      "It is variable which contains value",
      "None of the above",
    ],
    correctAnswer: "It refers current object",
  },

  {
    question:
      "In JavaScript, Window.prompt() method return true or false value ?",
    answers: ["False", "True"],
    correctAnswer: "False",
  },

  {
    question:
      "What is the HTML tag under which one can write the JavaScript code?",
    answers: ["<javascript>", "<scripted>", "<script>", "<js>"],

    correctAnswer: "<script>",
  },

  {
    question:
      "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
    answers: [
      "alertbox(“GeeksforGeeks”);",
      "msg(“GeeksforGeeks”);",
      "msgbox(“GeeksforGeeks”);",
      "alert(“GeeksforGeeks”);",
    ],
    correctAnswer: "alert(“GeeksforGeeks”);",
  },

  {
    question:
      "What is the correct syntax for referring to an external script called “geek.js”?",
    answers: [
      "<script src=”geek.js”>",
      "<script href=”geek.js”>",
      "<script ref=”geek.js”>",
      "<script name=”geek.js”>",
    ],
    correctAnswer: "<script src=”geek.js”>",
  },
  {
    question:
      "The external JavaScript file must contain <script> tag. True or False?",
    answers: ["True", "False"],
    correctAnswer: "False",
  },

  {
    question: "Which of the following is not a reserved word in JavaScript?",
    answers: ["interface", "throws", "program", "short"],
    correctAnswer: "program",
  },

  {
    question:
      "In JavaScript, we do not have datatypes like integer and float. What is the function that can be used to check if the number is an integer or not?",
    answers: [
      "Integer(value)",
      "ifInteger(value)",
      "isInteger(value)",
      "ifinteger(value)",
    ],
    correctAnswer: "isInteger(value)",
  },

  {
    question: "Which of the following is an advantage of using JavaScript?",
    answers: [
      "Increased interactivity.",
      "Less server interaction.",
      "Immediate feedback from the users.",
      "All of the above.",
    ],
    correctAnswer: "All of the above.",
  },

  {
    question:
      "Which function of an Array object calls a function for each element in the array?",
    answers: ["forEach()", "every()", "forEvery()", "each()"],
    correctAnswer: "forEach()",
  },

  {
    question: "JavaScript is a ________ Side Scripting Language.",
    answers: ["Server", "ISP", "Browser", "None of the above"],
    correctAnswer: "Browser",
  },

  {
    question: "JavaScript is ________ language.",
    answers: ["a compiled", "an interpreted"],
    correctAnswer: "an interpreted",
  },

  {
    question: "Which was the first browser to support JavaScript?",
    answers: ["Mozilla Firefox", "Netscape", "Google Chrome", "IE"],

    correctAnswer: "Netscape",
  },

  {
    question:
      "What is the syntax for creating a function in JavaScript named as Geekfunc? ",
    answers: [
      "function = Geekfunc()",
      "function Geekfunc()",
      "function := Geekfunc()",
      "function : Geekfunc()",
    ],
    correctAnswer: "function Geekfunc()",
  },

  {
    question: "How is the function called in JavaScript?",
    answers: [
      "call Geekfunc();",
      "call function GeekFunc();",
      "Geekfunc();",
      "function Geekfunc();",
    ],
    correctAnswer: "Geekfunc();",
  },

  {
    question: "What is the correct syntax for adding comments in JavaScript?",
    answers: [
      "<!–This is a comment–>",
      "//This is a comment",
      "–This is a comment",
      "**This is a comment**",
    ],
    correctAnswer: "//This is a comment",
  },

  {
    question: " What is the JavaScript syntax for printing values in Console?",
    answers: [
      "print(5)",
      "console.log(5);",
      "console.print(5);",
      "print.console(5);",
    ],
    correctAnswer: "console.log(5);",
  },

  {
    question: "How to initialize an array in JavaScript?",
    answers: [
      "var Geeks= “Geek1”, “Geek2”, “Geek3”",
      "var Geeks=(1:Geek1, 2:Geek2, 3:Geek3)",
      "var Geeks=(1=Geek1, 2=Geek2, 3=Geek3)",
      "var Geeks=[“Geek1”, “Geek2”, “Geek3”]",
    ],
    correctAnswer: "var Geeks=[“Geek1”, “Geek2”, “Geek3”]",
  },

  {
    question:
      "What will be the command to print the number of characters in the string “GeeksforGeeks”?",
    answers: [
      "document.write(“GeeksforGeeks”.len);",
      "document.write(sizeof(“GeeksforGeeks”));",
      "document.write(“GeeksforGeeks”.length);",
      "document.write(lenof(“GeeksforGeeks”));",
    ],
    correctAnswer: "document.write(“GeeksforGeeks”.length);",
  },

  {
    question:
      "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?",
    answers: ["strip()", "trim()", "stripped() ", "trimmed()"],
    correctAnswer: "trim()",
  },
];
