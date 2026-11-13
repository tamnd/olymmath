---
tag: 9WGFMVWX5Y
kind: problem
type: answer
answer: C.\frac{1}{n}(a_{1}+a_{2}+\cdots+a_{n})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117826
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the process of measuring a certain physical quantity, due to the errors of the instrument and observation, $n$ measurements yield $a_{1}, a_{2}, \cdots, a_{n}$, a total of $n$ data points. The "best approximate value" $a$ of the measured physical quantity is defined as a quantity such that, compared with other approximate values, the sum of the squares of the differences between $a$ and each data point is the smallest. According to this definition, the $a$ derived from $a_{1}, a_{2}, \cdots, a_{n}$ is equal to ( 1).
A. $\sqrt[n]{a_{1} a_{2} \cdots a_{n}}$
B. $\frac{a_{1}+a_{n}}{2}$
C. $\frac{1}{n}\left(a_{1}+a_{2}+\cdots+a_{n}\right)$
D. $\frac{1}{2} a_{n}$
