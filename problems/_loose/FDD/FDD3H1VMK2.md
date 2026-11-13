---
tag: FDD3H1VMK2
kind: problem
type: answer
answer: \frac{\pi}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131993
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left\{A_{n}\right\}$ satisfy
$$
\begin{array}{l}
A_{1}=1, A_{2}=3, A_{n}=4 A_{n-1}-A_{n-2} . \\
\text { Find } \sum_{n=1}^{+\infty} \operatorname{arccot} 2 A_{n}^{2} \text { . }
\end{array}
$$
