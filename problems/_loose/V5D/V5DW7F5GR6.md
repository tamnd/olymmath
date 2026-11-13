---
tag: V5DW7F5GR6
kind: problem
type: answer
answer: "135"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116155
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $n$, define
$$
S(n)=\left[\frac{n}{10^{[\lg n]}}\right]+10\left(n-10^{[\lg n]}\left[\frac{n}{10^{[\operatorname{Ig} n]}}\right]\right) \text {. }
$$

Then among the positive integers $1,2, \cdots, 5000$, the number of positive integers $n$ that satisfy $S(S(n))=n$ is $ $
