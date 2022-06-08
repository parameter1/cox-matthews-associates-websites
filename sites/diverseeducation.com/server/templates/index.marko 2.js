// Compiled using marko@4.20.2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/@cox-matthews-associates/diverseeducation.com$2.13.1/server/templates/index.marko",
    marko_component = require("./index.marko"),
    marko_renderer = require("marko/src/runtime/components/renderer"),
    module_baseCmsObjectPath_module = require("@parameter1/base-cms-object-path"),
    baseCmsObjectPath_module = module_baseCmsObjectPath_module.default || module_baseCmsObjectPath_module,
    get = module_baseCmsObjectPath_module.get,
    module_hierarchyAliases = require("@parameter1/base-cms-marko-web/utils/hierarchy-aliases"),
    hierarchyAliases = module_hierarchyAliases.default || module_hierarchyAliases,
    theme_opinion_block_template = require("@parameter1/base-cms-marko-web-theme-monorail/components/blocks/opinion.marko"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    theme_opinion_block_tag = marko_loadTag(theme_opinion_block_template),
    theme_section_list_block_template = require("@parameter1/base-cms-marko-web-theme-monorail/components/blocks/section-list.marko"),
    theme_section_list_block_tag = marko_loadTag(theme_section_list_block_template),
    theme_gam_define_display_ad_template = require("@parameter1/base-cms-marko-web-theme-monorail/components/gam/define-display-ad.marko"),
    theme_gam_define_display_ad_tag = marko_loadTag(theme_gam_define_display_ad_template),
    theme_section_list_deck_block_template = require("@parameter1/base-cms-marko-web-theme-monorail/components/blocks/section-list-deck.marko"),
    theme_section_list_deck_block_tag = marko_loadTag(theme_section_list_deck_block_template),
    global_featured_jobs_block_template = require("@cox-matthews-associates/package-global/components/blocks/featured-jobs.marko"),
    global_featured_jobs_block_tag = marko_loadTag(global_featured_jobs_block_template),
    global_esurveypro_block_template = require("@cox-matthews-associates/package-global/components/blocks/esurveypro.marko"),
    global_esurveypro_block_tag = marko_loadTag(global_esurveypro_block_template),
    global_magazine_issues_block_template = require("@cox-matthews-associates/package-global/components/magazine/blocks/magazine-issues.marko"),
    global_magazine_issues_block_tag = marko_loadTag(global_magazine_issues_block_template),
    site_promo_card_rotation_block_template = require("../components/blocks/promo-card-rotation.marko"),
    site_promo_card_rotation_block_tag = marko_loadTag(site_promo_card_rotation_block_template),
    theme_client_side_most_popular_block_template = require("@parameter1/base-cms-marko-web-theme-monorail/components/client-side-blocks/most-popular.marko"),
    theme_client_side_most_popular_block_tag = marko_loadTag(theme_client_side_most_popular_block_template),
    global_website_section_home_layout_template = require("@cox-matthews-associates/package-global/components/layouts/website-section/home.marko"),
    global_website_section_home_layout_tag = marko_loadTag(global_website_section_home_layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  const { id, alias, name, pageNode } = input;

  global_website_section_home_layout_tag({
      id: id,
      alias: alias,
      name: name,
      pageNode: pageNode,
      head: {
          renderBody: function(out) {
            out.w("<meta name=\"google-site-verification\" content=\"8aQls2gtsOHdVyF8STgEfM9CxCuOmB4vbmET-vPFEHc\">");
          }
        },
      sections: [
          {
              modifiers: [
                  "break-container"
                ],
              renderBody: function(out) {
                theme_opinion_block_tag({
                    alias: "opinion"
                  }, out, __component, "4");
              }
            },
          {
              renderBody: function(out, { aliases }) {
                out.w("<div class=\"row\"><div class=\"col-lg-4\">");

                theme_section_list_block_tag({
                    alias: "students"
                  }, out, __component, "8");

                out.w("</div><div class=\"col-lg-4\">");

                theme_section_list_block_tag({
                    alias: "faculty-staff"
                  }, out, __component, "10");

                out.w("</div><div class=\"col-lg-4\">");

                theme_section_list_block_tag({
                    alias: "leadership-policy"
                  }, out, __component, "12");

                out.w("</div></div>");
              }
            },
          {
              renderBody: function(out, { aliases }) {
                theme_gam_define_display_ad_tag({
                    name: "rotation",
                    position: "home_page",
                    aliases: aliases,
                    modifiers: [
                        "inter-block"
                      ]
                  }, out, __component, "14");
              }
            },
          {
              renderBody: function(out) {
                theme_section_list_deck_block_tag({
                    aliases: [
                        "sports",
                        "demographics",
                        "institutions"
                      ]
                  }, out, __component, "16");
              }
            },
          {
              modifiers: [
                  "break-container"
                ],
              renderBody: function(out, { aliases }) {
                global_featured_jobs_block_tag({}, out, __component, "18");
              }
            },
          {
              renderBody: function(out, { aliases }) {
                out.w("<div class=\"row\"><div class=\"col-lg-8\">");

                global_esurveypro_block_tag({}, out, __component, "22");

                out.w("</div><div class=\"col-lg-4\">");

                theme_gam_define_display_ad_tag({
                    name: "rail",
                    position: "home_page",
                    aliases: aliases,
                    modifiers: [
                        "max-width-300",
                        "center",
                        "margin-auto-x",
                        "rail"
                      ],
                    class: "mb-block"
                  }, out, __component, "24");

                out.w("</div></div>");
              }
            },
          {
              renderBody: function(out, { aliases }) {
                global_magazine_issues_block_tag({
                    publicationId: "61128276dc429e5a098b4576"
                  }, out, __component, "26");
              }
            },
          {
              renderBody: function(out) {
                site_promo_card_rotation_block_tag({}, out, __component, "28");
              }
            },
          {
              renderBody: function(out) {
                theme_client_side_most_popular_block_tag({}, out, __component, "30");
              }
            }
        ]
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/@cox-matthews-associates/diverseeducation.com$2.13.1/server/templates/index.marko",
    component: "./",
    tags: [
      "@parameter1/base-cms-marko-web-theme-monorail/components/blocks/opinion.marko",
      "@parameter1/base-cms-marko-web-theme-monorail/components/blocks/section-list.marko",
      "@parameter1/base-cms-marko-web-theme-monorail/components/gam/define-display-ad.marko",
      "@parameter1/base-cms-marko-web-theme-monorail/components/blocks/section-list-deck.marko",
      "@cox-matthews-associates/package-global/components/blocks/featured-jobs.marko",
      "@cox-matthews-associates/package-global/components/blocks/esurveypro.marko",
      "@cox-matthews-associates/package-global/components/magazine/blocks/magazine-issues.marko",
      "../components/blocks/promo-card-rotation.marko",
      "@parameter1/base-cms-marko-web-theme-monorail/components/client-side-blocks/most-popular.marko",
      "@cox-matthews-associates/package-global/components/layouts/website-section/home.marko"
    ]
  };
