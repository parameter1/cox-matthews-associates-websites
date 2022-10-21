// Compiled using marko@4.20.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/@cox-matthews-associates/diverseeducation.com$2.15.3/server/components/nodes/arthur-ashe-profiles.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    module_baseCmsObjectPath_module = require("@parameter1/base-cms-object-path"),
    baseCmsObjectPath_module = module_baseCmsObjectPath_module.default || module_baseCmsObjectPath_module,
    get = module_baseCmsObjectPath_module.get,
    getAsObject = module_baseCmsObjectPath_module.getAsObject,
    getAsArray = module_baseCmsObjectPath_module.getAsArray,
    module_defaultValue = require("@parameter1/base-cms-marko-core/utils/default-value"),
    defaultValue = module_defaultValue.default || module_defaultValue,
    marko_assign = require("marko/src/runtime/helpers/assign"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_web_content_short_name_template = require("@parameter1/base-cms-marko-web/components/element/content/short-name.marko"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    marko_web_content_short_name_tag = marko_loadTag(marko_web_content_short_name_template),
    marko_web_content_teaser_template = require("@parameter1/base-cms-marko-web/components/element/content/teaser.marko"),
    marko_web_content_teaser_tag = marko_loadTag(marko_web_content_teaser_template),
    marko_web_content_body_template = require("@parameter1/base-cms-marko-web/components/element/content/body.marko"),
    marko_web_content_body_tag = marko_loadTag(marko_web_content_body_template),
    marko_str = require("marko/src/runtime/helpers/to-string"),
    marko_web_node_template = require("@parameter1/base-cms-marko-web/components/node/index.marko"),
    marko_web_node_tag = marko_loadTag(marko_web_node_template);

function render(input, out, __component, component, state) {
  var data = input;

  const content = getAsObject(input, "node");

  const profile = getAsArray(content, "profiles")[0];

  const profileName = get(profile, "name");

  const profileBody = get(profile, "body");

  const primaryImage = getAsObject(content, "primaryImage");

  const withTeaser = defaultValue(input.withTeaser, true);

  const withBody = defaultValue(input.withBody, false);

  const imageLink = primaryImage.src ? { href: content.siteContext.path } : false;

  marko_web_node_tag({
      type: "arthur-ashe-profile",
      imagePosition: "top",
      card: true,
      flush: false,
      fullHeight: false,
      image: marko_assign({
          width: 150,
          align: "top",
          usePlaceholder: false,
          fluid: false
        }, input.image, {
          ar: "1:1",
          src: primaryImage.src,
          alt: primaryImage.alt,
          isLogo: true,
          link: imageLink
        }),
      body: {
          title: marko_assign({
              tag: "h5"
            }, input.title, {
              renderBody: function(out) {
                if (profileName) {
                  out.w(marko_escapeXml(profileName));
                } else {
                  marko_web_content_short_name_tag({
                      tag: null,
                      obj: content
                    }, out, __component, "4");
                }
              }
            }),
          text: [
              {
                  modifiers: ["teaser", ...getAsArray(input, "teaser.modifiers").map(mod => `teaser-${mod}`)],
                  show: Boolean((withTeaser && content.teaser) && (!profileBody)),
                  renderBody: function(out) {
                    marko_web_content_teaser_tag({
                        tag: null,
                        obj: content
                      }, out, __component, "6");
                  }
                },
              {
                  modifiers: [
                      "body"
                    ],
                  show: Boolean((withBody && content.body) && (!profileBody)),
                  renderBody: function(out) {
                    marko_web_content_body_tag({
                        tag: null,
                        obj: content
                      }, out, __component, "8");
                  }
                },
              {
                  modifiers: [
                      "profile"
                    ],
                  show: Boolean(profileBody),
                  renderBody: function(out) {
                    out.w(marko_str(profileBody));
                  }
                }
            ]
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/@cox-matthews-associates/diverseeducation.com$2.15.3/server/components/nodes/arthur-ashe-profiles.marko",
    tags: [
      "@parameter1/base-cms-marko-web/components/element/content/short-name.marko",
      "@parameter1/base-cms-marko-web/components/element/content/teaser.marko",
      "@parameter1/base-cms-marko-web/components/element/content/body.marko",
      "@parameter1/base-cms-marko-web/components/node/index.marko"
    ]
  };
