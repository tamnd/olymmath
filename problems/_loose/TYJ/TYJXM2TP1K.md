---
tag: TYJXM2TP1K
kind: problem
type: answer
answer: \frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212483
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define sequences $\{a_n\},\ \{b_n\}$ by
$$a_n=\int_{-\frac {\pi}6}^{\frac{\pi}6} e^{n\sin \theta}d\theta,\ b_n=\int_{-\frac {\pi}6}^{\frac{\pi}6} e^{n\sin \theta}\cos \theta d\theta\ (n=1,\ 2,\ 3,\ \cdots).$$

(1) Find $b_n$.

(2) Prove that for each $n$, $b_n\leq a_n\leq \frac 2{\sqrt{3}}b_n.$

(3) Find $\lim_{n\to\infty} \frac 1{n}\ln (na_n).$
