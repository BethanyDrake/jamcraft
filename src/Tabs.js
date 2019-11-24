import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BuyScreen from './BuyScreen';
import MakeScreen from './MakeScreen';
import SellScreen from './SellScreen';
import Chip from '@material-ui/core/Chip';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const newInventoryItem = (itemName, cost) => ({
  itemName,
  cost,
  amountOwned: 1
})

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [money, setMoney] = useState(500);
  const [inventory, setInventory] = useState([]);

  const onBuy = (cost, ingredientName) => {

    const matchingItemSlot = inventory.find(item => item.itemName === ingredientName);
    if (matchingItemSlot) {
      matchingItemSlot.amountOwned += 1;
    } else {
      inventory.push(newInventoryItem(ingredientName, cost));
    }
    setMoney(money - cost);
    setInventory(inventory);
  }
  const canAfford = (cost) => {
    return cost <= money;
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Buy" {...a11yProps(0)} />
          <Tab label="Make" {...a11yProps(1)} />
          <Tab label="Sell" {...a11yProps(2)} />
        </Tabs>
        <div style={{alignSelf: "center", justifyContent: "center", paddingRight: "20px"}} >
        <Chip label={`$${money}`}/>
        </div>

        </div>

      </AppBar>
      <TabPanel value={value} index={0}>
        <BuyScreen onBuy={onBuy} canAfford={canAfford}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MakeScreen/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SellScreen inventory={inventory} money={money} setMoney={setMoney} setInventory={setInventory}/>
      </TabPanel>
    </div>
  );
}
