import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Box, Divider, Typography } from "@mui/material";
import Button from "../../Button";
import { Edit } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";

export default function FamilyProfile() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(true);

  return (
    <Box>
      <Button sx={{ left: 0 }}>
        <Edit sx={{ marginRight: 1 }} /> Edit
      </Button>
      <Avatar
        alt="Logo"
        src="/logo.png"
        sx={{
          width: 160,
          height: 160,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <Typography variant="h6" color="primary.dark">
        H&M Family
      </Typography>
      <Typography variant="body2" color="primary">
        Love is not enough
      </Typography>
      <br />
      <Divider />
      <List dense={dense} sx={{ color: "primary.dark" }}>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon sx={{ color: "primary.dark" }} />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="body2" color="primary.dark" align="left">
                Primary text
              </Typography>
            }
            secondary={
              secondary ? (
                <Typography variant="caption" color="primary">
                  Secondary text
                </Typography>
              ) : null
            }
          />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon sx={{ color: "primary.dark" }} />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="body2" color="primary.dark" align="left">
                Primary text
              </Typography>
            }
            secondary={
              secondary ? (
                <Typography variant="caption" color="primary">
                  Secondary text
                </Typography>
              ) : null
            }
          />
        </ListItem>
      </List>
      <Button>
        <DeleteIcon sx={{ marginRight: 1 }} /> Delete Family
      </Button>
      <br />
      <br />
    </Box>
  );
}
