import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { id, createdAt, updatedAt } from "../schemaHelpers";
import { CourseProductTable } from "./courseProduct";
export const CourseTable = pgTable("courses", {
  id,
  name: text("name").notNull(),
  description: text().notNull(),
  createdAt,
  updatedAt,
});

export const CourseRelationships = relations(CourseTable, ({ many }) => ({
  courseProducts: many(CourseProductTable),
}));
