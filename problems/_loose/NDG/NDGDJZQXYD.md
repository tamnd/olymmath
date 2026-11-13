---
tag: NDGDJZQXYD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1219317
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14535
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216329
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2016
    source: hf-ai-mo-aops
    label: 2016 Online Math Open Problems
---
Let $S$ be the set of all pairs $(a, b)$ of integers satisfying $0 \le a, b \le 2014.$ For any pairs $s_1 = (a_1, b_1), s_2 = (a_2, b_2) \in S$ , define $$s_1 + s_2 = ((a_1 + a_2)_{2015}, (b_1 + b_2)_{2015}) \text { and } s_1 \times s_2 = ((a_1a_2 + 2b_1b_2)_{2015}, (a_1b_2 + a_2b_1)_{2015}), $$ where $n_{2015}$ denotes the remainder when an integer $n$ is divided by $2015.$ Compute the number of functions $f : S \rightarrow S$ satisfying $$ f(s_1 + s_2) = f(s_1) + f(s_2) \text{ and } f(s_1 \times s_2) = f(s_1) \times f(s_2) $$ for all $s_1, s_2 \in S.$ *Proposed by Yang Liu*
