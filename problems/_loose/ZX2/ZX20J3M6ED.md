---
tag: ZX20J3M6ED
kind: problem
type: answer
answer: 1-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161352
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function is

$$
f(x)=\frac{a x+2}{3 x-\frac{1}{a}}
$$

Determine all possible values of the real parameter $a$ such that for all real values of $x$ for which $f(x)$ is defined, it is also true that $f(f(x))$ is defined and $f(f(x))=x$.
