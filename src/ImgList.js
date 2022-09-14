import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import feher_teher from "./Images/feher_teher.jpg"
import narancs_teher from "./Images/narancs_teher.jpg"
import narancs_teher_h from "./Images/narancs_teher_h.jpg"
import piros_teher from "./Images/piros_teher.jpg"
import zold_teher from "./Images/zold_teher.jpg"
import fekete_teher from "./Images/fekete_teher.jpg"

export default function StandardImageList() {

 
  return (
    <ImageList
    variant="masonry"
    cols="3"
    rowHeight="200">
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={item.img}
           alt=""
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
const itemData = [
 
  {
    img: piros_teher,
  },
  {
    img: zold_teher,
  },
  {
    img: narancs_teher,
  },
  {
    img: narancs_teher_h,
  },
  {
    img: fekete_teher,
  },
  {
    img: feher_teher,
  },
  
];
