це приклад вхідного обєкту
id видаляємо
url заміняємо на slug
sub заміняємо на type

"apollo-2": {
"id": "apollo-2",
"meta": {
"title": { "uk": "Письмовий стіл Apollo 2", "en": "Desk Apollo 2" },
"description": {
"uk": "Письмовий стіл Apollo 2 у мінімалістичному стилі",
"en": "Desk Apollo 2 in a minimalistic style"
},
"keywords": {
"uk": "стіл, робочий стіл, письмовий стіл",
"en": "table, work desk, writing desk"
}
},
"url": "apollo-2",
"category": "tables",
"collection": null,
"name": "Apollo 2",
"sub": { "uk": "Письмовий стіл", "en": "Desk" },
"description": {
"uk": "Письмовий стіл Apollo 2 ідеально підійде для домашнього кабінету або офісу. Стільниця може бути виконана в різних кольорах. Зручні висувні ящики допоможуть організувати зберігання на робочому місці.",
"en": "The Apollo 2 desk is perfect for a home office or workplace. The tabletop can be made in various colors. Convenient drawers help organize storage at the workspace."
},
"cover": "apollo_2_cover.jpg",
"top_image": "apollo_2_top_image.jpg",
"promo": [
{
"type": "col-2",
"images": [
{
"img": "apollo_2_promo_img_1.jpg",
"alt": { "uk": "Робочий стіл Apollo 2", "en": "Work desk Apollo 2" }
},
{
"img": "apollo_2_promo_img_2.jpg",
"alt": { "uk": "Робочий стіл Apollo 2", "en": "Work desk Apollo 2" }
}
]
},
{
"type": "col-1",
"images": [
{
"img": "apollo_2_promo_img_3.jpg",
"alt": { "uk": "Робочий стіл Apollo 2", "en": "Work desk Apollo 2" }
}
]
}
],
"drawings": ["apollo_2_drawing_01.jpg"],
"models": [
{
"title": "Apollo 2",
"file": "Lansot_Apollo-2.zip"
}
],
"top": true,
"showroom": false,
"start_price": "17,200"
},

це схеми в які ми будемо експортувати

model Product {
id String @id @default(cuid())
locale String
name String
slug String
categoryId String?
category Category? @relation(fields: [categoryId], references: [id], onDelete: Cascade)
collectionId String?
collection Collection? @relation(fields: [collectionId], references: [id], onDelete: Cascade)
type String?
description String?
cover Image? @relation("CoverImage", fields: [imageId], references: [id])
imageId String? @unique
promotion ProductPromotion[]
technical Image[] @relation("Technical")
files File[]
top Boolean
showroom Boolean
price Float?
createdAt DateTime @default(now())
updatedAt DateTime @default(now())

@@unique([slug, locale])
}

model ProductPromotion {
id String @id @default(cuid())
layout String
images Image[] @relation("PromotionImages")
Product Product? @relation(fields: [productId], references: [id])
productId String?
createdAt DateTime @default(now())
updatedAt DateTime @default(now())
}

model File {
id String @id @default(cuid())
path String
Product Product? @relation(fields: [productId], references: [id])
productId String?
createdAt DateTime @default(now())
updatedAt DateTime @default(now())
}

model Image {
id String @id @default(cuid())
path String
imageMetaId String
imageMeta ImageMeta @relation(fields: [imageMetaId], references: [id], onDelete: Cascade)
ProductCover Product? @relation("CoverImage")
TechnicalProducts Product[] @relation("Technical")
ProductPromotions ProductPromotion[] @relation("PromotionImages")
createdAt DateTime @default(now())
updatedAt DateTime @default(now())

@@unique([id, imageMetaId])
}

model ImageMeta {
id String @id @default(cuid())
locale String
title String?
alt String?
createdAt DateTime @default(now())
updatedAt DateTime @default(now())
Image Image[]

@@unique([id])
}
