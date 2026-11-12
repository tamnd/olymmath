---
tag: ZVGWSBTJ4W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33892
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X_{1}, X_{2}, \ldots$ be a sequence of exchangeable random variables,

$$
\mathrm{P}\left(X_{i}=X_{j}\right)=0, i \neq j
$$

Let $A_{1}, A_{2}, \ldots$ be a sequence of events such that $A_{1}=\Omega$ and for $n \geqslant 2$ the equality

$$
A_{n}=\left\{X_{n}>X_{m} \text { for all } m<n\right\}
$$

holds. The event $A_{n}$ can be interpreted as the event that a record occurs at time $n$. Show that the events $A_{1}, A_{2}, \ldots$ (and, therefore, $I_{A_{1}}, I_{A_{2}}, \ldots$) are independent and

$$
\mathrm{P}\left(A_{n}\right)=\frac{1}{n}, n \geqslant 1
$$
