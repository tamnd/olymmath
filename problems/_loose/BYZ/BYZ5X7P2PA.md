---
tag: BYZ5X7P2PA
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166558
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We know about the sequence $c_{1}, c_{2}, \ldots, c_{n}, \ldots$ that $c_{1}=0$ and for $n=1,2, \ldots$

$$
c_{n+1}=\left(\frac{n}{n+1}\right)^{2} \cdot c_{n}+\frac{6 n}{(n+1)^{2}}
$$

Prove that the limit of the sequence is 3.
