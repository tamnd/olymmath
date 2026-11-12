---
tag: SXCJSBM6B3
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10211
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$x_{1}^{2}+x_{2}^{2}=\left(x_{1}+x_{2}\right)^{2}-2 x_{1} x_{2}$, but according to Vieta's theorem $\left\{\begin{array}{l}D \geq 0 \\ x_{1}+x_{2}=-(m+1) . \text { Then, } \mathrm{c} \\ x_{1} x_{2}=2 m-2\end{array}\right.$

considering that $D=(m+3)^{2} \geq 0$, we have $x_{1}^{2}+x_{2}^{2}=$

$(-(m+1))^{2}-2(2 m-2)=m^{2}+2 m+1-4(m-1)=m^{2}-2 m+5=(m-1)^{2}+4$

From which $y=(m-1)^{2}+4$ and $y_{\text {min }}=4$ when $m=1$.
