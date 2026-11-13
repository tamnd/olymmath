---
tag: W2BRENYQTX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2025
    source: hf-mathnet
    label: Mongolia MMO2025 Round 4
---
Let $\phi(n)$ denote the number of positive integers less than or equal to a given integer $n$ that are relatively prime to $n$. For example, $\phi(6) = |\{1, 5\}| = 2$ and $\phi(1) = |\{1\}| = 1$.
Let $a, b, c, d$ be nonnegative integers such that $\phi(2^a(2b+1)) = 2^c(2d+1)$. If $b \ge 1$ then show that
(1) $a \le c$ and,
(2) $b \ge 2d + 1$.
