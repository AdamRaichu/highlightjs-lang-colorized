/*
  Language: Minecraft Lang (colorized, Java Edition)
  Description: The language Minecraft uses to localize strings
  Author: AdamRaichu
*/

module.exports = function (hljs) {
  return {
    name: "lang-colorized-java",
    disableAutodetect: true,
    case_insensitive: false,
    // §[0-9a-gk-or]{1}
    contains: [
      {
        className: "attr",
        begin: "^[A-Za-z0-9]",
        end: "[A-Za-z0-9](?==)|(?=#)",
        contains: [
          {
            begin: "[A-Za-z0-9\\-_]+:[A-Za-z0-9\\-_]+",
            end: "(?=\\.)",
          },
        ],
      },
      {
        className: "lang-java",
        begin: "(?<=\\=)[A-Za-z]",
        end: "(?!.)|(?=#)",
        contains: [
          {
            className: "lang-format-0",
            begin: "§0",
            end: "(?=§[0-9a-fr])|(?!.)",
          },
        ],
      },
      hljs.COMMENT("#", "$"),
    ],
  };
};
