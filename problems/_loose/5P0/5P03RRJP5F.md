---
tag: 5P03RRJP5F
kind: problem
type: answer
answer: All positive integer pairs (a, b) with gcd(a, b) = 1 and a + b odd.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=195
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs $(a, b)$ of positive integers such that $f(x) = x$ is the only function $f: \mathbb{R} \to \mathbb{R}$ that satisfies
$$
f^a(x)f^b(y) + f^b(x)f^a(y) = 2xy
$$
for all $x, y \in \mathbb{R}$.
Here $f^n(x)$ represents the function obtained by applying $n$ times the function $f$ to $x$, so $f^1(x) = f(x)$ and $f^{n+1}(x) = f(f^n(x))$.
