---
tag: XCC2GVZTQV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=42379
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove the identities:

1) $\cos n x=\cos ^{n} x-C_{n}^{2} \cos ^{n-2} x \sin ^{2} x+C_{n}^{4} \cos ^{n-4} \sin ^{4} x-\ldots+$

$$
+\left\{\begin{array}{l}
(-1)^{\frac{n}{2}} \sin ^{n} x (n-\text { even }) \\
(-1)^{\frac{n-1}{2}} n \cos x \sin ^{n-1} x(n-\text { odd })
\end{array}\right.
$$

2) $\sin n x=n \cos ^{n-1} x \sin x-C_{n}^{3} \cos ^{n-3} x \sin ^{3} x+\ldots+$

$$
+\left\{\begin{array}{l}
(-1)^{\frac{n-2}{2}} n \cos x \sin ^{n-1} x (n-\text { even }) \\
(-1)^{\frac{n-1}{2}} \sin ^{n} x (n-\text { odd) }
\end{array}\right.
$$
