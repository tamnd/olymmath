---
tag: KCS9VQDYYE
kind: problem
type: answer
answer: t = \sqrt{\frac{a^2 + b^2}{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242039
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a,b$ be constant numbers such that $0<a<b.$ If a function $f(x)$ always satisfies $f'(x) >0$ at $a<x<b,$ for $a<t<b$ find the value of $t$ for which the following the integral is minimized.

$$ \int_a^b |f(x)-f(t)|x\ dx. $$
