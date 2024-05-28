import supabase from "./supabase";

export async function getPersonalityImage() {
  const { data, error } = await supabase
    .from("personalityImage")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) {
    console.log(error);
    throw new Error("Kartes could not be loaded");
  }

  return data;
}
