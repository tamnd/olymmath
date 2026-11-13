---
tag: DKNBE16NHW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121035
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{f_{n}\right\}$ satisfies: $f_{1}=f_{2}=1, f_{n+2}=f_{n+1}+f_{n}(n=1,2, \cdots)$. Prove: For all positive integers $n$, we have
$$
\mathrm{C}_{n}^{1} f_{1}+\mathrm{C}_{n}^{2} f_{2}+\cdots+\mathrm{C}_{n}^{n} f_{n}<\frac{(2 n+2)^{n}}{n!} .
$$
