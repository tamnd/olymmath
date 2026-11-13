---
tag: D7BDH6QN39
kind: problem
type: answer
answer: ()proof,(b)(16,9,4)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85565
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call a triplet $(x, y, z)$ good if $x, y$, and $z$ are positive integers with $y \geqslant 2$ and it also holds that $x^{2}-3 y^{2}=z^{2}-3$.

An example of a good triplet is $(19,6,16)$, because it holds: $6 \geqslant 2$ and $19^{2}-3 \cdot 6^{2}=16^{2}-3$.

(a) Show that for every odd number $x \geqslant 5$ there exist at least two good triplets $(x, y, z)$.

(b) Find a good triplet $(x, y, z)$ where $x$ is even.
