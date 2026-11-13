---
tag: G4CQYFWZBJ
kind: problem
type: answer
answer: n = 2, 4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203977
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integer $n$, such that
$$\left[\frac{n}{2^0}\right]\left[\frac{n}{2^1}\right]\ldots\left[\frac{n}{2^k}\right]+2\cdot 4^{[\frac{k}{2}]}$$
is a square, where $k$ is the non-negative integer satisfying $2^k\leq n<2^{k+1}$.
