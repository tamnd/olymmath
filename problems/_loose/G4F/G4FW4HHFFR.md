---
tag: G4FW4HHFFR
kind: problem
type: answer
answer: -(\frac{1}{2})^{2015}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f_{1}(x)=\frac{2}{1+x}, f_{n+1}(x)=f_{1}\left(f_{n}(x)\right)$, and $a_{n}=\frac{f_{n}(0)-1}{f_{n}(0)+2}$. Then $a_{2014}=$
