---
tag: M0ZRMSSH5G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Tuymaada Olympiad
    url: https://artofproblemsolving.com/community/c6h129406
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29309
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229255
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tuymaada/2000
    source: hf-ai-mo-aops
    label: 2000 Tuymaada Olympiad
---
Polynomial $ P(t)$ is such that for all real $ x$ ,
$$ P(\sin x) + P(\cos x) = 1.
$$
What can be the degree of this polynomial?
