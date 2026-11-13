---
tag: FJD92Y8MK0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h401365
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4062
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206246
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2009
    source: hf-ai-mo-aops
    label: 2009 Romania National Olympiad
---
Let $A,B\in \mathcal{M}_n(\mathbb{C})$ such that $AB=BA$ and $\det B\neq 0$ .

a) If $|\det(A+zB)|=1$ for any $z\in \mathbb{C}$ such that $|z|=1$ , then $A^n=O_n$ .
b) Is the question from a) still true if $AB\neq BA$ ?
