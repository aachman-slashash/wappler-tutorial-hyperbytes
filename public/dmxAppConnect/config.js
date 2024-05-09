dmx.config({
  "page_content": {
    "image_display": {
      "meta": [
        {
          "type": "number",
          "name": "Image_id"
        },
        {
          "type": "number",
          "name": "page_content_id"
        },
        {
          "type": "text",
          "name": "image_url"
        },
        {
          "type": "number",
          "name": "creator_id"
        }
      ],
      "outputType": "array"
    }
  },
  "history": {
    "history_list": {
      "meta": [
        {
          "type": "number",
          "name": "page_content_id"
        },
        {
          "type": "text",
          "name": "title"
        },
        {
          "type": "text",
          "name": "description"
        },
        {
          "type": "boolean",
          "name": "online"
        },
        {
          "type": "datetime",
          "name": "date_created"
        },
        {
          "type": "datetime",
          "name": "date_modified"
        },
        {
          "type": "datetime",
          "name": "event_start"
        },
        {
          "type": "number",
          "name": "lat"
        },
        {
          "type": "number",
          "name": "lng"
        },
        {
          "type": "boolean",
          "name": "geo"
        },
        {
          "type": "text",
          "name": "page_type"
        },
        {
          "type": "datetime",
          "name": "event_end"
        },
        {
          "type": "number",
          "name": "creator_id"
        },
        {
          "type": "number",
          "name": "last_editor_id"
        },
        {
          "type": "text",
          "name": "created_by_first_name"
        },
        {
          "type": "text",
          "name": "created_by_last_name"
        },
        {
          "type": "text",
          "name": "last_edited_by_first_name"
        },
        {
          "type": "text",
          "name": "last_edited_by_last_name"
        },
        {
          "name": "images",
          "type": "array",
          "sub": [
            {
              "type": "number",
              "name": "Image_id"
            },
            {
              "type": "text",
              "name": "image_url"
            },
            {
              "type": "text",
              "name": "image_creator_first_name"
            },
            {
              "type": "text",
              "name": "image_creator_last_name"
            }
          ]
        },
        {
          "name": "comments",
          "type": "array",
          "sub": [
            {
              "type": "number",
              "name": "comment_id"
            },
            {
              "type": "text",
              "name": "comment"
            },
            {
              "type": "datetime",
              "name": "date_created"
            },
            {
              "type": "boolean",
              "name": "authorised"
            },
            {
              "type": "text",
              "name": "commentor_first_name"
            },
            {
              "type": "text",
              "name": "commentor_last_name"
            },
            {
              "name": "reactions",
              "type": "array",
              "sub": [
                {
                  "type": "text",
                  "name": "reaction"
                },
                {
                  "type": "text",
                  "name": "reactor_first_name"
                },
                {
                  "type": "text",
                  "name": "reactor_last_name"
                }
              ]
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "imagemasonry": {
      "meta": [
        {
          "type": "number",
          "name": "Image_id"
        },
        {
          "type": "number",
          "name": "page_content_id"
        },
        {
          "type": "text",
          "name": "image_url"
        },
        {
          "type": "number",
          "name": "creator_id"
        },
        {
          "type": "number",
          "name": "order"
        }
      ],
      "outputType": "array"
    },
    "image_masonry": {
      "meta": [
        {
          "type": "number",
          "name": "Image_id"
        },
        {
          "type": "number",
          "name": "page_content_id"
        },
        {
          "type": "text",
          "name": "image_url"
        },
        {
          "type": "number",
          "name": "creator_id"
        },
        {
          "type": "number",
          "name": "order"
        }
      ],
      "outputType": "array"
    }
  }
});
