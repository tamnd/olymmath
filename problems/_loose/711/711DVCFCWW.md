---
tag: 711DVCFCWW
kind: problem
type: answer
answer: (0;1;2;4),(0;2;3;4),(1;2;3;4)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182754
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are looking for all quadruples $\left(n_{1} ; n_{2} ; n_{3} ; n_{4}\right)$ of natural numbers $n_{i}(i=1 ; 2 ; 3 ; 4)$ with $n_{1}<n_{2}<n_{3}<$ $n_{4}$ (where $0 \in N$), for which

$$
z=n_{1}!\cdot n_{2}!\cdot n_{3}!\cdot n_{4}!-32
$$

is a perfect square.
