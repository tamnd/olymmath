---
tag: QQ0V3CENB6
kind: problem
type: answer
answer: (2^{k+1}-1)\cdot2^{k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37933
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If we write the progression $\div 4,8,(16,32), \ldots,\left(2^{2 n}, 2^{2 n+1}\right)$, then every pair of numbers in parentheses gives a perfect number if the larger number of this pair, decreased by one, is multiplied by the smaller.

Note. Provided that $2^{2 n+1}-1$ is a prime number. Stifel overlooked this.

Remark. If $2^{2 n+1}-1$ is a prime number, then the product of the smaller number and the larger number of the pair, decreased by one, gives a perfect number. Stifel missed this point.
