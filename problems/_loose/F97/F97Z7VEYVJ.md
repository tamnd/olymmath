---
tag: F97Z7VEYVJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Recurrence relation verified by the Catalan numbers)

Show that, for all $n \in \mathbb{N}$ :

$$
\mathcal{C}_{n}=\sum_{k=0}^{n-1} \mathcal{C}_{k} \mathcal{C}_{n-k-1}
$$
