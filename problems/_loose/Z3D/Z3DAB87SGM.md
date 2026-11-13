---
tag: Z3DAB87SGM
kind: problem
type: answer
answer: \frac{3}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147948
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are real numbers $a$ and $b$ such that for every positive number $x$, we have the identity
$$
\tan^{-1} \bigl( \frac{1}{x} - \frac{x}{8} \bigr) + \tan^{-1}(ax) + \tan^{-1}(bx)
= \frac{\pi}{2} .
$$
(Throughout this equation, $\tan^{-1}$ means the inverse tangent function, sometimes written $\arctan$.) What is the value of $a^2 + b^2$?
