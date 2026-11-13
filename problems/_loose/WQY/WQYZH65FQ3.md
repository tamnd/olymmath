---
tag: WQYZH65FQ3
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206474
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $C: y=\ln x$. For each positive integer $n$, denote by $A_n$ the area of the part enclosed by the line passing through two points $(n,\ \ln n),\ (n+1,\ \ln (n+1))$ and denote by $B_n$ that of the part enclosed by the tangent line at the point $(n,\ \ln n)$, $C$ and the line $x=n+1$. Let $g(x)=\ln (x+1)-\ln x$.

(1) Express $A_n,\ B_n$ in terms of $n,\ g(n)$ respectively.

(2) Find $\lim_{n\to\infty} n\{1-ng(n)\}$.
