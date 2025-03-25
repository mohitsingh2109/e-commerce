import CategorySchema from "../model/Categoryschema.js";
import slugify from "slugify"

export const createCategoryController = async (req, res) => {
    try{
        const { name } = req.body;
        if (!name) {
            return res.status(401).send({message: "Name is requires"});
        }
        const existingCategory= await CategorySchema.findOne({name});
        if (existingCategory) {
            return res.status(200).send({
                success: false,
                message: "Category already Exists",
            });
        }
        const category = await new CategorySchema({
            name,
            slug: slugify(name),
        }).save();
        res.status(201).send({
            success: true,
            message: "new category created",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error In Category"
        });
    }
} 


//Get all category
export const categoryController = async (req, res) => {
    try {
        const category = await CategorySchema.find({});
        res.status(200).send({
            success: true,
            message: "All categories list",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while getting all categories"
        });
    }
};


//update category
export const updateCategoryController = async (req, res) => {
    try{
        const { name } = req.body;
        const { id } = req.params;
        const category = await CategorySchema.findByIdAndUpdate(
            id,
            { name, slug: slugify(name) },
            { new: true }
        );
        res.status(200).send({
            success: true,
            message: "Category Updated Successfully",
            category,
        });
    }  catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error While Updating Category",
        });
    }
};

//single CAtegory

export const singleCategoryController = async (req, res) => {
    try{
        const category = await CategorySchema.findOne({ slug: req.params.slug });
        res.status(200).send({
            success: true,
            message: "Get Single category Successfully",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while getting single category",
        });
    }
};

//delete category 
export const deleteCategoryController = async (req, res) => {
    try{
         const { id } = req.params;
         await CategorySchema.findByIdAndDelete(id);
         res.status(200).send({
            success: true,
            message: "Category Deleted Successfully",
         }); 
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "error while delecting category",
            error,
        });
    }
};