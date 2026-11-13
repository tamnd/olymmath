---
tag: MJ0M7ZD9E5
kind: problem
type: answer
answer: \binom{n}{0}^{3}+\binom{n}{1}^{3}+\ldots+\binom{n}{n}^{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190198
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate the coefficient of $x^{n} y^{n}$ if the expression

$$
(1+x)^{n}(1+y)^{n}(x+y)^{n}
$$

is expanded according to the Binomial formula.