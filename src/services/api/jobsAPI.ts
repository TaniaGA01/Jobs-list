import axios from "axios"

const created = async () => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
      "accept": "application/json"
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: 'PAR_affichageoffresemploi_1f8b677dc41275cf607d82705411e03f582ab30ff6f844f1373803569bb9ad25',
      client_secret: '4eba9b8b4ca16d2d8a7dae6e88b39cdec995233c7ed48b022152530a5a2ad7b8',
      scope: 'api_offresdemploiv2 o2dsoffre'
    }),
    params: {
      realm: '/partenaire'
    },
  };
  const response = await fetch("https://entreprise.pole-emploi.fr/connexion/oauth2/v-5tvYeeN1vkvK0IENvP33HtTFI", requestOptions);
  response

}
created();

export const apiJobs = axios.create({
  baseURL: 'https://api.emploi-store.fr/partenaire/offresdemploi',
  headers: {
    'Authorization': `Bearer v-5tvYeeN1vkvK0IENvP33HtTFI`,
    'content-type': 'application/x-www-form-urlencoded',
  }
})

