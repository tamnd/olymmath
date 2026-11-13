---
tag: EZRPB6NS5M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=259598
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that, for any sequence $a_1,a_2,\ldots$ of real numbers, the two conditions
$$
\lim_{n\to\infty}\frac{e^{(ia_1)} + e^{(ia_2)} + \cdots + e^{(ia_n)}}n = \alpha
$$
and
$$
\lim_{n\to\infty}\frac{e^{(ia_1)} + e^{(ia_2)} + \cdots + e^{(ia_{n^2})}}{n^2} = \alpha
$$
are equivalent.
