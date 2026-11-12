---
tag: FW3ZY3YCKH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34129
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi \sim \mathscr{N}(0,1)$ and

$$
\eta_{\alpha}= \begin{cases}\xi, & \text { if }|\xi| \leqslant \alpha \\ -\xi, & \text { if }|\xi|>\alpha\end{cases}
$$

Show that $\eta_{\alpha} \sim \mathscr{N}(0,1)$ and for such $\alpha$ that

$$
\int_{0}^{\alpha} x^{2} \varphi(x) d x=\frac{1}{4}, \varphi(x)=\frac{1}{\sqrt{2 \pi}} e^{-\frac{x^{2}}{2}}
$$

the variables $\xi$ and $\eta_{\alpha}$ are uncorrelated but dependent Gaussian variables (cf. Theorem 1(a) from V1.II.13).
