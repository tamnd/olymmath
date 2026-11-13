---
tag: 9GTQMAWTWK
kind: problem
type: answer
answer: -95^{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89809
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find (one) integer $a$ such that for the polynomial $P(x)=x^{5}+a x$ the statement

$$
\text { " if } n \mid P(k)-P(l) \text { then } n \mid k-l \text {, for all } k, l \in \mathbb{Z} "
$$

holds only for finitely many natural numbers $n$, among which is $n=95$.
