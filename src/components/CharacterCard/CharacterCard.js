import React from 'react'

function CharacterCard({name, thumbnail, favorited}) {

  const imagePath = `${thumbnail.path}.${thumbnail.extension}`

  return (
    <div>
        <img style={{width: "160px"}} src={imagePath} alt="Imagem do personagem"/>
        <p>{name}</p>
        {favorited}
    </div>
  )
}

export default CharacterCard