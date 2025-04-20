import { pgEnum, uuid } from "drizzle-orm/pg-core";
import { integer, pgTable, text } from "drizzle-orm/pg-core";
import { CourseSectionTable } from "./courseSection";
import { id, createdAt, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";

export const lessonStatuses = ["public", "private", "preview"] as const;
export type LessonStatus = (typeof lessonStatuses)[number];
export const LessonStatusEnum = pgEnum("lesson_status", lessonStatuses);

export const LessonTable = pgTable("lessons", {
  id,
  name: text().notNull(),
  description: text(),
  youtubeVideoId: text().notNull(),
  order: integer().notNull(),
  status: LessonStatusEnum().notNull().default("private"),
  courseSectionId: uuid()
    .notNull()
    .references(() => CourseSectionTable.id, { onDelete: "cascade" }),
  createdAt,
  updatedAt,
});

export const LessonRelationships = relations(LessonTable, ({ one }) => ({
  section: one(CourseSectionTable, {
    fields: [LessonTable.courseSectionId],
    references: [CourseSectionTable.id],
  }),
}));
