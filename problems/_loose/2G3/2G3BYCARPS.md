---
tag: 2G3BYCARPS
kind: problem
type: answer
answer: a_n = p_{n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242275
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $\{p_n\}$ defined by $p_1=1,\ p_2=1,\ p_{n+2}=p_n+p_{n+1}\ (n\geq 1)$ is called Fibonacci Sequence and the general term is given by

$$p_n=\frac{1}{\sqrt{5}}\left\{\left(\frac{1+\sqrt{5}}{2}\right)^n-\left(\frac{1-\sqrt{5}}{2}\right)^n\right\}$$

if necessary, use the fact to answer the following questions.

A natural sequence $X_n\ (n=1,\ 2,\ \cdots)$ such that the figure of each digit is $0$ or $1$ is determined by the following rules.

(i) $X_1=1$.

(ii) If the figure $\alpha$ in some digit in $X_n$ is $0$, then we replace $\alpha$ into $1$ and if $\alpha$ is $1$, then we replace $\alpha$ into $'10'$. Denote $X_{n+1}$ natural number which can be obtained by replacing such this for each digit. For instance, $X_1=1,\ X_2=10,\ X_3=101,\ X_4=10110,\ X_5=10110101,\ \cdots$.

(1) Find the number $a_n$ of the digit of $X_n$.

(2) Find the number $b_n$ of appearing the arrangement of $'01'$ in $X_n$, for instance $b_1=0,\ b_2=0,\ b_3=1,\ b_4=1,\ b_5=3,\ \cdots$.

*1992 Tokyo University entramce exam/Humanities*
