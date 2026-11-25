import { createFileRoute } from "@tanstack/react-router";
import { FavouritesPage } from "@/features/favourites/favourites-page";

export const Route = createFileRoute("/_app/favourites/")({
  component: FavouritesPage,
});
