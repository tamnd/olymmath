---
tag: QC8F6TGBFP
kind: problem
type: answer
answer: "16"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87536
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the largest natural number $n$ for which there exists an $n$-digit number $\overline{z_{1} z_{2} \ldots z_{n}}$ (in the decimal system) with the following properties:

(a) $z_{1}, z_{2}, \ldots, z_{n}$ are distinct numbers;

(b) for every $j \leq n, (1 \cdot 2 \cdot 3 \cdot \ldots \cdot j) \mid \overline{z_{1} z_{2} \ldots z_{j}}$.

For that $n$, find all $n$-digit numbers $\mathrm{s}$ with the desired properties.
