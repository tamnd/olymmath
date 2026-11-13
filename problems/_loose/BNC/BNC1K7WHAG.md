---
tag: BNC1K7WHAG
kind: problem
type: answer
answer: \lceil 2022! \cdot \phi \rceil
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231889
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1,a_2,\dots$ be a sequence of integers satisfying $a_1=2$ and:
$$a_n=\begin{cases}a_{n-1}+1, & \text{ if }n\ne a_k \text{ for some }k=1,2,\dots,n-1; \\ a_{n-1}+2, & \text{ if } n=a_k \text{ for some }k=1,2,\dots,n-1. \end{cases}$$
Find the value of $a_{2022!}$.
