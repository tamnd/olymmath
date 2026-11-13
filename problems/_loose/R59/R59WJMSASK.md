---
tag: R59WJMSASK
kind: problem
type: answer
answer: f(x)=x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94332
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: Z_{+} \rightarrow Z_{+}$, satisfying
$$
f(x+y f(x))=x+f(x) f(y)
$$

for all positive integers $x, y$.
(2018, Taiwan Mathematical Olympiad Training Camp)
