---
tag: T3HH2X02SY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 ELMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3100580
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69340
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260363
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2023
    source: hf-ai-mo-aops
    label: 2023 ELMO Shortlist
---
Determine the greatest positive integer $n$ for which there exists a sequence of distinct positive integers $s_1$, $s_2$, $\ldots$, $s_n$ satisfying $$s_1^{s_2}=s_2^{s_3}=\cdots=s_{n-1}^{s_n}.$$

*Proposed by Holden Mui*
