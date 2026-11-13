---
tag: CGE95TWJAG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82474
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find an example of a function $f: \mathbb{Q}_{+}^{*} \rightarrow \mathbb{Q}_{+}^{*}$ such that

$$
\forall x, y \in \mathbb{Q}_{+}^{*}, f(x f(y))=\frac{f(x)}{y}
$$
