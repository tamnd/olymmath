---
tag: TBNXKQBR1A
kind: problem
type: answer
answer: abcde = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204672
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given pairwise different real numbers $a,b,c,d,e$ such that
$$
\left\{ \begin{array}{ll}
ab + b = ac + a, \\
bc + c = bd + b, \\
cd + d = ce + c, \\
de + e = da + d.
\end{array} \right.
$$
Prove that $abcde=1$.
