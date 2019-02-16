import {ReactNode} from "react";
import * as React from "react";
import {
	Image,
	View,
	Text,
	StyleSheet,
	Dimensions,
	TextStyle,
	ViewStyle,
	ScrollViewComponent,
	ScrollView
} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "./EnhancedComponent";
import {ButtonWrapper, IButtonWrapperProps, IButtonWrapperState} from "./ButtonWrapper";
import ShopItemComponent from "./ShopItemComponent";

export default class ShopComponentList extends EnhancedComponent<IShopComponentListProps, IShopComponentListState> {

	public static defaultProps: IShopComponentListProps = {}

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({});

	constructor(props: IShopComponentListProps) {
		super(props);
		this.state = {
			...this.state,
		};

		this.createListOfPrices = this.createListOfPrices.bind(this);
	}

	private createListOfPrices(prices: any): ReactNode {
		return prices.map((price: any, i: number) => {
			return (
				<View
					style={{
						width: "33%",
					}}
				>
					<ShopItemComponent/>
				</View>
			);
		});
	}

	public render(): ReactNode {
		const prices: ReactNode = this.createListOfPrices([1, 2, 3, 4, 5]);

		return (
			<ScrollView>
				<View
					style={{
						width: "100%",
						flexDirection: "row",
						flexWrap: "wrap",
					}}
				>
					{prices}
				</View>
			</ScrollView>
		);
	}
}

export interface IShopComponentListProps extends IEnhancedComponentsProps {
}

export interface IShopComponentListState extends IEnhancedComponentsState {

}

interface IStyle {
}