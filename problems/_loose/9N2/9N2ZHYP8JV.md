---
tag: 9N2ZHYP8JV
kind: problem
type: answer
answer: "201"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55108
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a 29-digit number $X=\overline{a_{1}} \overline{-} \overline{-} \overline{29}\left(0 \leq a_{k} \leq 9, a_{1} \neq 0\right)$. It is known that for every $k$ the digit $a_{k}$ appears $a_{30-k}$ times in the number (for example, if $a_{10}=7$, then the digit $a_{20}$ appears seven times). Find the sum of the digits of the number $X$.
