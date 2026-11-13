---
tag: 8HJ4PBTV8Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220736
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the infinite sequence $\{a_i\}$ that extends the pattern

$$1, 1, 2, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5, \dots$$

Formally, $a_i = i-T(i)$ for all $i \geq 1$, where $T(i)$ represents the largest triangular number less than $i$ (triangle numbers are integers of the form $\frac{k(k+1)}2$ for some nonnegative integer $k$). Find the number of indices $i$ such that $a_i = a_{i + 2020}$.

*Proposed by Gabriel Wu*
