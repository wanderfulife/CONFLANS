// 🚗 ENQUÊTE STATIONNEMENT - CONFLANS SAINTE-HONORINE

export const templateSurveyQuestions = [

    // 🅿️ Q1 - Lieu du stationnement du véhicule
    {
        id: "Q1",
        text: "Quel est le lieu de stationnement de votre véhicule ?",
        type: 'freeText',
        freeTextPlaceholder: "Indiquer le lieu de stationnement...",
        next: "Q2"
    },

    // 🎯 Q2 - Raison principale de la venue
    {
        id: "Q2",
        text: "Quelle est la raison principale pour laquelle vous venez de vous garer ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Prendre le train", next: "Q3" },
            { id: 2, text: "Prendre le bus", next: "Q3" },
            { id: 3, text: "Accompagner un voyageur en gare", next: "Q3" },
            { id: 4, text: "Travail à la gare ou dans le quartier", next: "Q3" },
            { id: 5, text: "Habite dans le quartier", next: "Q3" },
            { id: 6, text: "Se rend dans un commerce / administration / service du quartier", next: "Q3" },
            { id: 7, text: "Rend visite à quelqu'un du quartier", next: "Q3" },
            { id: 8, text: "Autre", next: "Q2_Autre" }
        ]
    },

    // 📝 Q2 - Autre raison
    {
        id: "Q2_Autre",
        text: "Préciser :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser la raison...",
        next: "Q3"
    },

    // ⏱️ Q3 - Durée du stationnement
    {
        id: "Q3",
        text: "Quelle sera la durée de votre stationnement ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Moins de 2h", next: "end" },
            { id: 2, text: "2 à 4h", next: "end" },
            { id: 3, text: "4 à 6h", next: "end" },
            { id: 4, text: "Plus de 6h", next: "Q4" }
        ]
    },

    // 📍 Q4 - Origine du déplacement
    {
        id: "Q4",
        text: "Quelle est l'origine de votre déplacement ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Conflans Sainte-Honorine", next: "Q4a_Conflans" },
            { id: 2, text: "Autre commune", next: "Q4_Autre" }
        ]
    },

    // 🏙️ Q4 - Autre commune
    {
        id: "Q4_Autre",
        text: "Préciser le nom de la commune :",
        type: 'commune',
        next: "end"
    },

    // 🏘️ Q4a - Rue, quartier ou lieu remarquable (Conflans Sainte-Honorine)
    {
        id: "Q4a_Conflans",
        text: "Préciser la rue, le quartier ou le lieu remarquable :",
        image: "plan.png",
        type: 'freeText',
        freeTextPlaceholder: "Rue, quartier ou lieu remarquable...",
        next: "end"
    }
];
