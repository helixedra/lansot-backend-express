import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import categoryRoutes from "./routes/categories";
import pageRoutes from "./routes/pages";
import productRoutes from "./routes/products";
import contentRoutes from "./routes/contents";
import galleryRoutes from "./routes/galleries";
import staticRoutes from "./routes/static";
import collectionRoutes from "./routes/collections";
import materialRoutes from "./routes/materials";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/pages", pageRoutes);
app.use("/api/products", productRoutes);
app.use("/api/contents", contentRoutes);
app.use("/api/galleries", galleryRoutes);
app.use("/api/static", staticRoutes);
app.use("/api/collections", collectionRoutes);
app.use("/api/materials", materialRoutes);

const port = 4040;
app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}`)
);
