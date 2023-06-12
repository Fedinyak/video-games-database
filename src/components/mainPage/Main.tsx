import Grid from "@mui/system/Unstable_Grid";
import MainItem from "./MainItem";

const Main = (props: any) => {
  return (<>
    <h1>Main page!</h1>
    <Grid container spacing={1} sx={{ bgcolor: 'black' }}>
      {props.store.map((item: { name: string; id: number; background_image: string; }) => {
        return (<MainItem name={item.name} id={item.id} image={item.background_image} />)
      })}
    </Grid>
  </>)
}
export default Main;