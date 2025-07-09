import MealsDinner from "@/components/meals-page/meals-dinner";
import CuisineCTA from "@/components/meals-page/meals-exprience";
import MealsHeader from "@/components/meals-page/meals-header";
import MealsLunch from "@/components/meals-page/meals-lunch";
import Soups from "@/components/meals-page/meals-soup";
import TeaAndBeverages from "@/components/meals-page/meals-tea";
import MorningBreakfast from "@/components/meals-page/morning-breakfast";

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