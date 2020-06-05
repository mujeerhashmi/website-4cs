from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Setup"),
			"items": [
				{
					"type": "doctype",
					"name": "Carousel Items"
				},
				{
					"type": "doctype",
					"name": "Testimonial Items"
				},
    			{
					"type": "doctype",
					"name": "Clientele"
				}
			]
		}
    ]