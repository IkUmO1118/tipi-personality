import { KarteProps } from "@/utils/helper";
import supabase from "./supabase";

export async function getKartes() {
  const { data, error } = await supabase.from("kartes").select("*");
  if (error) {
    console.log(error);
    throw new Error("Kartes could not be loaded");
  }

  return data;
}

export async function getKarte(id: number) {
  const { data, error } = await supabase
    .from("kartes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Karte could not be loaded");
  }

  return data;
}

export async function createKarte(obj: KarteProps) {
  const { data, error } = await supabase
    .from("kartes")
    .insert(obj)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Karte could not be created!");
  }

  return data;
}
