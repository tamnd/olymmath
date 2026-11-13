---
tag: WBDEYPTV2D
kind: problem
type: answer
answer: n = 5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221068
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$p(m)$ is the number of distinct prime divisors of a positive integer $m>1$ and $f(m)$ is the $\bigg \lfloor \frac{p(m)+1}{2}\bigg \rfloor$ th smallest prime divisor of $m$. Find all positive integers $n$ satisfying the equation: $$f(n^2+2) + f(n^2+5) = 2n-4$$
