import { test } from "@playwright/test";
import { log } from "console";

test.describe("Practice of Describe", async () => {
  test("Practice Test 1", async ({ page }) => {
    console.log("starting practice test 1");
  });
  test("Practice Test 2", async ({ page }) => {
    console.log("starting practice test 2");
  });
});

test("practice test 3", async ({}) => {
  console.log("practice test 3");
});

// test.only("for case in only it will be excute in only case", async ({}) => {
//   console.log("practice test 4");
// });

test.skip("for skip case",async()=>{
    console.log("practice skip 5")
})
