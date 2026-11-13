---
tag: ARBE91NNC5
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77267
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 3$ be an integer. For each pair of prime numbers $p$ and $q$ such that $p<q \leqslant n$, Morgane has written the sum $p+q$ on the board. She then notes $\mathcal{P}(n)$ as the product of all these sums. For example, $\mathcal{P}(5)=(2+3) \times(2+5) \times(3+5)=280$.

Find all values of $n \geqslant 3$ for which $n$ ! divides $\mathcal{P}(n)$.

Note: If two sums $p+q$ formed from two different pairs are equal to each other, Morgane writes them both. For example, if $n=13$, she writes both sums $3+13$ and $5+11$.
