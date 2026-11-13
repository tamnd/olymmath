---
tag: AK6Z3NAGEK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90512
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a nonnegative integer and let $r$ be an odd number. Show that there is some $0 \leq i<2^{n}$ such that

$$
\left(\begin{array}{c}
2^{n}+i \\
i
\end{array}\right) \equiv r \left(\bmod 2^{n+1}\right)
$$
