---
tag: BJ8NVZQ9F7
kind: problem
type: answer
answer: \lim_{t \to \infty} I_n(t) = \frac{n!}{a^{n+1}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242186
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ a$ be a positive constant number. For a positive integer $ n$, define a function $ I_n(t)$ by $ I_n(t)=\int_0^t x^ne^{-ax}dx$. Answer the following questions.

Note that you may use $ \lim_{t\rightarrow \infty} t^ne^{-at}=0$ without proof.

(1) Evaluate $ I_1(t)$.

(2) Find the relation of $ I_{n+1}(t),\ I_n(t)$.

(3) Prove that there exists $ \lim_{t\to\infty} I_n(t)$ for all natural number $ n$ by using mathematical induction.

(4) Find $ \lim_{t\to\infty} I_n(t)$.
