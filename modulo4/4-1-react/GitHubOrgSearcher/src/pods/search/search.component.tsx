import React from "react";
import { Button, TextField } from "@mui/material";

import { OrganizationContext } from "@/core";

interface Props {
  handleOrganization: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchComponent: React.FC<Props> = (props) => {
  const { handleOrganization, handleChange } = props;
  const { organizationProfile } = React.useContext(OrganizationContext);
  return (
    <>
      <h1>GitHub Organization Searcher </h1>
      <div className="form-div">
        <form onSubmit={handleOrganization}>
          <div>
            <div>
              <TextField
                size="small"
                id="outlined-helperText"
                label="Introduce organization"
                defaultValue={organizationProfile.organizationName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="search-button-container">
            <Button
              color="inherit"
              size="small"
              variant="outlined"
              type="submit"
            >
              Search
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
