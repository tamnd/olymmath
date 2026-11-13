---
tag: TCXVERTKBQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h3268898
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=71300
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268710
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2000
    source: hf-ai-mo-aops
    label: 2000 Harvard-MIT Mathematics Tournament
---
Let $C_1$ and $C_2$ be two concentric reflective hollow metal spheres of radius $R$ and $R\sqrt3$ respectively. From a point $P$ on the surface of $C_2$ , a ray of light is emitted inward at $30^o$ from the radial direction. The ray eventually returns to $P$ . How many total reflections off of $C_1$ and $C_2$ does it take?
