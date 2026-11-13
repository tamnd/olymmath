---
tag: JJCEM2E579
kind: problem
type: answer
answer: \sum_{i=1}^5 a_i^2 \leq \frac{6}{5}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247343
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=89
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We consider the real numbers $a _ 1, a _ 2, a _ 3, a _ 4, a _ 5$ with the zero sum and the property that $| a _ i - a _ j | \le 1$ , whatever it may be $i,j \in \{1, 2, 3, 4, 5 \} $. Show that $a _ 1 ^ 2 + a _ 2 ^ 2 + a _ 3 ^ 2 + a _ 4 ^ 2 + a _ 5 ^ 2 \le \frac {6} {5}$ .
