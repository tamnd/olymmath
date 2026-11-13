---
tag: ZESWG8D68B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1954 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1895174
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56771
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249669
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1954
    source: hf-ai-mo-aops
    label: 1954 Moscow Mathematical Olympiad
---
Given a sequence of numbers $a_1, a_2, ..., a_{15}$ , one can always construct a new sequence $b_1,b_2, ..., b_{15}$ , where $b_i$ is equal to the number of terms in the sequence $\{a_k\}^{15}_{k=1}$ less than $a_i$ ( $i = 1, 2,..., 15$ ). Is there a sequence $\{a_k\}^{15}_{k=1}$ for which the sequence $\{b_k\}^{15}_{k=1}$ is $$ 1, 0, 3, 6, 9, 4, 7, 2, 5, 8, 8, 5, 10, 13, 13 \,? $$
