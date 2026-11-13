---
tag: E3C0KVSCWF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204682
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each of the natural numbers from $1$ to $n$ is colored either red or blue, with each color being used at least once. It turns out that:
- every red number is a sum of two distinct blue numbers; and
- every blue number is a difference between two red numbers.
Determine the smallest possible value of $n$ for which such a coloring exists.
