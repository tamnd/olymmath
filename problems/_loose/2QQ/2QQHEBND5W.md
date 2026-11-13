---
tag: 2QQHEBND5W
kind: problem
type: answer
answer: a_{n}=\frac{\mathrm{i}^{n}+(-\mathrm{i})^{n}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107079
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left\{a_{n}\right\}$ satisfy for all positive integers $n$,
$$
1+\sum_{m=1}^{n} \mathrm{C}_{n}^{m} a_{m}=2^{\frac{n}{2}} \cos \frac{n \pi}{4} .
$$

Find the general term formula of the sequence $\left\{a_{n}\right\}$.
