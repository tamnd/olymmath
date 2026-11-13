---
tag: 9H4MESSWHT
kind: problem
type: answer
answer: \frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167550
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The first term of a sequence is $a_{1}=1$ and for each subsequent term,

$$
a_{n+1}=1+\frac{n}{a_{n}}, n=1,2,3 \ldots
$$

Does the following limit exist? If it does, determine it.

$$
\lim _{n \rightarrow \infty}\left(a_{n}-\sqrt{n}\right)
$$
