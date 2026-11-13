---
tag: TS4XBRR2N1
kind: problem
type: answer
answer: "82307"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75645
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $f: \mathbb{N} \rightarrow \mathbb{N}$ is given such that $f(n)=1$ if $n$ is odd, and $f(n)=k$ for every even number $n=2^{k} l$, where $k$ is a natural number and $l$ is an odd number. Determine the largest natural number $n$ for which

$$
f(1)+f(2)+\ldots+f(n) \leqq 123456 .
$$
