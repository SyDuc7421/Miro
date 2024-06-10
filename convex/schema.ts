import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  boards: defineTable({
    title: v.string(),
    orgId: v.string(),
    authorId: v.string(),
    authorName: v.string(),
    imageUrl: v.string(),
  })
    .index("by_Org", ["orgId"])
    .searchIndex("saerch_title", {
      searchField: "title",
      filterFields: ["orgId"],
    }),
});