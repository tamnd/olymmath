---
tag: FG333VPGEF
kind: problem
type: answer
answer: "104"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239249
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)=x^{2021}+15x^{2020}+8x+9$ have roots $a_i$ where $i=1,2,\cdots , 2021$. Let $p(x)$ be a polynomial of the sam degree such that $p \left(a_i + \frac{1}{a_i}+1 \right)=0$ for every $1\leq i \leq 2021$. If $\frac{3p(0)}{4p(1)}=\frac{m}{n}$ where $m,n \in \mathbb{Z}$, $n>0$ and $\gcd(m,n)=1$. Then find $m+n$.
