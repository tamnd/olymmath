---
tag: JT45NYES1M
kind: problem
type: answer
answer: 967\times1024\leqslantn<968\times1024
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104943
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all natural numbers $n$ such that
$$
\min _{k \in \mathbf{N}}\left(k^{2}+\left[\frac{n}{k^{2}}\right]\right)=1991 \text {, }
$$

where $\left[\frac{n}{k^{2}}\right]$ denotes the greatest integer not exceeding $\frac{n}{k^{2}}$, and $\mathbf{N}$ is the set of positive integers.
