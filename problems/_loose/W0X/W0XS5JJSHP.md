---
tag: W0XS5JJSHP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h3052507
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1069
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204735
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2023
    source: hf-ai-mo-aops
    label: 2023 Romania National Olympiad
---
Determine twice differentiable functions $f: \mathbb{R} \rightarrow \mathbb{R}$ which verify relation

$$
\left( f'(x) \right)^2 + f''(x) \leq 0, \forall x \in \mathbb{R}.
$$
