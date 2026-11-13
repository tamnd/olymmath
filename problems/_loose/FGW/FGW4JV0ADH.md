---
tag: FGW4JV0ADH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90178
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=325
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X, Y$, and $Z$ be points on one side of a line $A B$ such that

$$
\triangle X A B \sim \triangle B Y A \sim \triangle A B Z
$$

Prove that $\triangle X Y Z$ is similar to all these triangles.
