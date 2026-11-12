---
tag: WEA6C0HYY9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=23991
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $T$ be some positive integer number composed of $N$ zeros and ones. Consider all $n$-digit numbers (where $n<N$) formed by any $n$ consecutive digits of the number $T$; there will be $N-n+1$ such numbers [they will start from the 1st, 2nd, 3rd, ..., $(N-n+1)$-th digit of the number $\left.2^{1}\right)$ ].

Prove that the number of digits $N$ and the number $T$ can be chosen such that the $n$-digit numbers obtained from $T$ in the specified manner are all distinct and that among them are all possible $n$-digit numbers composed of zeros and ones.
