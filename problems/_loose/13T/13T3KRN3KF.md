---
tag: 13T3KRN3KF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h560341
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10097
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212093
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
The real numbers $a_0, a_1, \dots, a_{2013}$ and $b_0, b_1, \dots, b_{2013}$ satisfy $a_{n} = \frac{1}{63} \sqrt{2n+2} + a_{n-1}$ and $b_{n} = \frac{1}{96} \sqrt{2n+2} - b_{n-1}$ for every integer $n = 1, 2, \dots, 2013$ . If $a_0 = b_{2013}$ and $b_0 = a_{2013}$ , compute $$ \sum_{k=1}^{2013} \left( a_kb_{k-1} - a_{k-1}b_k \right). $$*Proposed by Evan Chen*
