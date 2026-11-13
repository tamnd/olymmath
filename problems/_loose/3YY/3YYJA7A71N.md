---
tag: 3YYJA7A71N
kind: problem
type: answer
answer: "36.5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265280
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Submit an integer between $0$ and $100$ inclusive as your answer to this problem. Suppose that $Q_1$ and $Q_3$ are the medians of the smallest $50\%$ and largest $50\%$ of submissions for this question. Your goal is to have your submission close to $D=Q_3-Q_1$. If you submit $N$, your score will be $2-2\sqrt{\frac{\left|N-D\right|}{\max\left\{D,100-D\right\}}}$.

*2019 CCA Math Bonanza Lightning Round #5.4*
