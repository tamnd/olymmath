---
tag: R0JF041EXC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167288
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's prove that for any natural number $k$, any natural number $n$ can be uniquely represented in the following form:

$$
n=\binom{a_{1}}{1}+\binom{a_{2}}{2}+\binom{a_{3}}{3}+\ldots+\binom{a_{k}}{k}
$$

where $0 \leq a_{1}<a_{2}<\ldots<a_{k}$, and the $a_{i}$ are integers. (The binomial coefficient $\binom{a}{b}$ is equal to 0 when $0 \leq a<b$.)
