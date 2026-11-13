---
tag: ZR1F84ZAD1
kind: problem
type: answer
answer: \prod_{i<j} (a_j - a_i) \text{ is divisible by } \prod_{i<j} (j - i)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254435
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that for any integer $n\geq2$ and all integers $a_{1},a_{2},...,a_{n}$ the product $\prod_{i<j}{(a_{j}-a_{i})}$ is divisible by $\prod_{i<j}{(j-i)}$ .
