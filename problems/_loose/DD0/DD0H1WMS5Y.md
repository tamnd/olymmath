---
tag: DD0H1WMS5Y
kind: problem
type: answer
answer: a) No; for example, 24 and 27. b) 10
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=127
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
We call positive integers $n, m$ an *interesting pair* if $n < m$ and the greatest prime factor of $n$ is equal to the greatest prime factor of $m$.

a. For an interesting pair $n, m$, will there always exist a prime $p$ such that $n < p < m$?

b. Among the first 25 positive integers, how many don't form an interesting pair with any smaller positive integer?
