import os
from google import genai
from google.genai import types

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

# Define the prompts for AI transformation company imagery
# Style: Risograph/grainy illustration, coral red-orange (#E85A3C) accent, warm gray background
prompts = [
    {
        "name": "riso-hand-lightbulb",
        "prompt": "Risograph style grainy textured illustration. A human hand reaching up holding or releasing a glowing lightbulb that's transforming into geometric data particles. Coral red-orange and white/cream colors on warm taupe gray background. Retro print texture, grain effect, limited color palette. Minimalist composition. No text."
    },
    {
        "name": "riso-brain-circuit",
        "prompt": "Risograph style grainy textured illustration. A human head profile silhouette with brain visible, neural pathways connecting to geometric circuit patterns flowing outward. Coral red-orange and white/silver metallic tones on warm taupe gray background. Retro print aesthetic, heavy grain texture. No text."
    },
    {
        "name": "riso-hands-building",
        "prompt": "Risograph style grainy textured illustration. Two hands assembling or stacking abstract geometric building blocks and shapes, suggesting construction and capability building. Coral red-orange and white/cream colors on warm taupe gray background. Vintage print texture, grain effect. No text."
    },
    {
        "name": "riso-eye-telescope",
        "prompt": "Risograph style grainy textured illustration. A stylized eye or figure looking through a telescope or lens at abstract data visualizations and geometric shapes. Coral red-orange and white/cream colors on warm taupe gray background. Retro risograph print aesthetic, heavy grain. No text."
    },
    {
        "name": "riso-transformation",
        "prompt": "Risograph style grainy textured illustration. A human figure silhouette transitioning or morphing into geometric abstract shapes and patterns, representing transformation. Coral red-orange and white/cream tones on warm taupe gray background. Vintage print texture, limited color palette. No text."
    }
]

output_dir = "/Users/davidking/Projects/ri-web/public/images/generated"
os.makedirs(output_dir, exist_ok=True)

for item in prompts:
    print(f"Generating: {item['name']}...")
    try:
        response = client.models.generate_content(
            model="gemini-3-pro-image-preview",
            contents=[item["prompt"]],
            config=types.GenerateContentConfig(
                response_modalities=['TEXT', 'IMAGE'],
                image_config=types.ImageConfig(
                    aspect_ratio="4:3"
                ),
            ),
        )

        for part in response.parts:
            if part.inline_data:
                image = part.as_image()
                filepath = f"{output_dir}/{item['name']}.jpg"
                image.save(filepath)
                print(f"  Saved: {filepath}")
    except Exception as e:
        print(f"  Error: {e}")

print("\nDone!")
