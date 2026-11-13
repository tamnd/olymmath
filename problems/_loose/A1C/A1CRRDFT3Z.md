---
tag: A1CRRDFT3Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203553
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that, for any fixed integer $ n \geq 1,\,$ the sequence
$$2, 2^2, 2^{2^2}, 2^{2^{2^2}}, \ldots \pmod{n}$$
is eventually constant.
[The tower of exponents is defined by $a_1 = 2, a_{i+1} = 2^{a_i}$. Also $a_i \pmod{n}$ means the remainder which results from dividing $ a_i\,$ by $ n$.]
