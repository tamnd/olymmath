---
tag: 1CW7VWPGX7
kind: problem
type: answer
answer: a_{n}=n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131599
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{a_{n}\right\}$ has the sum of the first $n$ terms $S_{n}$ satisfying
$$
a_{n}=\frac{1}{2}+\frac{1}{2} \sqrt{1+8 S_{n-1}} (n \geqslant 2) \text {. }
$$

Also, $a_{1}=1$, find the general term formula of the sequence.
