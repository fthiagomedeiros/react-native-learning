export async function fetchAddress(cep) {
  try {
    let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let json = await response.json();
    return JSON.stringify(json);
  } catch (error) {
    console.error(error);
  }
}
