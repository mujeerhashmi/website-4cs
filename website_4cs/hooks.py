# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "website_4cs"
app_title = "Website_4CSolutions"
app_publisher = "4C Solutions"
app_description = "Website for 4C Solutions"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "info@4csolutions.in"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/website_4cs/css/website_4cs.css"
# app_include_js = "/assets/website_4cs/js/website_4cs.js"

# include js, css files in header of web template
# web_include_css = "/assets/website_4cs/css/website_4cs.css"
# web_include_js = "/assets/website_4cs/js/website_4cs.js"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"
home_page = "index"
website_context = {
	"favicon": 	"/assets/website_4cs/images/4Cfavicon.ico"	
}
# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "website_4cs.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "website_4cs.install.before_install"
# after_install = "website_4cs.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "website_4cs.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"website_4cs.tasks.all"
# 	],
# 	"daily": [
# 		"website_4cs.tasks.daily"
# 	],
# 	"hourly": [
# 		"website_4cs.tasks.hourly"
# 	],
# 	"weekly": [
# 		"website_4cs.tasks.weekly"
# 	]
# 	"monthly": [
# 		"website_4cs.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "website_4cs.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "website_4cs.event.get_events"
# }

