---
tag: TN3QMBKV4V
kind: problem
type: answer
answer: a_{k+1}+a_{k+2}+\cdots+a_{}=39
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129054
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \cdots, a_{100}$ be a sequence composed of 1s and 2s, and it is known that the sum of any 10 consecutive numbers starting from any number does not exceed 16. That is, for $1 \leqslant i \leqslant 91$, we always have
$$
a_{i}+a_{i+1}+\cdots+a_{i+9} \leqslant 16
$$

Then there exist at least $h$ and $k, k>h$, such that
$$
a_{h}+a_{h+1}+\cdots+a_{k}=39
$$
