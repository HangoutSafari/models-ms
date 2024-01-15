import { getModelById, getModelsData } from "../adapters/supabaseAdapter.js";
import { getDataFrom } from "../dbHelper.js";

export async function getModels(req, res) {
  getDataFrom(req, res, "models");
}

export async function getModel(req, res) {
  getDataFrom(req, res, "models", req.params.id);
}
