---
tag: 8KXR2MB6R5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245222
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that $a_1, a_2, \dots a_{2021}$ are non-negative numbers such that $\sum_{k=1}^{2021} a_k=1$. Prove that
$$ \sum_{k=1}^{2021}\sqrt[k]{a_1 a_2\dots a_k} \leq 3. $$
