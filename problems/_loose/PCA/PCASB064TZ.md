---
tag: PCASB064TZ
kind: problem
type: answer
answer: "322"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=22671
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A finite sequence of numbers $x_{1}, x_{2}, \ldots, x_{N}$ has the following property:

$$
x_{n+2}=x_{n}-\frac{1}{x_{n+1}} \text { for all } 1 \leq n \leq N-2 \text {. }
$$

Find the maximum possible number of terms in this sequence if $x_{1}=20 ; x_{2}=16$.
