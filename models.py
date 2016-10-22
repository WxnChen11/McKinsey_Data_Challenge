from mongoengine import Document, EmbeddedDocument
from mongoengine.field import EmbeddedDocumentField, FloatField, ListField, LongField, StringField, UUIDField


class Project(Document)
    name = StringField()
    location_x = FloatField()
    location_y = FloatField()

    description = StringField()
    hover_description = StringField()

    traffic_management = StringField()
    status = StringField()
    start_date = StringField()
    road = StringField()
    reference_number = StringField()
    location = StringField()
    local_authority = StringField()
    expected_delay = StringField()
    end_date = StringField()
    closure_type = StringField()
    northing = StringField()
    easting = StringField()
