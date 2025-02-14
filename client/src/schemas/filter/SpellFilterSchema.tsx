import { z } from "zod";
import { SpellCastingTimeSchema } from "../spell/SpellCastingTimeSchema";
import { SpellComponentsSchema } from "../spell/SpellComponentSchema";
import { SpellDurationSchema } from "../spell/SpellDurationSchema";
import { SpellLevelSchema } from "../spell/SpellLevelSchema";
import { SpellRangeTypeSchema } from "../spell/SpellRangeTypeSchema";
import { SpellSchoolSchema } from "../spell/SpellSchoolSchema";
import { SourceSchema } from "../source/SourceSchema";
import { ClassSchema } from "../class/ClassSchema";

export const SpellFilterSchema = z.object({
    name: z.string(),
    levels: z.array(SpellLevelSchema),
    schools: z.array(SpellSchoolSchema),
    castingTime: z.array(SpellCastingTimeSchema),
    duration: z.array(SpellDurationSchema),
    rangeValue: z.string(),
    rangeType: z.array(SpellRangeTypeSchema),
    components: z.array(SpellComponentsSchema),
    flags: z.nullable(z.union([z.literal("concentration"), z.literal("ritual"), z.literal("upcast"), z.literal("materialCost")])),
    sources: z.array(SourceSchema),
    classes: z.array(ClassSchema),
    onlyOfficial: z.boolean(),
});

export type SpellFilter = z.infer<typeof SpellFilterSchema>;
