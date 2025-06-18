const aiServices = require("../services/ai.services")


module.exports.getResponse = async (req, res) => {
   try {
     const code = req.body.code;
     console.log("Prompt received:", code);
 
     if (!code) {
       return res.status(400).json({ error: "code is missing" });
     }
 
     const response = await aiServices(code);
     console.log("AI Response:", response);
 
     res.status(200).json(response);
   } catch (error) {
     console.error("🔥 Error in getResponse:", error);
     res.status(500).json({ error: "Internal server error", details: error.message });
   }
 };
 