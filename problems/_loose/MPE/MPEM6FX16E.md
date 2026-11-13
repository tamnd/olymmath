---
tag: MPEM6FX16E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239076
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider an unbiased coin which is tossed infinitely many times. Let $A_n$ be the event that no two successive heads occur in the first $n$ tosses of this experiment. Then which of the following is incorrect :
(A) $\lim_{n \to \infty} P(A_n)=0$

(B) $\lim_{n \to \infty}3^n P(A_n)=0$

(C) $2^nP(A_n) +2^{n+1}P(A_{n+1})=2^{n+2}P(A_{n+2}$

(D) $\lim_{n \to \infty} \frac{P(A_n)}{P(A_{n+1})}$ is lesser than $1.2$
