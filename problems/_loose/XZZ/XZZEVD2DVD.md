---
tag: XZZEVD2DVD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=269
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran 38th Iranian Mathematical Olympiad
---
Let $a$, $b$, $c$, $d$ be pair-wise coprime positive integers not all equal to $1$. Let $f, g: \mathbb{N} \to \{0, 1\}$ be two *multiplicative* functions such that for all positive integers $n$, $f(an + b) = g(cn + d)$. Prove that at least one of these two claims are true:

i. $f(an + b) = g(cn + d) = 0$, for all positive integers $n$.

ii. There is a positive integer $D$ such that for all positive integers $n$ with $\text{gcd}(n, D) = 1$, we have $f(n) = g(n) = 1$.

(We call a function $h: \mathbb{N} \to \mathbb{R}$ multiplicative if $h(mn) = h(m)h(n)$ for all positive integers $m$, $n$.)
