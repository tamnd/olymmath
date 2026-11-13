---
tag: SCT0QW1TBF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1202582
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14479
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216273
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2016
    source: hf-ai-mo-aops
    label: 2016 NIMO Problems
---
For a complex number $z \neq 3$ , $4$ , let $F(z)$ denote the real part of $\tfrac{1}{(3-z)(4-z)}$ . If $$
\int_0^1 F \left( \frac{\cos 2 \pi t + i \sin 2 \pi t}{5} \right) dt = \frac mn
$$ for relatively prime positive integers $m$ and $n$ , find $100m+n$ .

*Proposed by Evan Chen*
