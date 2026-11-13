---
tag: 7S8TWYN7AJ
kind: problem
type: answer
answer: all positive integers n with n ≡ 3 (mod 6)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=165
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam VMO
---
Let $f_n(x)$ be a sequence of polynomials, where $f_0(x) = 2$, $f_1(x) = 3x$, and
$$
f_n(x) = 3x f_{n-1}(x) + (1 - x - 2x^2) f_{n-2}(x)
$$
for all $n \ge 2$. Determine all positive integers $n$ such that $f_n(x)$ is divisible by $x^3 - x^2 + x$.
