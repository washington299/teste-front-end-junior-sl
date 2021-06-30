import React from "react";
import { useSelector } from "react-redux";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { RootState } from "../state/store";

import Map from "../components/map";

import "./Properties.module.css";

const styles = {
	container: {
		padding: 20,
	},
	paper: {
		width: "100%",
		height: "auto",
	},
	informations: {
		padding: "20px 15px",
	},
	item: {
		margin: "10px 0",
	},
};

type Props = {
	classes: {
		container: string;
		paper: string;
		informations: string;
		item: string;
	};
};

const Properties = (props: Props) => {
	const { classes } = props;

	const { farmsData } = useSelector((state: RootState) => state.farms);

	return (
		<Grid className={classes.container} container spacing={4}>
			{farmsData.map(({ id, name, coordinates, cropType, productivity }) => (
				<Grid key={id} item xs={12} sm={6} lg={4}>
					<Map
						width={"100%"}
						height={300}
						lat={coordinates[0]}
						lng={coordinates[1]}
						description={name}
					/>

					<Paper className={classes.paper}>
						<h1>{name}</h1>
						<Grid className={classes.informations}>
							<Grid className={classes.item} container alignItems="center">
								<h2>Tipo de colheita:</h2>&nbsp;<span>{cropType}.</span>
							</Grid>
							<Grid className={classes.item} container alignItems="center">
								<h2>Produtividade:</h2>&nbsp;
								{productivity.map(({ month, value }) => (
									<React.Fragment key={`month ${month} - value ${value}`}>
										&nbsp;
										<span> Mês {month} -</span>
										&nbsp;
										<span>Valor: {value}.</span>
									</React.Fragment>
								))}
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			))}
		</Grid>
	);
};

export default withStyles(styles)(Properties);
