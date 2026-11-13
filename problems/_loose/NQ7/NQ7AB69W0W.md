---
tag: NQ7AB69W0W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79911
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that the equation

$$
a^{2}+b^{2}=2023
$$

does not admit any solutions.

The question is then to find a judicious choice of $n$, keeping in mind the following heuristics:

- an $n$ that makes a term in the equation disappear,
- for square terms $n=4$ or $n=8$,
- for cubes $n=7$,
- note that a fourth power is also a square,
- etc. (see course on modulos)
