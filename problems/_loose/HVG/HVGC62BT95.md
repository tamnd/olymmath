---
tag: HVGC62BT95
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81992
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S \subset \mathbb{N}^{*}$. Show that we are necessarily in one of the following two situations:

- There exist $F, G \subset S$ finite, $F \neq G$, such that $\sum_{x \in F} \frac{1}{x}=\sum_{x \in G} \frac{1}{x}$
- There exists $r$ a rational number in $] 0,1\left[\right.$ such that for all $F \subset S$ finite, we have $\sum_{x \in F} \frac{1}{x} \neq r$.
