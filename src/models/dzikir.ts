// auth.model.ts
import { Elysia, t } from 'elysia'

export const dzikirModel = new Elysia()
    .model({
        dzikir: t.Object({
            mode: t.Optional(t.String()),
        })
    })