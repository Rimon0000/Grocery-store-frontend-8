import { TCategory } from "@/types";
import CategoryCard from "../ui/CategoryCard";

const TopCategories = async() => {
    const res = await fetch("http://localhost:5000/categories")
    const categories = await res.json()
    // console.log(categories);
    return (
        <div className="w-[90%] mx-auto my-14">
            <h1 className="text-4xl text-center font-bold">Top Categories</h1>
            <p className="text-center text-lg my-2 text-slate-500">Explore our top categories for the finest selection.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
                {
                    categories.data.map((category: TCategory) => <CategoryCard key={category._id} category={category}/>)
                }
            </div>
            
        </div>
    );
};

export default TopCategories;