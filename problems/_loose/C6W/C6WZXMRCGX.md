---
tag: C6WZXMRCGX
kind: problem
type: answer
answer: 2^{n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77379
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathrm{S}$ be a set of integers. We say that $S$ is non-summable if, for all integers $x$ and $y$ belonging to $S$, the sum $x+y$ does not belong to $S$. For any integer $n \geqslant 1$, we denote $s_{\mathrm{n}}$ as the number of subsets of $\{1,2, \ldots, 2 \mathrm{n}\}$ that are non-summable.

Prove that $s_{n} \geqslant 2^{n}$.
