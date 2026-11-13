---
tag: MS91AD0TBT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/India/train/0000.parquet#row=78
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2008
    source: hf-mathnet
    label: India Indija TS 2008
---
Let $\alpha$ be a real number larger than $1$. Define a sequence $(s_n)_{n \ge 1}$ as follows: $s_1 = 1$, $s_2 = \alpha$; if $s_1, s_2, s_3, \dots, s_{2^n}$ are defined for some $n \ge 1$, then $s_{2^n+1}, s_{2^n+2}, \dots, s_{2^{n+1}}$ are defined by $s_j = \alpha s_{j-2^n}$, for $2^n+1 \le j \le 2^{n+1}$. (Thus the first few terms are $1, \alpha, \alpha^2, \alpha, \alpha^2, \alpha^3, \dots$) Let $c_n = s_1+s_2+s_3+\dots+s_n$. If $n = 2^{e_0} + 2^{e_1} + \dots + 2^{e_k}$, where $e_0 > e_1 > \dots > e_k \ge 0$ is the binary representation of a positive integer $n$, prove that
$$
c_n = (1 + \alpha)^{e_0} + \alpha(1 + \alpha)^{e_1} + \alpha^2(1 + \alpha)^{e_2} + \dots + \alpha^k(1 + \alpha)^{e_k}.
$$
