---
tag: FXPGTR9124
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145856
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n \geq 5$, find the smallest integer $m$, such that there exist two sets of integers $A$ and $B$, simultaneously satisfying the following conditions:
(1) $|\mathrm{A}|=\mathrm{n},|\mathrm{B}|=\mathrm{m}$, and $\mathrm{A} \subseteq \mathrm{B}$;
(2) For any two distinct elements $x, y$ in $B$, $x+y \in B$ if and only if $x, y \in A$.
