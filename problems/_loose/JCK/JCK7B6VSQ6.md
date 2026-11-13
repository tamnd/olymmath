---
tag: JCK7B6VSQ6
kind: problem
type: answer
answer: \frac{9}{4}\leqslantS\leqslant\frac{5}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112670
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given non-negative real numbers $a, b, c$ satisfying $a+b+c=1$, let $S=\frac{1}{1+a}+\frac{1}{1+b}+\frac{1}{1+c}$.

Prove:
$$
\frac{9}{4} \leqslant S \leqslant \frac{5}{2} .
$$
