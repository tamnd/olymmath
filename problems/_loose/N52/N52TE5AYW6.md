---
tag: N52TE5AYW6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=173059
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Divide the numbers $1,2,3, \ldots 2 n$ into two classes such that the first class contains those numbers which are of the form

$$
2^{2 s}\left(1+2^{v_{1}}+2^{v_{2}}+\ldots+2^{v_{2 k}}\right), \text { or } 2^{2 k+1}\left(1+2^{u_{1}}+2^{\mu_{2}}+\ldots+2 \mu_{2 k+1}\right)
$$

The rest belong to the second class. Prove that if $\alpha$ is a number in the first class, then $2 \alpha$ is in the second class, and vice versa. (In other words: $\alpha$ and $2 \alpha$ cannot be in the same class.)
