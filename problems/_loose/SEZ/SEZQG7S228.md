---
tag: SEZQG7S228
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213307
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose a class contains $100$ students. Let, for $1\le i\le 100$, the $i^{\text{th}}$ student have $a_i$ many friends. For $0\le j\le 99$ let us define $c_j$ to be the number of students who have strictly more than $j$ friends. Show that \begin{align*} & \sum_{i=1}^{100}a_i=\sum_{j=0}^{99}c_j \end{align*}
