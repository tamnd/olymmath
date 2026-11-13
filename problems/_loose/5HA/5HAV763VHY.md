---
tag: 5HAV763VHY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h287053
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44822
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241060
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2002
    source: hf-ai-mo-aops
    label: 2002 Irish Math Olympiad
---
Let $ ABC$ be a triangle with integer side lengths, and let its incircle touch $ BC$ at $ D$ and $ AC$ at $ E$ . If $ |AD^2-BE^2| \le 2$ , show that $ AC=BC$ .
