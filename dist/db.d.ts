import mongoose, { Schema, Model } from "mongoose";
export declare const UserModel: Model<{
    Username?: string | null;
    password?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    Username?: string | null;
    password?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    Username?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    Username?: string | null;
    password?: string | null;
}, mongoose.Document<unknown, {}, {
    Username?: string | null;
    password?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    Username?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    Username?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    Username?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const contentMOdel: Model<{
    title?: string | null;
    type?: string | null;
    link?: string | null;
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    title?: string | null;
    type?: string | null;
    link?: string | null;
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title?: string | null;
    type?: string | null;
    link?: string | null;
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title?: string | null;
    type?: string | null;
    link?: string | null;
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, {
    title?: string | null;
    type?: string | null;
    link?: string | null;
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title?: string | null;
    type?: string | null;
    link?: string | null;
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    title?: string | null;
    type?: string | null;
    link?: string | null;
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    title?: string | null;
    type?: string | null;
    link?: string | null;
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const shareModel: Model<{
    hash?: string | null;
    UserId?: mongoose.Types.ObjectId | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    hash?: string | null;
    UserId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    hash?: string | null;
    UserId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    hash?: string | null;
    UserId?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, {
    hash?: string | null;
    UserId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    hash?: string | null;
    UserId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    hash?: string | null;
    UserId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    hash?: string | null;
    UserId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map