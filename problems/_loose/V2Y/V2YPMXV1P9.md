---
tag: V2YPMXV1P9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h560322
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10078
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212074
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
A wishing well is located at the point $(11,11)$ in the $xy$ -plane. Rachelle randomly selects an integer $y$ from the set $\left\{ 0, 1, \dots, 10 \right\}$ . Then she randomly selects, with replacement, two integers $a,b$ from the set $\left\{ 1,2,\dots,10 \right\}$ . The probability the line through $(0,y)$ and $(a,b)$ passes through the well can be expressed as $\frac mn$ , where $m$ and $n$ are relatively prime positive integers. Compute $m+n$ .

*Proposed by Evan Chen*
