---
tag: D0D7FKRXCE
kind: problem
type: answer
answer: \binom{2022}{1011}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The set $\mathcal{A}$ consists with some functions from $\{1,2,\ldots,2023\}$ to $\{1,2,\ldots,2023\}$ satisfying the following two conditions:
- For any function $f$ in $\mathcal{A}$ and two integers $x,y$ ($1\leq x<y\leq 2023$), we have $f(x)\geq f(y)$.
- For any functions $f,g$ in $\mathcal{A}$ and any integer $x$ ($1\leq x\leq 2023$), we have $f(g(x))=g(f(g(x)))$.
Find the maximal possible number of elements in $\mathcal{A}$.
