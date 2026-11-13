---
tag: QZ9X7VYECQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179858
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A set $M$ will be called special if it simultaneously satisfies the conditions:

- it is non-empty and contains only natural numbers;
- if $x \in M$ and $x$ is even, then $\frac{x}{2} \in M$;
- if $x \in M$ and $x$ is odd, then $3 \cdot x+1 \in M$.

a) Show that if $M$ is a special set and $12 \in M$, then $M$ has at least 10 elements.

b) Show that there are infinitely many special sets that have exactly two odd elements.
