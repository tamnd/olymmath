---
tag: Z89XC2MSP1
kind: problem
type: answer
answer: 1<<\sqrt[3]{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127336
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the function $f(x)=a^{x}-x(a>1)$.
(1) If $f(3)<0$, try to find the range of values for $a$;
(2) Write a set of numbers $a, x_{0}\left(x_{0} \neq 3\right.$, keep 4 significant digits), such that $f\left(x_{0}\right)<0$ holds.
