LOCATION_FLAG_REPLACEMENTS = {
    "unknown location_flag (185)": "InfrastructureHangar",
    "unknown location_flag (186)": "MoonMaterialBay"
}

NOTIFICATION_TYPE_REPLACEMENTS = {
    "unknown notification type (275)": "LPAutoRedeemed",
    "unknown notification type (276)": "SPAutoRedeemed",
    "unknown notification type (280)": "SkinSequencingCompleted",
    "unknown notification type (281)": "SkyhookOnline",
    "unknown notification type (282)": "SkyhookLostShields",
    "unknown notification type (283)": "SkyhookUnderAttack",
    "unknown notification type (284)": "SkyhookDestroyed",
    "unknown notification type (285)": "SkyhookDeployed"
}


def sanitize_location_flag(flag):
    return LOCATION_FLAG_REPLACEMENTS.get(flag, flag)


def sanitize_notification_type(note_type):
    return NOTIFICATION_TYPE_REPLACEMENTS.get(note_type, note_type)
