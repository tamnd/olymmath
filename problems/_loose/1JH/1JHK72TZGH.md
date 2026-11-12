---
tag: 1JHK72TZGH
kind: problem
type: answer
answer: "190247"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5268
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If in the septenary system a number is written as $\overline{a b c}=49 a+7 b+c$, then in the system of base 11 it equals $121 c+11 b+a$. Therefore, $49 a+7 b+c=121 c+11 b+a \Longleftrightarrow b=12 a-30 c=6(2 a-5 c)$. Since $b \in[0 ; 6]$, either $b=6,2 a-5 c=1$ (then $c=1, a=3$), or $b=0,2 a-5 c=0$ (then $c=2, a=5$). In the first case, the number is $361_{7}=3 \cdot 49+6 \cdot 7+1=190$, in the second $502_{7}=5 \cdot 49+0 \cdot 7+2=247$.
