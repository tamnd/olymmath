---
tag: D9NXT8ZMXA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 CMIMC Team
    url: https://artofproblemsolving.com/community/c6h3041326
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70847
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261954
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2023
    source: hf-ai-mo-aops
    label: 2023 CMIMC Team
---
Suppose that the sequence of real numbers $a_1,a_2,\ldots$ satisfies $a_1 = - \sqrt{1}, a_2 = \sqrt{2}$ , and for all $k > 1$ ,
$$ \frac{a_{k+1}+a_{k-1}}{a_k} = \frac{\sqrt{3} + \sqrt{1}}{\sqrt{2}}. $$
Find $a_{2023}$ .

*Proposed by Kevin You*
