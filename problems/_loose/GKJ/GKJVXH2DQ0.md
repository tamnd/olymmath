---
tag: GKJVXH2DQ0
kind: problem
type: answer
answer: "1717"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10323
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $a-$ is the first term and $d-$ is the common difference of an arithmetic progression, $\left\{\begin{array}{l}a+16 d=52, \\ a+29 d=13\end{array} \Leftrightarrow d=-3, a=100\right.$.

The sum of the first $n$ terms of an arithmetic progression $S_{n}$ reaches its maximum value if $a_{n}>0$, and $a_{n+1} \leq 0$. Since $a_{n}=a+d(n-1)$, from the inequality $100-3(n-1)>0$ we find $n=[103 / 3]=34$. Then $\max S_{n}=S_{34}=0.5 \cdot(100+100-3 \cdot 33) \cdot 34=1717$.
