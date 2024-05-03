import { MenuItem as IMenuItem } from "@/types"; // Avoiding ambiguity
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
    menuItem: IMenuItem;
    addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
    return (
        <Card className="cursor-pointer" onClick={addToCart}>
            <CardHeader>
                <CardTitle>{menuItem.name}</CardTitle>
            </CardHeader>
            <CardContent className="font-bold">
                ₹{(menuItem.price).toFixed(2)}
            </CardContent>
        </Card>
    );
};

export default MenuItem; // Keeping the same component name
