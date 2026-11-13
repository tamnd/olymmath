---
tag: RE9S8Y0WTQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93685
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let set $M$ consist of an odd number of elements. If for each element $x$ in set $M$, there is a uniquely determined subset $H_{x} \subseteq M$ corresponding to $x$, and the following conditions are satisfied:
(1) For each $x \in M$, we have $x \in H_{x}$;
(2) For any $x, y \in M, y \in H_{x}$ if and only if $x \in H_{y}$,
Prove: There is at least one $H_{x}$ whose number of elements is odd.
