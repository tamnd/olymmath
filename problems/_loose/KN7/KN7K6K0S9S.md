---
tag: KN7K6K0S9S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78494
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ and $B$ be two assertions. Show the following equivalences:

1) $\operatorname{not}(A$ and $B) \Leftrightarrow(\operatorname{not} A)$ or $(\operatorname{not} B)$.
2) $\operatorname{not}(A$ or $B) \Leftrightarrow(\operatorname{not} A)$ and $(\operatorname{not} B)$.
3) $\operatorname{not}(A \Rightarrow B) \Leftrightarrow A$ and $(\operatorname{not} B)$.
