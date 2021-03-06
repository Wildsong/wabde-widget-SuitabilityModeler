define({
  "_widgetLabel": "Suitability Modeler",
  "general": {
    "clear": "Annuleren",
    "cancel": "Afbreken",
    "save": "Uitvoeren",
    "saveAs": "Exporteren"
  },
  "saveModel": {
    "save": "Exporteren",
    "title": "Title: ",
    "summary": "Beschrijving: ",
    "description": "Beschrijving: ",
    "tags": "Labels: ",
    "folder": "Folder: ",
    "homeFolderPattern": "{username} (Home)",
    "failed": "Export failed."
  },
  "util": {
    "colorRamp": {
      "1": "Extreem laag",
      "2": "Zeer laag",
      "3": "Laag",
      "4": "Laag middel",
      "5": "Middel",
      "6": "Hoog middel",
      "7": "Hoog",
      "8": "Zeer hoog",
      "9": "Extreem hoog",
      "low": "Laag",
      "high": "Hoog",
      "tipPattern": "{label} ({value})",
      "flipCaption": "Omkeren"
    }
  },
  "wro": {
    "caption": "Suitability Modeler",
    "browsePrompt": "Weighted Overlay-service",
    "selectLayersCaption": "Lagen selecteren",
    "selectLayers": "Kaartlagen",
    "designModelCaption": "Designmodel",
    "designModel": "Designmodel",
    "transparency": "Transparant",
    "visible": "Zichtbaar",
    "total": "Totaal",
    "unableToLoad": "Kan model niet laden.",
    "projectNotOpen": "Er is geen project geopend.",
    "readMore": "Meer informatie",
    "validation": {
      "validating": "Valideren...",
      "invalidItemCaption": "Waarschuwing Weighted Overlay-service",
      "notAnImageService": "Dit item is geen Imageservice.",
      "notAWroService": "Dit item is geen Weighted Overlay-service.",
      "undefinedUrl": "De URL van dit item is niet gedefinieerd.",
      "inaccessible": "De service is niet toegankelijk.",
      "generalError": "Kan item niet openen.",
      "missingFieldPattern": "{field} is een vereist veld",
      "notAllowRasterFunction": "allowRasterFunction moet ingesteld zijn op waar",
      "notNearestResampling": "defaultResamplingMethod moet dichtstbijzijnde zijn",
      "notIsWeightedOverlayProp": "Key property IsWeightedOverlay moet ingesteld zijn op waar",
      "invalidLink": "De URL is ongeldig. Kon website niet openen voor geselecteerde laag.",
      "unexpectedError": "Er is een onverwachte toestand opgetreden.",
      "rangeMessage": "Waarde moet liggen tussen ${0} en ${1}",
      "rangeMessage100": "De waarde moet tussen 0 en 100 liggen",
      "maxLayers": "Maximum ${0} lagen toegestaan door service, u moet een laag verwijderen voordat u een nieuwe toevoegt.",
      "notFound": "Laag ${0} niet gevonden in weighted overlay-service",
      "wroServiceNotDefined": "Geen weighted overlay-service gedefinieerd voor model.",
      "overlayLayerOutputInvalid": "Overlay-laag [${0}] remapbereiken [${1}] uitvoerwaarde ontbrekend of ongeldig",
      "overlayLayerInputInvalid": "Overlay-laag [${0}] remapbereiken [${1}] invoer min/max ontbrekend of ongeldig",
      "overlayLayerRangesMissing": "Overlay-laag [${0}] mist remapbereiken",
      "overlayLayerWeight": "Overlay-laaggewichten moeten 100 zijn in totaal",
      "overlayLayerRequired": "Er is ten minste ????n overlay-laag vereist",
      "overlayLayerNotDefined": "Overlay-lagen is niet gedefinieerd",
      "requiresColormap": "Deze rasterfunctie vereist een kleurenkaart, maar het model heeft geen geldige kleurenkaartdefinitie",
      "createModelError": "Fout bij het maken van het model",
      "invalidModel": "Model is niet geldig",
      "imageServiceNotDefined": "Imageservicelaag is niet gedefinieerd",
      "imageLayerNotDefined": "Imageservicelaag is niet gedefinieerd",
      "histogramNotDefined": "Geen weighted overlay-histogramfunctie gedefinieerd."
    },
    "colorRampLabel": {
      "Green Yellow Red": "Groen Geel Rood",
      "Red Yellow Green": "Rood Geel Groen",
      "Yellow to Dark Red": "Geel naar donkerrood",
      "Dark Red to Yellow": "Donkerrood naar geel",
      "Light Gray to Dark Gray": "Lichtgrijs naar donkergrijs",
      "Dark Gray to Light Gray": "Donkergrijs naar lichtgrijs",
      "Light Brown to Dark Brown": "Lichtbruin naar donkerbruin",
      "Dark Brown to Light Brown": "Donkerbruin naar lichtbruin",
      "Full Spectrum - Bright Red to Blue": "Volledig spectrum - Felrood naar blauw",
      "Full Spectrum - Bright Blue to Red": "Volledig spectrum - Felblauw naar rood",
      "Partial Spectrum - Yellow to Blue": "Gedeeltelijk spectrum - Geel naar blauw",
      "Partial Spectrum - Blue to Yellow": "Gedeeltelijk spectrum - Blauw naar geel",
      "Yellow-Green to Dark Blue": "Geelgroen naar donkerblauw",
      "Dark Blue to Yellow-Green": "Donkerblauw naar geelgroen",
      "Cold to Hot Diverging": "Koud naar warm",
      "Hot to Cold Diverging": "Warm naar koud",
      "Surface - Low to High": "Oppervlak - Laag naar hoog",
      "Surface - High to Low": "Oppervlak - Hoog naar laag"
    }
  },
  "tabs": {
    "layers": "Kaartlagen",
    "model": "Model",
    "chart": "Diagram"
  },
  "chart": {
    "prompt": "Objecten",
    "working": "Bezig met bijwerken...",
    "polygonTool": "Teken een polygoon",
    "freehandPolygonTool": "Teken een polygoon in vrije stijl",
    "selectTool": "Selecteren vanaf een laag",
    "panTool": "Pannen",
    "clearButton": "Annuleren",
    "noModelLayer": "Geen model.",
    "noSubjectLayers": "Uw kaart heeft geen polygoonlagen.",
    "tipPattern": "${category} - ${label}: ${percent}%",
    "tipPattern2": "${category}: ${percent}%",
    "labelPattern": "${category} - ${label}"
  }
});