import MealsDinner from "@/components/meals/meals-dinner";
import CuisineCTA from "@/components/meals/meals-exprience";
import MealsHeader from "@/components/meals/meals-header";
import MealsLunch from "@/components/meals/meals-lunch";
import Soups from "@/components/meals/meals-soup";
import TeaAndBeverages from "@/components/meals/meals-tea";
import MorningBreakfast from "@/components/meals/morning-breakfast";

export default function MealsHome() {
    return (
        <>
            <MealsHeader />
            <MorningBreakfast />
            <MealsLunch />
            <MealsDinner />
            <TeaAndBeverages />
            <Soups />
            <CuisineCTA />
        </>
    )
}