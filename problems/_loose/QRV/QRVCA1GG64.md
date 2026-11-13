---
tag: QRVCA1GG64
kind: problem
type: answer
answer: "2021"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189455
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Every positive integer is marked with a number from the set $\{0,1,2\}$, according to the following rule:

$$
\text { if a positive integer } k \text { is marked with } j \text {, then the integer } k+j \text { is marked with } 0 \text {. }
$$

Let $S$ denote the sum of marks of the first 2019 positive integers. Determine the maximum possible value of $S$.

(Ivan Novak)
