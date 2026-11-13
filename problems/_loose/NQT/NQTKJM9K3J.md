---
tag: NQTKJM9K3J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=347
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2025
    source: hf-mathnet
    label: China 2025 International Mathematical Olympiad China National Team Selection Test
---
Given nonzero real numbers $\lambda_1, \lambda_2, \dots, \lambda_{2025}$ and a real number $d$. Let $X$ be a finite set of real numbers. Define the sets:
$$
A = \{(x_1, \dots, x_{2025}) \in X^{2025} \mid \lambda_1 x_1 + \dots + \lambda_{2025} x_{2025} = d\};
$$
$$
B = \{(x_1, \dots, x_{2024}) \in X^{2024} \mid x_1 + \dots + x_{1012} = x_{1013} + \dots + x_{2024}\};
$$
$$
C = \{(x_1, \dots, x_{2026}) \in X^{2026} \mid x_1 + \dots + x_{1013} = x_{1014} + \dots + x_{2026}\};
$$
where $X^n$ denotes the set of all ordered tuples $(x_1, \dots, x_n)$ with $x_i \in X$ ($i = 1, \dots, n$).
Prove: $|A|^2 \le |B| \cdot |C|$, where $|Y|$ denotes the number of elements in the finite set $Y$.
