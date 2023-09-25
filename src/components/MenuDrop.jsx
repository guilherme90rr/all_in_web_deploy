"use client"

import * as React from 'react';

export default function MenuDrop() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    const resp = await destroy(page.id)
    if (resp?.error) {
      toast.error(resp.error)
      return
    }
    toast.success("documento apagada com sucesso")
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >


        <ChevronDown className='text-slate-300' />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Deletar</MenuItem>
        <MenuItem onClick={handleClose}>Modificar</MenuItem>
        <AlertDialogAction onClick={handleDelete}>sim, pode apagar esse documento</AlertDialogAction>
      </Menu>
    </div>
  );
}
