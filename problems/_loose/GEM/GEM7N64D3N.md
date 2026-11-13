---
tag: GEM7N64D3N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Balkan MO Shortlist
    url: https://artofproblemsolving.com/community/c6h3071457
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21327
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=222685
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl/2022
    source: hf-ai-mo-aops
    label: 2022 Balkan MO Shortlist
---
Alice is drawing a shape on a piece of paper. She starts by placing her pencil at the origin, and then draws line segments of length one, alternating between vertical and horizontal segments. Eventually, her pencil returns to the origin, forming a closed, non-self-intersecting shape. Show that the area of this shape is even if and only if its perimeter is a multiple of eight.
