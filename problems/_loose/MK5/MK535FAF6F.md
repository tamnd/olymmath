---
tag: MK535FAF6F
kind: problem
type: answer
answer: AB + CD > \max(AM + DM, BN + CN)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218962
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Points $M$ and $N$ are the midpoints of the sides $BC$ and $AD$, respectively, of a convex quadrilateral $ABCD$. Is it possible that
$$
AB+CD>\max(AM+DM,BN+CN)?
$$

*(Folklore)*
