---
tag: 4KJNW7T6YK
kind: problem
type: answer
answer: (1;(2n+5)/4),n=-8;-7;-6,\ldots,-1,0,1,2,3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5069
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Evaluating each part of the inequality, we get

$$
2 \leqslant \operatorname{tg}^{2} \pi(x-y)+\operatorname{ctg}^{2} \pi(y-x)=\sqrt{\frac{2 x}{x^{2}+1}}+1 \leqslant 2
$$

Equality is possible only when $x=1, \operatorname{tg}^{2} \pi(y-1)=1$.
