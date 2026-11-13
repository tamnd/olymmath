---
tag: GMK9YE3PR3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243277
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $n>2$ is an integer and $x_1, \ldots ,x_n$ are positive reals such that
$$ \frac 1{x_1} + \frac 1{x_2} + \cdots + \frac 1{x_n} = n $$ then the following inequality takes place
$$ \frac{x_2^2+\cdots+x_n^2}{n-1}\cdot \frac {x_1^2+x_3^2+\cdots +x_n^2} {n-1} \cdots \frac{x_1^2+\cdots+x_{n-1}^2}{n-1}\geq \left(\frac{x_1^2+...+x_n^2}{n}\right)^{n-1}. $$
