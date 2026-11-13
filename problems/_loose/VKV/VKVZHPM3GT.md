---
tag: VKVZHPM3GT
kind: problem
type: answer
answer: -5 + 4\sqrt{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n\leq 49$ we define the numbers $a_n = 3n+\sqrt{n^2-1}$ and $b_n=2(\sqrt{n^2+n}+\sqrt{n^2-n})$. Prove that there exist two integers $A,B$ such that
$$ \sqrt{a_1-b_1}+\sqrt{a_2-b_2} + \cdots + \sqrt{a_{49}-b_{49}} = A+B\sqrt2. $$
