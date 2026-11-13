---
tag: NWGW7NBFTZ
kind: problem
type: answer
answer: Number of matrices = 0 if a^m ≠ b^n; otherwise it equals |S|^{(m−1)(n−1)}.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=271
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A nonempty finite set $S$ of complex numbers has the property: $xy \in S$, for every $x, y \in S$.

a) Prove that, for every $x \in S$, $\frac{1}{x} \in S$.

b) Let $a, b$ be two fixed elements of $S$ and $m, n \in \mathbb{N}$, $m, n \ge 2$. Find the number of $m \times n$ matrices, with elements from $S$, having the product of the elements of each line equal to $a$ and the product of the elements of each column equal to $b$.
