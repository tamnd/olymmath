---
tag: PS4KZMNFCT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Peru MO (ONEM)
    url: https://artofproblemsolving.com/community/c6h2873279
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50638
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246249
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-mo/2008
    source: hf-ai-mo-aops
    label: 2008 Peru MO (ONEM)
---
All points in the plane that have both integer coordinates are painted, using the colors red, green, and yellow. If the points are painted so that there is at least one point of each color.
Prove that there are always three points $X$ , $Y$ and $Z$ of different colors, such that $\angle XYZ = 45^{\circ} $
