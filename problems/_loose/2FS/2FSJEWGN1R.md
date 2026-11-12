---
tag: 2FSJEWGN1R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2016904
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36115
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/1992
    source: hf-ai-mo-aops
    label: 1992 National High School Mathematics League
---
$n$ is a natural number, $f_n(x)=\frac{x^{n+1}-x^{-n-1}}{x-x^{-1}}(x\neq0,\pm1)$ , let $y=x+\frac{1}{x}$ .**(a)** Prove that $f_{n+1}(x)=yf_n(x)-f_{n-1}(x)$ **(b)** Prove with mathematical induction: $f_n(x)=\begin{cases}
y^n-\text{C}_{n-1}^{1}y^{n-2}+\cdots+(-1)^i\text{C}_{n-i}^{i}y^{n-2i}+\cdots+(-1)^{\frac{n}{2}}(i=1,2,\cdots,\frac{n}{2},n\text{ is even})
y^n-\text{C}_{n-1}^{1}y^{n-2}+\cdots+(-1)^i\text{C}_{n-i}^{i}y^{n-2i}+\cdots+(-1)^{\frac{n-1}{2}}\text{C}_{\frac{n+1}{2}}^{\frac{n-1}{2}}y(i=1,2,\cdots,\frac{n-1}{2},n\text{ is odd})
\end{cases}$ .
