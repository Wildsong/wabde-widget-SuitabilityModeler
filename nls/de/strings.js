define({
  "_widgetLabel": "Eignungsmodellierer",
  "general": {
    "clear": "Löschen",
    "cancel": "Abbrechen",
    "save": "Ausführen",
    "saveAs": "Exportieren"
  },
  "saveModel": {
    "save": "Exportieren",
    "title": "Titel: ",
    "summary": "Zusammenfassung: ",
    "description": "Beschreibung: ",
    "tags": "Tags: ",
    "folder": "Ordner: ",
    "homeFolderPattern": "{username} (Home)",
    "failed": "Fehler bei Export."
  },
  "util": {
    "colorRamp": {
      "1": "Extrem niedrig",
      "2": "Sehr niedrig",
      "3": "Niedrig",
      "4": "Niedrig – Mittel",
      "5": "Mittel",
      "6": "Hoch – Mittel",
      "7": "Hoch",
      "8": "Sehr hoch",
      "9": "Extrem hoch",
      "low": "Niedrig",
      "high": "Hoch",
      "tipPattern": "{label} ({value})",
      "flipCaption": "Umdrehen"
    }
  },
  "wro": {
    "caption": "Eignungsmodellerstellung",
    "browsePrompt": "Gewichtungsüberlagerungsservice",
    "selectLayersCaption": "Layer auswählen",
    "selectLayers": "Layer",
    "designModelCaption": "Modell entwerfen",
    "designModel": "Modell entwerfen",
    "transparency": "Transparenz",
    "visible": "Sichtbar",
    "total": "Gesamtsumme",
    "unableToLoad": "Das Modell kann nicht geladen werden.",
    "projectNotOpen": "Ein Projekt ist nicht geöffnet.",
    "readMore": "Weitere Informationen",
    "validation": {
      "validating": "Wird überprüft...",
      "invalidItemCaption": "Warnung zu Gewichtungsüberlagerungsservice",
      "notAnImageService": "Dieses Element ist kein Image-Service.",
      "notAWroService": "Dieses Element ist kein Gewichtungsüberlagerungsservice.",
      "undefinedUrl": "Die URL dieses Elements ist nicht definiert.",
      "inaccessible": "Auf diesen Service kann nicht zugegriffen werden.",
      "generalError": "Element kann nicht geöffnet werden.",
      "missingFieldPattern": "{field} ist ein erforderliches Feld.",
      "notAllowRasterFunction": "allowRasterFunction muss auf \"True\" gesetzt sein.",
      "notNearestResampling": "Für \"defaultResamplingMethod\" muss \"Nearest\" festgelegt sein.",
      "notIsWeightedOverlayProp": "Die Schlüsseleigenschaft \"IsWeightedOverlay\" muss auf \"True\" gesetzt sein.",
      "invalidLink": "Die URL ist ungültig. Die Seite konnte für den ausgewählten Layer nicht geöffnet werden.",
      "unexpectedError": "Ein unerwarteter Status ist aufgetreten.",
      "rangeMessage": "Wert muss zwischen ${0} und ${1} liegen",
      "rangeMessage100": "Wert muss zwischen 0 und 100 liegen",
      "maxLayers": "Pro Service sind maximal ${0} Layer zulässig. Sie müssen zuerst einen Layer entfernen, bevor Sie einen neuen hinzufügen.",
      "notFound": "Layer ${0} wurde im Gewichtungsüberlagerungsservice nicht gefunden.",
      "wroServiceNotDefined": "Für das Modell wurde kein Gewichtungsüberlagerungsservice definiert.",
      "overlayLayerOutputInvalid": "Der Ausgabewert der Remap-Bereiche [${1}] des Overlay-Layers [${0}] fehlt oder ist ungültig.",
      "overlayLayerInputInvalid": "Der minimale/maximale Ausgabewert der Remap-Bereiche [${1}] des Overlay-Layers [${0}] fehlt oder ist ungültig.",
      "overlayLayerRangesMissing": "Der Overlay-Layer [${0}] weist keine Remap-Bereiche auf.",
      "overlayLayerWeight": "Die Gewichtungen des Overlay-Layers müssen eines Summe von 100 ergeben.",
      "overlayLayerRequired": "Mindestens ein Overlay-Layer ist erforderlich.",
      "overlayLayerNotDefined": "Keine Overlay-Layer definiert",
      "requiresColormap": "Für diese Gitternetzfunktion ist eine Colormap erforderlich. Das Modell weist jedoch keine gültige Colormap-Definition auf.",
      "createModelError": "Fehler beim Erstellen des Modells",
      "invalidModel": "Modell ist ungültig",
      "imageServiceNotDefined": "Kein Image-Service-Layer definiert",
      "imageLayerNotDefined": "Kein Image-Service-Layer definiert",
      "histogramNotDefined": "Keine Histogrammfunktion für gewichtete Überlagerung definiert"
    },
    "colorRampLabel": {
      "Green Yellow Red": "Grün Gelb Rot",
      "Red Yellow Green": "Rot Gelb Grün",
      "Yellow to Dark Red": "Gelb zu Dunkelrot",
      "Dark Red to Yellow": "Dunkelrot zu Gelb",
      "Light Gray to Dark Gray": "Hellgrau zu Dunkelgrau",
      "Dark Gray to Light Gray": "Dunkelgrau zu Hellgrau",
      "Light Brown to Dark Brown": "Hellbraun zu Dunkelbraun",
      "Dark Brown to Light Brown": "Dunkelbraun zu Hellbraun",
      "Full Spectrum - Bright Red to Blue": "Vollspektrum – Hellrot zu Blau",
      "Full Spectrum - Bright Blue to Red": "Vollspektrum – Hellblau zu Rot",
      "Partial Spectrum - Yellow to Blue": "Teilspektrum – Gelb zu Blau",
      "Partial Spectrum - Blue to Yellow": "Teilspektrum – Blau zu Gelb",
      "Yellow-Green to Dark Blue": "Gelb-Grün zu Dunkelblau",
      "Dark Blue to Yellow-Green": "Dunkelblau zu Gelb-Grün",
      "Cold to Hot Diverging": "Übergang von Cold zu Hot",
      "Hot to Cold Diverging": "Übergang von Hot zu Cold",
      "Surface - Low to High": "Oberfläche – niedrig zu hoch",
      "Surface - High to Low": "Oberfläche – hoch zu niedrig"
    }
  },
  "tabs": {
    "layers": "Layer",
    "model": "Modell",
    "chart": "Diagramm"
  },
  "chart": {
    "prompt": "Features",
    "working": "Wird aktualisiert...",
    "polygonTool": "Ein Polygon zeichnen",
    "freehandPolygonTool": "Ein Freihandpolygon zeichnen",
    "selectTool": "Aus einem Layer auswählen",
    "panTool": "Schwenken",
    "clearButton": "Auswahl aufheben",
    "noModelLayer": "Kein Modell.",
    "noSubjectLayers": "Ihre Karte enthält keine Polygon-Layer.",
    "tipPattern": "${category} - ${label}: ${percent}%",
    "tipPattern2": "${category}: ${percent}%",
    "labelPattern": "${category} - ${label}"
  }
});