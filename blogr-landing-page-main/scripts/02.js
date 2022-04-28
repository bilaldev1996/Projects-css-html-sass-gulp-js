export default function listGifts(letter) {
    // ¡Tú puedes!
    let carta = letter.trim()
    //carta = letter.match(/\S{3,}/g)
    const comple = carta.match(/\S{3,}/g)
    const regalos= []
    regalos.push(...comple)
    regalos.forEach((r,i) =>{
        if(r.includes('_')){
            regalos.splice(i,i-2)
        }
    })
    const num = regalos.reduce((countWord,word)=>{
        countWord[word] = (countWord[word]||0)+1;
        return countWord;
    },{})
    return num
}
const carta = 'bici coche balón _playstation bici coche peluche mama bici balón          '