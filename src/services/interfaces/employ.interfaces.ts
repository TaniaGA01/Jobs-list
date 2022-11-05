export interface employInterface {
    id: string,
    intitule: string,
    description: string,
    dateCreation: string,
    dateActualisation: string,
    pays: string,
    lieuTravail: {
        libelle: string,
        latitude: number,
        longitude: number,
        codePostal: number,
        commune: number
    },
    romeCode: string,
    romeLibelle: string,
    appellationlibelle: string,
    entreprise: {
        nom: string,
        entrepriseAdaptee: boolean
    },
    typeContrat: string,
    typeContratLibelle: string,
    natureContrat: string,
    experienceExige: string,
    experienceLibelle: string,
    permis: [
        {
            libelle: string,
            exigence: string
        }
    ],
    competences: [
        {
            code: string,
            libelle: string,
            exigence: string
        }
    ],
    salaire: {
        libelle: string
    },
    dureeTravailLibelle: string,
    dureeTravailLibelleConverti: string,
    alternance: boolean,
    contact: {
        coordonnees1: string,
        urlPostulation: string
    },
    nombrePostes: number,
    accessibleTH: boolean,
    qualificationCode: string,
    qualificationLibelle: string,
    secteurActivite: string,
    secteurActiviteLibelle: string,
    origineOffre: {
        origine: string,
        urlOrigine: string
    },
    offresManqueCandidats: false
}
export interface employInterfaceAPIINterface {
    datas: employInterface[]
}