---
tag: NH7QJBRQTJ
kind: problem
type: answer
answer: \left(m + 1, \frac{1}{m} + 1, \frac{1}{m} + 1, \ldots, \frac{1}{m} + 1\right)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248234
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$ be a positive integer and $n=m^2+1$. Determine all real numbers $x_1,x_2,\dotsc ,x_n$ satisfying
$$x_i=1+\frac{2mx_i^2}{x_1^2+x_2^2+\cdots +x_n^2} \text{for all }i=1,2,\dotsc ,n.$$
