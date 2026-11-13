---
tag: PB3GWSDZVG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73952
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a positive integer $n$ is clever if there exist positive integers $a, b, c$ and $d$, not necessarily distinct, such that:

$$
n=\frac{a^{2}-b^{2}}{c^{2}+d^{2}}
$$

For example, 12 is clever, since:

$$
12=\frac{16^{2}-4^{2}}{4^{2}+2^{2}}
$$

Show that all positive integers are clever.
