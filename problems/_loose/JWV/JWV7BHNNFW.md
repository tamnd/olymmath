---
tag: JWV7BHNNFW
kind: problem
type: answer
answer: (n - 4) 2^{n - 5}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=182
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
We consider numbers written in digits $0$ and $1$. We say that $M$ is a *subnumber* of $N$ if it is possible to obtain $M$ from $N$ by deleting some digits from the beginning and some digits from the end of $N$.

Fix $M = 10101$ and let $g(N)$ denote the number of times $M$ appears as a subnumber of $N$. For example, $g(101101) = 0$, $g(10101101) = 1$ and $g(1010101) = 2$.

For $n \ge 5$, find the sum $\sum g(N)$ where $N$ runs over all numbers written in digits $0$ and $1$, with at most $n$ digits.

(Nyamdavaa Amar)
