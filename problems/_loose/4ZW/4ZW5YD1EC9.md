---
tag: 4ZW5YD1EC9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1985 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h82552
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22904
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224032
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1985
    source: hf-ai-mo-aops
    label: 1985 IberoAmerican
---
Find all the triples of integers $ (a, b,c)$ such that:
$$ \begin{array}{ccc}a+b+c &=& 24 a^{2}+b^{2}+c^{2}&=& 210 abc &=& 440\end{array}$$
