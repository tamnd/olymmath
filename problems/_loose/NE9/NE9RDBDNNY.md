---
tag: NE9RDBDNNY
kind: problem
type: answer
answer: '{\frac{1}{n},\frac{2}{n},\ldots,\frac{2n^{2}-1}{n}}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75231
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a given natural number $n$, solve the equation in the domain of positive real numbers

$$
\left\lfloor x \sqrt{n^{2}-1}\right\rfloor=n x-1 .
$$

(The symbol $\lfloor r\rfloor$ denotes the greatest integer that does not exceed the number $r$.)
