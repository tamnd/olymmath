---
tag: NV310DVHZZ
kind: problem
type: answer
answer: f(x)=x^{2/3}-1,1\leqx\leq8
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190856
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all continuous functions $f:[1,8] \rightarrow R$, such that

$$
\int_{1}^{2} f^{2}\left(t^{3}\right) d t+2 \int_{1}^{2} f\left(t^{3}\right) d t=\frac{2}{3} \int_{1}^{8} f(t) d t-\int_{1}^{2}\left(t^{2}-1\right)^{2} d t
$$
