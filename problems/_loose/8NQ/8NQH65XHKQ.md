---
tag: 8NQH65XHKQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269030
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ A_1,A_2,\dots,A_n$ be idempotent matrices with real entries. Prove that:
$$ \text{N}(A_1)+\text{N}(A_2)+\dots+\text{N}(A_n)\geq \text{rank}(I-A_1A_2\dots A_n)$$
$ \text{N}(A)$ is $ \text{dim}(\text{ker(A)})$
