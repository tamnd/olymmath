---
tag: RXNFTSQQWB
kind: problem
type: answer
answer: \frac{27}{n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180030
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c, n>0$ with $a+b+c=1$. Prove the inequality:

$$
\frac{a}{b c(b+n c)}+\frac{b}{c a(c+n a)}+\frac{c}{a b(a+n b)} \geq \frac{27}{n+1}
$$
