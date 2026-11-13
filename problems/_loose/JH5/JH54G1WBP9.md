---
tag: JH54G1WBP9
kind: problem
type: answer
answer: \frac{1}{8}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178387
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left(a_{n}\right)_{n \geq 1}$ be defined by $a_{1}=1$ and $a_{n+1}=\frac{a_{n}}{1+n a_{n}}, n \geq 1$. Calculate

$$
\lim _{n \rightarrow \infty} \frac{1}{n^{4}}\left(\frac{1}{a_{1}}+\frac{2}{a_{2}}+\ldots+\frac{n}{a_{n}}\right)
$$
