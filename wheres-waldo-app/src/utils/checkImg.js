function checkImg(coords, selectedChar) {
  if (
    coords.x > selectedChar.minX &&
    coords.x < selectedChar.maxX &&
    coords.y < selectedChar.maxY &&
    coords.y > selectedChar.minY
  )
    return true;
  return false;
}

export default checkImg;
