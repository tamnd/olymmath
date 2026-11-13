---
tag: 5XFG6SEWBR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 JBMO ShortLists
    url: https://artofproblemsolving.com/community/c6h374853
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25866
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226581
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2000
    source: hf-ai-mo-aops
    label: 2000 JBMO ShortLists
---
Prove that
$$ \sqrt{(1^k+2^k)(1^k+2^k+3^k)\ldots (1^k+2^k+\ldots +n^k)}$$
$$ \ge 1^k+2^k+\ldots +n^k-\frac{2^{k-1}+2\cdot 3^{k-1}+\ldots + (n-1)\cdot n^{k-1}}{n}$$
for all integers $n,k \ge 2$ .
