---
tag: T556XY0WHY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a natural number $k$, and sets $A, B$, and $C$ such that

$$
|A \triangle B|=|B \triangle C|=|C \triangle A|=2 k
$$

Prove that there exists a unique set $D$ for which

$$
|A \triangle D|=|B \triangle D|=|C \triangle D|=k
$$

(For sets $X$ and $Y$, we denote $X \triangle Y=(X \backslash Y) \cup(Y \backslash X)$, which is called the symmetric difference of sets $X$ and $Y$.)
