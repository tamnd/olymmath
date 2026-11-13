---
tag: 813QHXWKAJ
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=202459
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Set $u_0 = \frac{1}{4}$, and for $k \ge 0$ let $u_{k+1}$ be determined by the recurrence $$u_{k+1} = 2u_k - 2u_k^2.$$
This sequence tends to a limit; call it $L$. What is the least value of $k$ such that $$|u_k-L| \le \frac{1}{2^{1000}}?$$
$\textbf{(A)}\: 10 \textbf{(B)}\: 87 \textbf{(C)}\: 123 \textbf{(D)}\: 329 \textbf{(E)}\: 401$
