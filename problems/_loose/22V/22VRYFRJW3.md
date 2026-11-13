---
tag: 22VRYFRJW3
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269353
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $0<a<b$ and let $f:[a,b]\to\mathbb R$ be a continuous function with $\int^b_af(t)dt=0$. Show that
$$\int^b_a\int^b_af(x)f(y)\ln(x+y)dxdy\le0.$$
