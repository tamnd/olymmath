---
tag: DMNHZJV1ST
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169917
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
a_{n}=\binom{n}{0}+\binom{n}{3}+\binom{n}{6}+\ldots+\binom{n}{3\left[\frac{n}{3}\right]}
$$

and

$$
b_{n}=\binom{n}{0}+\binom{n}{5}+\binom{n}{10}+\ldots+\binom{n}{5\left[\frac{n}{5}\right]}
$$

Show that the sequence $\left(a_{n}-\frac{2^{n}}{3}\right)$ is bounded, but the sequence $\left(b_{n}-\frac{2^{n}}{5}\right)$ is not.
