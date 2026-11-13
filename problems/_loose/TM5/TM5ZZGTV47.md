---
tag: TM5ZZGTV47
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Bulgaria EGMO TST
    url: https://artofproblemsolving.com/community/c6h3008233
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32939
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231986
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-egmo-tst/2019
    source: hf-ai-mo-aops
    label: 2019 Bulgaria EGMO TST
---
In terms of the fixed non-negative integers $\alpha$ and $\beta$ determine the least upper bound of the ratio (or show that it is unbounded)
$$ \frac{S(n)}{S(2^{\alpha}5^{\beta}n)} $$
as $n$ varies through the positive integers, where $S(\cdot)$ denotes sum of digits in decimal representation.
