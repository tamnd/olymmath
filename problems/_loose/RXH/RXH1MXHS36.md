---
tag: RXH1MXHS36
kind: problem
type: answer
answer: "689"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261711
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Say an integer polynomial is $\textit{primitive}$ if the greatest common divisor of its coefficients is $1$. For example, $2x^2+3x+6$ is primitive because $\gcd(2,3,6)=1$. Let $f(x)=a_2x^2+a_1x+a_0$ and $g(x) = b_2x^2+b_1x+b_0$, with $a_i,b_i\in\{1,2,3,4,5\}$ for $i=0,1,2$. If $N$ is the number of pairs of polynomials $(f(x),g(x))$ such that $h(x) = f(x)g(x)$ is primitive, find the last three digits of $N$.
