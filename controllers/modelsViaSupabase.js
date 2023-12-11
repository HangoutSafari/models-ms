import { getModelById, getModelsData } from "../adapters/supabaseAdapter.js";

export async function getModels(req, res) {
  try {
    const data = await getModelsData();
    res.status(200).json(data);
  } catch (err) {
    res.send(`error in viaSupabase: ${err}`);
  }
}

export async function getModel(req, res) {
  try {
    const data = await getModelById(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    res.send(`error in viaSupabase: ${err}`);
  }
}
