---
tag: XR7T7DTRKP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2800897
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=94
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147773
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2022
    source: hf-ai-mo-aops
    label: 2022 Caucasus Mathematical Olympiad
---
There are $n > 2022$ cities in the country. Some pairs of cities are connected with straight two-ways airlines. Call the set of the cities {\it unlucky}, if it is impossible to color the airlines between them in two colors without monochromatic triangle (i.e. three cities $A$ , $B$ , $C$ with the airlines $AB$ , $AC$ and $BC$ of the same color).

The set containing all the cities is unlucky. Is there always an unlucky set containing exactly 2022 cities?
