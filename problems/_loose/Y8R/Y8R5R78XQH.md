---
tag: Y8R5R78XQH
kind: problem
type: answer
answer: "-1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=76123
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For real numbers $a, b, c$ it holds that

$$
\frac{a}{b+c}=\frac{b}{c+a}=\frac{c}{a+b}
$$

Determine all possible values of the expression

$$
\frac{a^{3}+b^{3}+c^{3}}{(b+c)^{3}+(c+a)^{3}+(a+b)^{3}}.
$$

(Michal Rolínek)
