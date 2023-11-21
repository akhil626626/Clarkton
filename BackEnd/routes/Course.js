const express = require("express");
const router = express.Router();


// category Controllers
const {createCategory, showAllCategories, categoryPageDetails, createCategoryRequest, getCategoryRequests, declineCategoryApprovalRequest, approveCategoryApprovalRequest} = require("../controllers/Category")
const {createCourse, showAllCourses, getCourseDetails, editCourse, getInstuctorCourseDetails, deleteCourse, courseBought} = require("../controllers/Course");

// importing middlewares
const {auth, isBuyer, isSeller, isAdmin} = require("../middlewares/Auth");


/// category ///
// create category --> can only created by Admin
router.post("/createCategory", auth, isAdmin, createCategory);
// showAllCategories
router.get("/getAllCategories", showAllCategories);
// CategoryPageDetails
router.post("/getcategoryPageDetails", categoryPageDetails);
router.post("/createCategoryRequest", auth, createCategoryRequest)
router.post("/getCategoryRequest", auth, isAdmin, getCategoryRequests)
router.delete("/declineCategoryApprovalRequest", auth, isAdmin, declineCategoryApprovalRequest)
router.post("/approveCategoryApprovalRequest", auth, isAdmin, approveCategoryApprovalRequest)

router.post("/createCourse", auth, createCourse);
router.get("/getInstuctorCourseDetails", auth, getInstuctorCourseDetails);
router.delete("/deleteCourse", auth, deleteCourse);
router.put("/editCourse", auth, editCourse)
router.post("/getCourseDetails", getCourseDetails);
router.delete("/deleteCourse", auth, deleteCourse);
router.get("/getAllCategories", showAllCategories);
router.post("/getcategoryPageDetails", categoryPageDetails);
                

module.exports = router;
