---
tag: TA8WDQE14Z
kind: problem
type: answer
answer: "3053"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154364
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A function $g: \mathbb{N} \rightarrow \mathbb{N}$ satisfies the following:
(a) If $m$ is a proper divisor of $n$, then $g(m)<g(n)$.
(b) If $m$ and $n$ are relatively prime and greater than 1 , then
$$
g(m n)=g(m) g(n)+(n+1) g(m)+(m+1) g(n)+m+n \text {. }
$$

Find the least possible value of $g(2016)$.
