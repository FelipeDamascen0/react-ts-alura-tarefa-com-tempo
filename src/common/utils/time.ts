//pasta com funçoes utilitarias comuns que envolvam tempo                           

//essa funcção converte hora e minuto para segundos e retorna o valor dos dois somados                                                                                                                                                                 
export const timeToSecond = (time: string) => {
  const [ hours = '0', minutes = '0', seconds = '0' ] = time.split(':');
  const hoursToSeconds = Number(hours) * 3600; 
  const minutesToSeconds = Number(minutes) * 60;

  return hoursToSeconds + minutesToSeconds + Number(seconds);
}