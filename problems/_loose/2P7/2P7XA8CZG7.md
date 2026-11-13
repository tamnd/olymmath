---
tag: 2P7XA8CZG7
kind: problem
type: answer
answer: '\{ m : m \equiv 0 \pmod{d} \}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220746
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all integers $m\ge2$ for which there exists an integer $n\ge1$ with
$\gcd(m,n)=d$ and $\gcd(m,4n+1)=1$.

*Proposed by Gerhard Woeginger, Austria*
