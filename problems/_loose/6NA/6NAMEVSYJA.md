---
tag: 6NAMEVSYJA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Introduces the notation $[x]^{n}=x(x+1) \cdots(x+n-1)$. Here $x \in \mathbf{R}, n \in \mathbf{N}_{+}$, and it is stipulated that $[x]^{0}=$ 1. Prove:
$$
[x+y]^{n}=\sum_{k=0}^{n} C_{n}^{k}[x]^{k}[y]^{n-k} .
$$
