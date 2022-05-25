// Compiled using marko@4.20.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/@cox-matthews-associates/package-global$2.13.1/components/layouts/content/company.marko",
    marko_component = require("./company.marko"),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    module_baseCmsObjectPath_module = require("@parameter1/base-cms-object-path"),
    baseCmsObjectPath_module = module_baseCmsObjectPath_module.default || module_baseCmsObjectPath_module,
    getAsArray = module_baseCmsObjectPath_module.getAsArray,
    module_baseCmsImage_module = require("@parameter1/base-cms-image"),
    baseCmsImage_module = module_baseCmsImage_module.default || module_baseCmsImage_module,
    buildImgixUrl = module_baseCmsImage_module.buildImgixUrl,
    module_imageHeight = require("@parameter1/base-cms-marko-web/components/node/utils/image-height"),
    imageHeight = module_imageHeight.default || module_imageHeight,
    theme_gam_define_display_ad_template = require("@parameter1/base-cms-marko-web-theme-monorail/components/gam/define-display-ad.marko"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    theme_gam_define_display_ad_tag = marko_loadTag(theme_gam_define_display_ad_template),
    theme_content_page_breadcrumbs_template = require("@parameter1/base-cms-marko-web-theme-monorail/components/breadcrumbs/content-page.marko"),
    theme_content_page_breadcrumbs_tag = marko_loadTag(theme_content_page_breadcrumbs_template),
    marko_web_content_name_template = require("@parameter1/base-cms-marko-web/components/element/content/name.marko"),
    marko_web_content_name_tag = marko_loadTag(marko_web_content_name_template),
    marko_web_img_template = require("@parameter1/base-cms-marko-web/components/element/img.marko"),
    marko_web_img_tag = marko_loadTag(marko_web_img_template),
    global_content_company_details_template = require("./company-details.marko"),
    global_content_company_details_tag = marko_loadTag(global_content_company_details_template),
    marko_web_block_template = require("@parameter1/base-cms-marko-web/components/element/block.marko"),
    marko_web_block_tag = marko_loadTag(marko_web_block_template),
    marko_web_content_body_template = require("@parameter1/base-cms-marko-web/components/element/content/body.marko"),
    marko_web_content_body_tag = marko_loadTag(marko_web_content_body_template),
    default_theme_page_contents_template = require("@parameter1/base-cms-marko-web-theme-default/components/page/contents.marko"),
    default_theme_page_contents_tag = marko_loadTag(default_theme_page_contents_template),
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag"),
    theme_top_stories_block_template = require("@parameter1/base-cms-marko-web-theme-monorail/components/blocks/top-stories.marko"),
    theme_top_stories_block_tag = marko_loadTag(theme_top_stories_block_template),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_loadNestedTag = require("marko/src/runtime/helpers/load-nested-tag"),
    global_content_wrapper_layout_section_nested_tag = marko_loadNestedTag("sections", 1),
    marko_assign = require("marko/src/runtime/helpers/assign"),
    marko_mergeNestedTagsHelper = require("marko/src/runtime/helpers/merge-nested-tags"),
    global_content_wrapper_layout_template = require("./wrapper.marko"),
    global_content_wrapper_layout_tag = marko_loadTag(global_content_wrapper_layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  const { id, type, pageNode, ...rest } = input;

  const sections = getAsArray(input, "sections");

  global_content_wrapper_layout_tag(marko_mergeNestedTagsHelper(marko_assign({
      id: id,
      type: type,
      pageNode: pageNode
    }, rest, {
      sections: [
          {
              modifiers: [
                  "first-sm"
                ],
              renderBody: function(out, { aliases }) {
                theme_gam_define_display_ad_tag({
                    name: "leaderboard",
                    position: "content_page",
                    aliases: aliases,
                    modifiers: [
                        "inter-block"
                      ]
                  }, out, __component, "2");
              }
            },
          {
              modifiers: [
                  "content-header"
                ],
              renderBody: function(out, { aliases, blockName, content }) {
                const { primarySection } = content;

                out.w("<div class=\"row\"><div class=\"col-lg-8\"><div class=\"content-page-header\">");

                theme_content_page_breadcrumbs_tag({
                    section: primarySection
                  }, out, __component, "7");

                marko_web_content_name_tag({
                    tag: "h1",
                    blockName: blockName,
                    obj: content
                  }, out, __component, "8");

                const { primaryImage } = content;

                const detailsBlock = "details";

                marko_web_block_tag({
                    name: detailsBlock,
                    tag: "div",
                    renderBody: function(out) {
                      if (primaryImage && primaryImage.src) {
                        const imgWidth = 320;

                        const imgHeight = imageHeight(imgWidth, "16:9");

                        const src = buildImgixUrl(primaryImage.src, {
                w: imgWidth,
                h: imgHeight,
                fit: "crop"
              });

                        const srcset = [`${buildImgixUrl(src, { dpr: 2 })} 2x`];

                        marko_web_img_tag({
                            lazyload: true,
                            src: src,
                            srcset: srcset,
                            alt: primaryImage.alt,
                            class: detailsBlock + "__image"
                          }, out, __component, "10");
                      }

                      global_content_company_details_tag({
                          showEmail: true,
                          tag: "div",
                          obj: content
                        }, out, __component, "11");
                    }
                  }, out, __component, "9");

                out.w("</div><div class=\"content-page-body\">");

                default_theme_page_contents_tag({
                    tag: "div",
                    attrs: {
                        "data-gallery-id": id
                      },
                    renderBody: function(out, { blockName }) {
                      const bodyId = `content-body-${content.id}`;

                      marko_web_content_body_tag({
                          blockName: blockName,
                          obj: content,
                          attrs: {
                              id: bodyId
                            }
                        }, out, __component, "14");
                    }
                  }, out, __component, "13");

                out.w("</div>");

                marko_dynamicTag(out, input.afterBody, function() {
                  return {
                      aliases: aliases,
                      "block-name": blockName,
                      content: content
                    };
                }, null, null, null, __component, "15");

                out.w("</div><div class=\"col-lg-4 pt-block\">");

                if (input.rightRail) {
                  marko_dynamicTag(out, input.rightRail, function() {
                    return {
                        aliases: aliases,
                        "block-name": blockName,
                        content: content
                      };
                  }, null, null, null, __component, "17");
                } else {
                  theme_gam_define_display_ad_tag({
                      name: "rotation-1",
                      position: "content_page",
                      aliases: aliases,
                      modifiers: [
                          "max-width-300",
                          "center",
                          "margin-auto-x",
                          "rail"
                        ],
                      class: "mb-block"
                    }, out, __component, "18");
                }

                out.w("</div></div>");
              }
            },
          {
              renderBody: function(out, { aliases }) {
                theme_gam_define_display_ad_tag({
                    name: "rotation",
                    position: "content_page",
                    aliases: aliases,
                    modifiers: [
                        "inter-block"
                      ]
                  }, out, __component, "20");
              }
            },
          {
              renderBody: function(out) {
                theme_top_stories_block_tag({}, out, __component, "22");
              }
            }
        ],
      renderBody: function(out, $nestedTagglobal_content_wrapper_layout$0) {
        var $for$0 = 0;

        marko_forOf(sections, function(s) {
          var $keyScope$0 = "[" + (($for$0++) + "]");

          global_content_wrapper_layout_section_nested_tag({
              modifiers: s.modifiers,
              renderBody: function(out, { blockName, content, aliases }) {
                marko_dynamicTag(out, s.renderBody, function() {
                  return {
                      "block-name": blockName,
                      content: content,
                      aliases: aliases
                    };
                }, null, null, null, __component, "24" + $keyScope$0);
              }
            }, $nestedTagglobal_content_wrapper_layout$0);
        });
      }
    })), out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/@cox-matthews-associates/package-global$2.13.1/components/layouts/content/company.marko",
    component: "./company.marko",
    tags: [
      "@parameter1/base-cms-marko-web-theme-monorail/components/gam/define-display-ad.marko",
      "@parameter1/base-cms-marko-web-theme-monorail/components/breadcrumbs/content-page.marko",
      "@parameter1/base-cms-marko-web/components/element/content/name.marko",
      "@parameter1/base-cms-marko-web/components/element/img.marko",
      "./company-details.marko",
      "@parameter1/base-cms-marko-web/components/element/block.marko",
      "@parameter1/base-cms-marko-web/components/element/content/body.marko",
      "@parameter1/base-cms-marko-web-theme-default/components/page/contents.marko",
      "@parameter1/base-cms-marko-web-theme-monorail/components/blocks/top-stories.marko",
      "./wrapper.marko"
    ]
  };
