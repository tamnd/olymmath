---
tag: Z4F83MMNRE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Miklós Schweitzer
    url: https://artofproblemsolving.com/community/c6h3271697
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42050
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238703
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: schweitzer/2023
    source: hf-ai-mo-aops
    label: 2023 Miklós Schweitzer
---
Let $n\geqslant2$ be a natural number. Show that there is no real number $c{}$ for which $$\exp\left(\frac{T+S}{2}\right)\leqslant c\cdot \frac{\exp(T)+\exp(S)}{2}$$is satisfied for any self-adjoint $n\times n$ complex matrices $T{}$ and $S{}$ . (If $A{}$ and $B{}$ are self-adjoint $n\times n$ matrices, $A\leqslant B$ means that $B-A$ is positive semi-definite.)
