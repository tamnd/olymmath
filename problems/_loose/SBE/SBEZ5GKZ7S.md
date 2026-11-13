---
tag: SBEZ5GKZ7S
kind: problem
type: answer
answer: f(n)=n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We denote by $\mathbb{N}^{*}$ the set of strictly positive integers. Find all functions $f: \mathbb{N}^{*} \rightarrow \mathbb{N}^{*}$ such that

$$
m^{2}+f(n) \mid m f(m)+n
$$

for all strictly positive integers $m$ and $n$.
