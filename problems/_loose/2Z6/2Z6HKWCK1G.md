---
tag: 2Z6HKWCK1G
kind: problem
type: answer
answer: ']1,1+\frac{1}{}['
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77794
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $d \in \mathbb{N}^{*}$. Let $\mathrm{I}$ be an interval of the form $] \mathrm{a}, \mathrm{b}[$ with $\mathrm{a}<\mathrm{b}$. We define the length of $\mathrm{I}$ as $b-a$. We say that $\mathrm{I}$ is fantastic if for every polynomial $P$ of the form $P(x) = x^{2 \mathrm{~d}} + \sum_{i=0}^{2 \mathrm{~d}-1} a_{i} x^{\mathrm{i}}$ with $\mathrm{a}_{0}, \ldots, \mathrm{a}_{2 \mathrm{~d}-1}$ in $\mathrm{I}$, $P$ has no real roots.

Determine the maximum length of a fantastic interval, and determine all fantastic intervals of maximum length.
