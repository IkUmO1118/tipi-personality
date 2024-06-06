import supabase from "./supabase";

export async function getPersonalityImage(id: string) {
  const { data, error } = await supabase
    .from("personalityImage")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Image could not be loaded");
  }

  return data;
}
