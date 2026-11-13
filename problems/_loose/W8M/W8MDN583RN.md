---
tag: W8MDN583RN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25462
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Soviet_Union/train/0000.parquet#row=246
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Soviet Union ASU
---
Consider $n$ numbers $a_{1}, a_{2}, \ldots, a_{n}$. Let

$$
\begin{aligned}
& b_{k}=\frac{a_{1}+a_{2}+\ldots+a_{k}}{k}(\text { for } k=1,2, \ldots, n) \\
& C=\left(a_{1}-b_{1}\right)^{2}+\left(a_{2}-b_{2}\right)^{2}+\ldots+\left(a_{n}-b_{n}\right)^{2} \\
& D=\left(a_{1}-b_{n}\right)^{2}+\left(a_{2}-b_{n}\right)^{2}+\ldots+\left(a_{n}-b_{n}\right)^{2}
\end{aligned}
$$

Prove the inequalities $C \leqslant D \leqslant 2 C$.
