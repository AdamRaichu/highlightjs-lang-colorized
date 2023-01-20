/*
  Language: Minecraft Lang (colorized, Java Edition)
  Description: The language Minecraft uses to localize strings
  Author: AdamRaichu
*/

module.exports = function (hljs) {
  var selector_node = {
    className: "lang-selector",
    begin: "§(?=[0-9a-gk-or]{1})",
    end: "(?<=§)[0-9a-gk-or]{1}",
  };
  var format_selectors = [
    // selector_node,
    {
      className: "lang-format-k",
      begin: "§k",
      end: "(?=§[0-9a-fr])|(?!.)",
      contains: [selector_node],
    },
    {
      className: "lang-format-l",
      begin: "§l",
      end: "(?=§[0-9a-fr])|(?!.)",
      contains: [selector_node],
    },
    {
      className: "lang-format-m",
      begin: "§m",
      end: "(?=§[0-9a-fr])|(?!.)",
      contains: [selector_node],
    },
    {
      className: "lang-format-n",
      begin: "§n",
      end: "(?=§[0-9a-fr])|(?!.)",
      contains: [selector_node],
    },
    {
      className: "lang-format-o",
      begin: "§o",
      end: "(?=§[0-9a-fr])|(?!.)",
      contains: [selector_node],
    },
  ];
  return {
    name: "lang-colorized-java",
    disableAutodetect: true,
    case_insensitive: false,
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
        begin: "(?<==).",
        end: "(?!.)|(?=#)",
        contains: [
          {
            className: "lang-format-0",
            begin: "§0",
            end: "(?=§[0-9a-fr])|(?!.)",
            contains: format_selectors,
          },
          {
            className: "lang-format-1",
            begin: "§1",
            end: "(?=§[0-9a-fr])|(?!.)",
            contains: format_selectors,
          },
          {
            className: "lang-format-2",
            begin: "§2",
            end: "(?=§[0-9a-fr])|(?!.)",
            contains: format_selectors,
          },
          {
            className: "lang-format-3",
            begin: "§3",
            end: "(?=§[0-9a-fr])|(?!.)",
            contains: format_selectors,
          },
          {
            className: "lang-format-4",
            begin: "§4",
            end: "(?=§[0-9a-fr])|(?!.)",
            contains: format_selectors,
          },
          {
            className: "lang-format-5",
            begin: "§5",
            end: "(?=§[0-9a-fr])|(?!.)",
            contains: format_selectors,
          },
          {
            className: "lang-format-6",
            begin: "§6",
            end: "(?=§[0-9a-fr])|(?!.)",
            contains: format_selectors,
          },
          {
            className: "lang-format-7",
            begin: "§7",
            end: "(?=§[0-9a-fr])|(?!.)",
            contains: format_selectors,
          },
          {
            className: "lang-format-8",
            begin: "§8",
            end: "(?=§[0-9a-fr])|(?!.)",
            contains: format_selectors,
          },
          {
            className: "lang-format-9",
            begin: "§9",
            end: "(?=§[0-9a-fr])|(?!.)",
            contains: format_selectors,
          },
          {
            className: "lang-format-a",
            begin: "§a",
            end: "(?=§[0-9a-fr])|(?!.)",
            contains: format_selectors,
          },
          {
            className: "lang-format-b",
            begin: "§b",
            end: "(?=§[0-9a-fr])|(?!.)",
            contains: format_selectors,
          },
          {
            className: "lang-format-c",
            begin: "§c",
            end: "(?=§[0-9a-fr])|(?!.)",
            contains: format_selectors,
          },
          {
            className: "lang-format-d",
            begin: "§d",
            end: "(?=§[0-9a-fr])|(?!.)",
            contains: format_selectors,
          },
          {
            className: "lang-format-e",
            begin: "§e",
            end: "(?=§[0-9a-fr])|(?!.)",
            contains: format_selectors,
          },
          {
            className: "lang-format-f",
            begin: "§f",
            end: "(?=§[0-9a-fr])|(?!.)",
            contains: format_selectors,
          },
          // Java doesn't have §g
        ],
      },
      hljs.COMMENT("#", "$"),
    ].concat(format_selectors),
  };
};
