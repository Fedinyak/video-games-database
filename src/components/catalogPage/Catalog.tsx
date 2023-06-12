import React, { useEffect, useState } from "react";

import Grid from "@mui/system/Unstable_Grid";
import CatalogItem from "./CatalogItem";

const Catalog = (props: any) => {
  return (
    <>
      <h1>Catalog</h1>
      <Grid container spacing={1} sx={{ bgcolor: "black" }}>
        {props.store.map(
          (item: { name: string; id: number; background_image: string }) => {
            return (
              <CatalogItem
                name={item.name}
                id={item.id}
                image={item.background_image}
              />
            );
          }
        )}
      </Grid>
    </>
  );
};

export default Catalog;
