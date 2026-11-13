---
tag: R1PXB8ZA2S
kind: problem
type: answer
answer: \lceil\frac{3n}{5}\rceil
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111080
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $[x]$ denote the greatest integer not exceeding the real number $x$. Let the sets $A_{1}, A_{2}, \cdots, A_{n}$ all be three-element subsets of the set $\{1,2, \cdots, n\}$. Prove: in the set $\{1,2, \cdots, n\}$ there exist $\left[\frac{2 n}{5}\right]$ elements, which, when colored, ensure that each set $A_{1}, A_{2}, \cdots, A_{n}$ has at least one element that is not colored.
