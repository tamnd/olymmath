---
tag: 5AGNM5VRHP
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177686
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0000.parquet#row=259
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all real numbers $a$ for which the equation $x^{2}+a x+3 a^{2}-$ $7 a-19=0$ has real roots $x_{1}$ and $x_{2}$ such that

$$
\frac{1}{x_{1}-2}+\frac{1}{x_{2}-2}=-\frac{2 a}{13}
$$

Peter Boyvalenkov
