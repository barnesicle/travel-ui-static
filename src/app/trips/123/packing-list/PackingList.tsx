'use client';

import {Box, Button, Checkbox, Grid, Menu, MenuItem, TextField, Typography} from "@mui/material";
import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {UserPackingList, Bag, BagItem} from "@/app/user/[id]/packing-list/packing-list-types";
import {packingListData} from "@/app/user/[id]/packing-list/packing-list-data";
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 as uuidv4 } from 'uuid';

type Props = {
}


type AnchorMenuItem = {
    userPackingList: UserPackingList,
    bag: Bag,
    bagItem: BagItem
}

function onEnterPress(event: React.KeyboardEvent, runFunction: Function) {
    if (event.key === 'Enter') {
        console.log('Enter');
        runFunction();
    }
}

export function PackingList(props: Props) {

    const [packingList, setPackingList] = React.useState<UserPackingList[]>(packingListData);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorMenuItem, setAnchorMenuItem] = React.useState<null | AnchorMenuItem>(null);

    const open = Boolean(anchorEl);
    const handleItemOptionsClick = (event: React.MouseEvent<HTMLElement>, userPackingList: UserPackingList, bag: Bag, bagItem: BagItem) => {
        setAnchorEl(event.currentTarget);

        /*const usersBags = packingList.find((item) => item.user === userPackingList.user);
        const bags = usersBags?.bags.find((item) => item.id === bag.id);
        const items = bags?.items.find((item) => item.id === bagItem.id);
        items!.editMode = true;

        setPackingList([...packingList]);*/

        setAnchorMenuItem({
            userPackingList,
            bag,
            bagItem
        })

    };
    const handleItemOptionsClickClose = () => {
        setAnchorEl(null);
    };

    const handleAddBagClick = async (userPackingList: UserPackingList) => {

        userPackingList.bags.push({
            id: uuidv4(),
            name: '',
            items: [],
            editMode: true
        });

        setPackingList([...packingList]);
    };

    const handleAddItemClick = (userPackingList: UserPackingList, bag: Bag) => {


        const usersBags = packingList.find((item) => item.user === userPackingList.user);
        const bags = usersBags?.bags.find((item) => item.id === bag.id);

        bags?.items.push({
            id: uuidv4(),
            name: '',
            quantity: 1,
            editMode: true
        });


        setPackingList([...packingList]);

    }

    const handleConfirmEditModeOnClick = (userPackingList: UserPackingList, bag: Bag, bagItem: BagItem) => {

        const usersBags = packingList.find((item) => item.user === userPackingList.user);
        const bags = usersBags?.bags.find((item) => item.id === bag.id);
        const item = bags?.items.find((item) => item.id === bagItem.id);

        if (item?.name === '') {
            return;
        }

        item!.editMode = false;

        setPackingList([...packingList]);


    }

    const handleConfirmBagEditModeOnClick = (userPackingList: UserPackingList, bag: Bag) => {

        const usersBags = packingList.find((item) => item.user === userPackingList.user);
        const bags = usersBags?.bags.find((item) => item.id === bag.id);

        // TODO If the value is empty, remove the item
        /*if (event.target.value === '') {
            return;
        }*/

        bags!.editMode = false;

        setPackingList([...packingList]);


    }

    const handleUpdateItemName = (event: React.ChangeEvent<HTMLInputElement>, userPackingList: UserPackingList, bag: Bag) => {

        const usersBags = packingList.find((item) => item.user === userPackingList.user);
        const bags = usersBags?.bags.find((item) => item.id === bag.id);
        const items = bags?.items.find((item) => item.editMode === true);

        items!.name = event.target.value;

        setPackingList([...packingList]);

    }

    const handleUpdateItemQuantity = (event: React.ChangeEvent<HTMLInputElement>, userPackingList: UserPackingList, bag: Bag) => {

        const usersBags = packingList.find((item) => item.user === userPackingList.user);
        const bags = usersBags?.bags.find((item) => item.id === bag.id);
        const items = bags?.items.find((item) => item.editMode === true);

        items!.quantity = Number(event.target.value);

        setPackingList([...packingList]);

    }

    const handleUpdateBagName = (event: React.ChangeEvent<HTMLInputElement>, userPackingList: UserPackingList, bag: Bag) => {

        const usersBags = packingList.find((item) => item.user === userPackingList.user);
        const bags = usersBags?.bags.find((item) => item.name === bag.name);

        bags!.name = event.target.value;

        setPackingList([...packingList]);


    }

    const handleEditMode = () => { // TODO
        console.log('handleEditMode');

        const usersBags = packingList.find((item) => item.user === anchorMenuItem?.userPackingList.user);
        const bags = usersBags?.bags.find((item) => item.id === anchorMenuItem?.bag.id);
        const items = bags?.items.find((item) => anchorMenuItem?.bagItem.id === item.id);

        items!.editMode = true;

        setAnchorEl(null);
        setPackingList([...packingList]);
        setAnchorMenuItem(null);
    }

    const handleRemove = () => { // TODO
        console.log('handleRemove');

        const usersBags = packingList.find((item) => item.user === anchorMenuItem?.userPackingList.user);
        const bags = usersBags?.bags.find((item) => item.id === anchorMenuItem?.bag.id);
        bags!.items = bags!.items.filter((item) => anchorMenuItem?.bagItem.id !== item.id);

        setAnchorEl(null);
        setPackingList([...packingList]);
        setAnchorMenuItem(null);

    }

    const handleMarkPacked = () => { // TODO
        console.log('handleMarkPacked');
    }


    function handleEditBagModeOnClick(userPackingList: UserPackingList, bag: Bag) {
        console.log('handleEditBagModeOnClick', packingList, bag)

        const usersBags = packingList.find((item) => item.user === userPackingList.user);
        const bags = usersBags?.bags.find((item) => item.name === bag.name);

        bags!.editMode = true;

        setPackingList([...packingList]);
    }

    function deleteBag(userPackingList: UserPackingList, bag: Bag) {
        console.log('deleteBag', userPackingList, bag)

        const usersBags = packingList.find((item) => item.user === userPackingList.user);
        usersBags!.bags = usersBags!.bags.filter((item) => item.id !== bag.id);

        setPackingList([...packingList]);
    }

    return <Box sx={{display: 'flex'}}>

        {packingList.map((userPackingList) => {
            return <Box key={userPackingList.user.name} sx={{padding: 2}}>
                <Typography variant={"h5"} sx={{padding: 3}}>{userPackingList.user.name} Bags</Typography>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleItemOptionsClickClose}
                >
                    <MenuItem onClick={handleMarkPacked}>Mark Packed</MenuItem>
                    <MenuItem onClick={handleEditMode}>Edit</MenuItem>
                    <MenuItem onClick={handleRemove}>Remove</MenuItem>
                </Menu>

                {userPackingList.bags.map((bag) => {
                    return <Box key={userPackingList.user.email + '-' + bag.id} sx={{paddingBottom: 3}}>
                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                            {bag.editMode && <>
                                <TextField label="Bag Name"
                                           variant="outlined"
                                           value={bag.name}
                                           onKeyDown={(event) => onEnterPress(event, () => {  handleConfirmBagEditModeOnClick(userPackingList, bag)  })}
                                           onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleUpdateBagName(event, userPackingList, bag)} />
                                <Button
                                    onClick={() => handleConfirmBagEditModeOnClick(userPackingList, bag)}
                                    variant={"outlined"}
                                >
                                    <CheckIcon />
                                </Button>
                            </>}
                            {!bag.editMode && <>
                                <Typography variant={"h6"} >{bag.name}</Typography> {/* TODO {'10'}% Packed Calculate packed*/}
                                <Box>
                                    <Button
                                        onClick={() => handleEditBagModeOnClick(userPackingList, bag)}
                                        variant={"outlined"}
                                        size={'small'}
                                        sx={{marginRight: 1}}
                                    >
                                        <EditIcon />
                                    </Button>
                                    <Button
                                        onClick={() => deleteBag(userPackingList, bag )}
                                        variant={"outlined"}
                                        size={'small'}
                                    >
                                        <DeleteIcon />
                                    </Button>
                                </Box>
                            </>
                            }

                        </Box>

                        {bag.items.map((item) => {

                            console.log('item', item)

                            return <Box key={ userPackingList.user.email + '-' + bag.id + '-' + item.id} sx={{display: 'flex', justifyContent: 'space-between'}}>

                                <Box sx={{display: 'flex'}}>
                                    <Checkbox />

                                    {item.editMode && <>
                                        <Grid container sx={{width: '300px'}} >
                                            <Grid item xs={9}>
                                                <TextField label="Item Name" variant="outlined" value={item.name} fullWidth={true} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleUpdateItemName(event, userPackingList, bag)} />
                                            </Grid>
                                            <Grid item xs={3}>
                                                <TextField label="Quantity" variant="outlined" value={item.quantity} fullWidth={true} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleUpdateItemQuantity(event, userPackingList, bag)} />
                                            </Grid>
                                        </Grid>
                                        <Button
                                            onClick={() => handleConfirmEditModeOnClick(userPackingList, bag, item)}
                                            variant={"outlined"}
                                        >
                                            <CheckIcon />
                                        </Button>
                                    </>}
                                    {!item.editMode && <Typography variant={"body1"} sx={{padding: 2, width: '300px'}}>{item.name} x {item.quantity}</Typography>}

                                </Box>
                                {!item.editMode && <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={(event) => handleItemOptionsClick(event, userPackingList, bag, item)}
                                    sx={{padding: 1}}
                                >
                                    <MoreVertIcon />
                                </Button>}


                            </Box>
                        })}

                        <Box sx={{display: 'flex', justifyContent: 'center', padding: 1}}>
                            <Button
                                id="add-new-bag-button"
                                onClick={() => handleAddItemClick(userPackingList, bag)}
                                variant={"outlined"}
                            >
                                <AddIcon />
                            </Button>
                        </Box>

                    </Box>
                })}

                <Box sx={{display: 'flex', justifyContent: 'center', paddingBottom: 4}}>
                    <Button
                        onClick={() => handleAddBagClick(userPackingList )}
                        variant={"contained"}
                    >
                        Add Bag
                    </Button>
                </Box>

            </Box>

        })}
    </Box>
}