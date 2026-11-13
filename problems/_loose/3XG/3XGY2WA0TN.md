---
tag: 3XGY2WA0TN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93418
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
6・135 Let $N$ be the set of all positive integers, and $f$ a function from $N$ to $N$ itself, such that for any $s$ and $t$ in $N$, the following holds:
$$
f\left(t^{2} f(s)\right)=s(f(t))^{2} \text {. }
$$

Determine the smallest possible value of $f(1998)$ among all such functions $f$.
