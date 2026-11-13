---
tag: CYASBYTZT0
kind: problem
type: answer
answer: "11"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=202449
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m\ge 5$ be an odd integer, and let $D(m)$ denote the number of quadruples $(a_1, a_2, a_3, a_4)$ of distinct integers with $1\le a_i \le m$ for all $i$ such that $m$ divides $a_1+a_2+a_3+a_4$. There is a polynomial
$$q(x) = c_3x^3+c_2x^2+c_1x+c_0$$such that $D(m) = q(m)$ for all odd integers $m\ge 5$. What is $c_1?$
$\textbf{(A)}\ {-}6 \textbf{(B)}\ {-}1 \textbf{(C)}\ 4 \textbf{(D)}\ 6 \textbf{(E)}\ 11$
