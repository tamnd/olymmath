---
tag: YSSHDT5YXF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=175895
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that the product of $n$ consecutive integers is always divisible by $n!$. That is, if $m>n>0$, $m, n$ are integers, then

$$
\binom{m}{n}=\frac{m!}{n!(m-n)!}=\frac{(m-n+1)(m-n+2) \ldots m}{1 \cdot 2 \ldots n}
$$

is always an integer.
