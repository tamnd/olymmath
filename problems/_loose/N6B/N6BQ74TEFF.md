---
tag: N6BQ74TEFF
kind: problem
type: answer
answer: "2005"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253972
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1 = \sqrt 7$ and $b_i = \lfloor a_i \rfloor$, $a_{i+1} = \dfrac{1}{b_i - \lfloor b_i \rfloor}$ for each $i\geq i$. What is the smallest integer $n$ greater than $2004$ such that $b_n$ is divisible by $4$? ($\lfloor x \rfloor$ denotes the largest integer less than or equal to $x$)

$
\textbf{(A)}\ 2005
\textbf{(B)}\ 2006
\textbf{(C)}\ 2007
\textbf{(D)}\ 2008
\textbf{(E)}\ \text{None of above}
$
