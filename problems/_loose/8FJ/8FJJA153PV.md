---
tag: 8FJJA153PV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241948
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f_1(x)=x,f_n(x)=x+\frac{1}{14}\int_0^\pi xf_{n-1}(t)\cos ^ 3 t\ dt\ (n\geq 2)$.

Find $\lim_{n\to\infty} f_n(x)$
